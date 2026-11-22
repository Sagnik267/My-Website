import fs from 'node:fs';
import path from 'node:path';

const buildDir = path.resolve('build');

// Ensure build directory exists
fs.mkdirSync(buildDir, { recursive: true });

// Copy index.html
if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', path.join(buildDir, 'index.html'));
}

// Copy assets
if (fs.existsSync('assets')) {
  fs.cpSync('assets', path.join(buildDir, 'assets'), { recursive: true });
}

// Copy .well-known
if (fs.existsSync('.well-known')) {
  fs.cpSync('.well-known', path.join(buildDir, '.well-known'), { recursive: true });
}

// Copy _headers
if (fs.existsSync('_headers')) {
  fs.copyFileSync('_headers', path.join(buildDir, '_headers'));
} else if (fs.existsSync('static/_headers')) {
  fs.copyFileSync('static/_headers', path.join(buildDir, '_headers'));
}

// Copy static SEO and icon files
const staticFiles = [
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'favicon.svg',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'og.png'
];

for (const file of staticFiles) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(buildDir, file));
  } else if (fs.existsSync(path.join('static', file))) {
    fs.copyFileSync(path.join('static', file), path.join(buildDir, file));
  }
}

console.log('Build output prepared successfully in build/');
