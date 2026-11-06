import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const mimeTypes = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'application/javascript',
	'.png': 'image/png',
	'.svg': 'image/svg+xml',
	'.pdf': 'application/pdf',
	'.woff2': 'font/woff2',
	'.txt': 'text/plain',
	'.xml': 'application/xml',
	'.webmanifest': 'application/manifest+json'
};

const headersContent = fs.readFileSync('build/_headers', 'utf-8');
const headerRules = {};
let currentPath = null;

headersContent.split(/\r?\n/).forEach((line) => {
	const trimmed = line.trim();
	if (!trimmed || trimmed.startsWith('#')) return;

	if (line.startsWith('/') || line.startsWith('/*')) {
		currentPath = trimmed;
		headerRules[currentPath] = {};
	} else if (currentPath && line.includes(':')) {
		const [k, ...v] = trimmed.split(':');
		headerRules[currentPath][k.trim()] = v.join(':').trim();
	}
});

const server = http.createServer((req, res) => {
	let reqPath = decodeURI(req.url.split('?')[0]);
	if (reqPath.endsWith('/')) reqPath += 'index.html';

	let filePath = path.join('build', reqPath);
	if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
		filePath = path.join(filePath, 'index.html');
	}

	if (!fs.existsSync(filePath)) {
		filePath = path.join('build', '404.html');
		if (!fs.existsSync(filePath)) {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('404 Not Found');
			return;
		}
	}

	const ext = path.extname(filePath);
	const contentType = mimeTypes[ext] || 'application/octet-stream';
	const resHeaders = { 'Content-Type': contentType };

	if (headerRules['/*']) {
		Object.assign(resHeaders, headerRules['/*']);
	}

	for (const [pattern, headers] of Object.entries(headerRules)) {
		if (pattern !== '/*' && reqPath.startsWith(pattern.replace('/*', ''))) {
			Object.assign(resHeaders, headers);
		}
	}

	res.writeHead(200, resHeaders);
	fs.createReadStream(filePath).pipe(res);
});

server.listen(4173, async () => {
	console.log('Test static server running at http://localhost:4173');

	const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
	const chrome = spawn(chromePath, [
		'--headless=new',
		'--remote-debugging-port=9222',
		'--disable-gpu',
		'--no-first-run',
		'--no-default-browser-check',
		'http://localhost:4173'
	]);

	await new Promise((r) => setTimeout(r, 2000));

	try {
		const targetsRes = await fetch('http://127.0.0.1:9222/json');
		const targets = await targetsRes.json();
		const pageTarget = targets.find((t) => t.type === 'page');

		if (!pageTarget) {
			console.error('No page target found');
			cleanup(1);
			return;
		}

		console.log('Connecting to WebSocket:', pageTarget.webSocketDebuggerUrl);
		const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

		const logs = [];
		const errors = [];
		const cspViolations = [];

		let msgId = 1;
		function send(method, params = {}) {
			return new Promise((resolve) => {
				const id = msgId++;
				const handler = (event) => {
					const msg = JSON.parse(event.data);
					if (msg.id === id) {
						ws.removeEventListener('message', handler);
						resolve(msg.result);
					}
				};
				ws.addEventListener('message', handler);
				ws.send(JSON.stringify({ id, method, params }));
			});
		}

		ws.onopen = async () => {
			await send('Console.enable');
			await send('Log.enable');
			await send('Runtime.enable');
			await send('Page.enable');

			ws.onmessage = (event) => {
				const msg = JSON.parse(event.data);
				if (msg.method === 'Console.messageAdded') {
					const text = msg.params.message.text;
					logs.push(text);
					if (msg.params.message.level === 'error') {
						errors.push(text);
						if (text.toLowerCase().includes('content security policy') || text.toLowerCase().includes('violates')) {
							cspViolations.push(text);
						}
					}
				}
				if (msg.method === 'Log.entryAdded') {
					const entry = msg.params.entry;
					logs.push(entry.text);
					if (entry.level === 'error') {
						errors.push(entry.text);
						if (entry.text.toLowerCase().includes('content security policy') || entry.text.toLowerCase().includes('violates')) {
							cspViolations.push(entry.text);
						}
					}
				}
				if (msg.method === 'Runtime.consoleAPICalled') {
					const args = msg.params.args.map((a) => a.value || a.description).join(' ');
					logs.push(args);
					if (msg.params.type === 'error') {
						errors.push(args);
					}
				}
			};

			await send('Page.navigate', { url: 'http://localhost:4173/' });
			await new Promise((r) => setTimeout(r, 3000));

			const evalResult = await send('Runtime.evaluate', {
				expression: `({
					title: document.title,
					metaCsp: !!document.querySelector('meta[http-equiv="content-security-policy"]'),
					emailLink: !!document.querySelector('a[href^="mailto:"]'),
					emailText: document.querySelector('p.ticker-item')?.textContent,
					projectsCount: document.querySelectorAll('.project-card').length,
					skillsCount: document.querySelectorAll('.skill-pill').length,
					resumeLink: document.querySelector('a[href="/assets/Sagnik_resume.pdf"]')?.getAttribute('href')
				})`,
				returnByValue: true
			});

			console.log('--- Verification Report ---');
			console.log('Page Title:', evalResult.result.value.title);
			console.log('Meta CSP present:', evalResult.result.value.metaCsp);
			console.log('Dynamic mailto link generated:', evalResult.result.value.emailLink);
			console.log('Email displayed client-side:', evalResult.result.value.emailText);
			console.log('Project cards rendered:', evalResult.result.value.projectsCount);
			console.log('Skill pills rendered:', evalResult.result.value.skillsCount);
			console.log('Resume PDF download link:', evalResult.result.value.resumeLink);
			console.log('Console Logs Captured:', logs.length);
			console.log('Console Errors:', errors.length);
			console.log('CSP Violations:', cspViolations.length);

			if (errors.length > 0) {
				console.log('Errors:', errors);
			}

			ws.close();
			cleanup(errors.length === 0 && cspViolations.length === 0 ? 0 : 1);
		};
	} catch (err) {
		console.error('Test execution error:', err);
		cleanup(1);
	}

	function cleanup(code = 0) {
		try { chrome.kill(); } catch (e) {}
		try { server.close(); } catch (e) {}
		process.exit(code);
	}
});
