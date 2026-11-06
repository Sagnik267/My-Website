<script lang="ts">
	import '#lib/styles/global.css';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { siteMeta } from '#lib';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const pageTitle = `${siteMeta.name} | Data Science Student & Portfolio`;
	const pageDescription = `${siteMeta.tagline}. B.Tech Computer Science Engineering student specializing in Python, SQL, MySQL, and Power BI Desktop.`;
	const ogImageUrl = `${siteMeta.canonicalUrl}og.png`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="author" content={siteMeta.name} />
	<meta name="theme-color" content="#0a0f1d" />
	<link rel="canonical" href={siteMeta.canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteMeta.canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Sagnik Behera Portfolio Preview Card" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteMeta.canonicalUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:image:alt" content="Sagnik Behera Portfolio Preview Card" />

	<!-- Favicons & Web Manifest -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>

<Navbar />

<main id="main-content">
	{@render children()}
</main>

<Footer />
