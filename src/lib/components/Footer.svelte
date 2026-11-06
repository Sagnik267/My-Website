<script lang="ts">
	import { siteMeta } from '#lib';
	const currentYear = 2026;
</script>

<footer class="site-footer">
	<div class="container footer-content">
		<div class="footer-copy">
			<p>© {currentYear} {siteMeta.name}. All rights reserved.</p>
		</div>

		<nav class="footer-links" aria-label="Footer Navigation">
			<a href="/SECURITY.md" class="footer-link">Security Policy</a>
			<a href="/.well-known/security.txt" class="footer-link">security.txt</a>
			<a href="/sitemap.xml" class="footer-link">Sitemap</a>
			<a href="/robots.txt" class="footer-link">robots.txt</a>
		</nav>
	</div>
</footer>
