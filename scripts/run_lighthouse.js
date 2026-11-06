import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';

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

const server = http.createServer((req, res) => {
	let reqPath = decodeURI(req.url.split('?')[0]);
	if (reqPath.endsWith('/')) reqPath += 'index.html';
	let filePath = path.join('build', reqPath);
	if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
	if (!fs.existsSync(filePath)) filePath = path.join('build', '404.html');

	const ext = path.extname(filePath);
	res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
	fs.createReadStream(filePath).pipe(res);
});

server.listen(4173, () => {
	console.log('Server listening on http://localhost:4173');

	const cmd = 'npx --yes lighthouse http://localhost:4173 --output=json --output-path=lighthouse-report.json --chrome-flags="--headless=new --disable-gpu" --quiet';
	console.log('Running Lighthouse audit...');

	exec(cmd, (error, stdout, stderr) => {
		if (fs.existsSync('lighthouse-report.json')) {
			const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf-8'));
			const categories = report.categories;
			console.log('\n====================================');
			console.log('LIGHTHOUSE AUDIT RESULTS');
			console.log('====================================');
			console.log('Performance:   ', Math.round(categories.performance.score * 100));
			console.log('Accessibility: ', Math.round(categories.accessibility.score * 100));
			console.log('Best Practices:', Math.round(categories['best-practices'].score * 100));
			console.log('SEO:           ', Math.round(categories.seo.score * 100));
			console.log('====================================\n');
		} else {
			console.error('Lighthouse report was not created:', error, stderr);
		}
		server.close();
		process.exit(0);
	});
});
