import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

function removeSvelteKitInlineStyle(): Plugin {
	return {
		name: 'remove-sveltekit-inline-style',
		enforce: 'pre',
		transform(code, id) {
			if (id.includes('root.svelte')) {
				return {
					code: code.replace(
						/style="position: absolute; left: 0; top: 0; clip: rect\(0 0 0 0\); clip-path: inset\(50%\); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"/g,
						'class="visually-hidden"'
					),
					map: null
				};
			}
		}
	};
}

export default defineConfig({
	plugins: [
		removeSvelteKitInlineStyle(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			}),
			version: {
				name: '1.0.0'
			},
			csp: {
				mode: 'hash',
				directives: {
					'default-src': ['self'],
					'script-src': ['self'],
					'style-src': ['self'],
					'img-src': ['self', 'data:'],
					'font-src': ['self'],
					'connect-src': ['none'],
					'object-src': ['none'],
					'base-uri': ['self'],
					'form-action': ['none'],
					'frame-ancestors': ['none'],
					'upgrade-insecure-requests': true
				}
			}
		})
	]
});
