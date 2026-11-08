import fs from 'node:fs';
import path from 'node:path';

const indexPath = path.resolve('build/index.html');
const headersPath = path.resolve('build/_headers');
const vercelPath = path.resolve('vercel.json');

// Clean up any remaining SvelteKit announcer inline styles across all build output
function sanitizeBuild(dir) {
	for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, f.name);
		if (f.isDirectory()) {
			sanitizeBuild(full);
		} else if (f.name.endsWith('.js') || f.name.endsWith('.html')) {
			let content = fs.readFileSync(full, 'utf-8');
			const target =
				'style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"';
			if (content.includes(target)) {
				content = content.replaceAll(target, 'class="visually-hidden"');
				fs.writeFileSync(full, content, 'utf-8');
				console.log(`Cleaned announcer inline style in ${full}`);
			}
		}
	}
}

if (fs.existsSync('build')) {
	sanitizeBuild('build');
}

if (fs.existsSync(indexPath)) {
	const html = fs.readFileSync(indexPath, 'utf-8');
	const cspMatch = html.match(/<meta http-equiv="content-security-policy" content="([^"]+)">/i);

	if (cspMatch && cspMatch[1]) {
		let generatedCsp = cspMatch[1];
		if (!generatedCsp.includes('frame-ancestors')) {
			generatedCsp = `${generatedCsp}; frame-ancestors 'none'`;
		}

		// 1. Sync to build/_headers (Cloudflare Pages / Netlify)
		if (fs.existsSync(headersPath)) {
			let headers = fs.readFileSync(headersPath, 'utf-8');
			headers = headers.replace(/Content-Security-Policy:[^\r\n]+/, `Content-Security-Policy: ${generatedCsp}`);
			fs.writeFileSync(headersPath, headers, 'utf-8');
			console.log('Successfully synced CSP to build/_headers:');
			console.log(generatedCsp);
		}

		// 2. Sync to vercel.json & build/vercel.json (Vercel)
		if (fs.existsSync(vercelPath)) {
			try {
				const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
				if (Array.isArray(vercel.headers)) {
					for (const route of vercel.headers) {
						if (route.source === '/(.*)' && Array.isArray(route.headers)) {
							let foundCsp = false;
							for (const h of route.headers) {
								if (h.key.toLowerCase() === 'content-security-policy') {
									h.value = generatedCsp;
									foundCsp = true;
								}
							}
							if (!foundCsp) {
								route.headers.push({ key: 'Content-Security-Policy', value: generatedCsp });
							}
						}
					}
				}
				const updatedJson = JSON.stringify(vercel, null, '\t') + '\n';
				fs.writeFileSync(vercelPath, updatedJson, 'utf-8');
				if (fs.existsSync('build')) {
					fs.writeFileSync(path.resolve('build/vercel.json'), updatedJson, 'utf-8');
				}
				console.log('Successfully synced CSP to vercel.json and build/vercel.json');
			} catch (e) {
				console.error('Failed to sync CSP into vercel.json:', e);
			}
		}
	}
}
