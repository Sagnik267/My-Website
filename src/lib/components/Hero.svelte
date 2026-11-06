<script lang="ts">
	import { onMount } from 'svelte';
	import { siteMeta, getMailtoLink } from '#lib';

	let mailtoUrl = $state('');

	onMount(() => {
		// Dynamically construct mailto link client-side to prevent static email harvesting
		mailtoUrl = getMailtoLink();
	});
</script>

<section id="hero" class="hero-section" aria-labelledby="hero-name-heading">
	<div class="container">
		<div class="hero-meta-badge">
			<span class="pulse-dot" aria-hidden="true"></span>
			<span>{siteMeta.location}</span>
		</div>

		<h1 id="hero-name-heading" class="hero-name">{siteMeta.largeName}</h1>

		<p class="hero-tagline">{siteMeta.tagline}</p>

		<p class="hero-about">{siteMeta.about}</p>

		<div class="hero-cta-group">
			<a href="#projects" class="btn btn-primary">
				<span>See the work</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="12" y1="5" x2="12" y2="19"></line>
					<polyline points="19 12 12 19 5 12"></polyline>
				</svg>
			</a>

			<a
				href={siteMeta.resumeUrl}
				class="btn btn-secondary"
				download="Sagnik_resume.pdf"
				aria-label="Resume.pdf - Download Sagnik Behera Resume (PDF)"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="7 10 12 15 17 10"></polyline>
					<line x1="12" y1="15" x2="12" y2="3"></line>
				</svg>
				<span>Resume.pdf</span>
			</a>
		</div>

		<div class="hero-socials" aria-label="Social and Contact Links">
			<a
				href={siteMeta.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn-icon"
				aria-label="GitHub Profile (opens in new tab)"
				title="GitHub Profile"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
				</svg>
			</a>

			<a
				href={siteMeta.linkedinUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn-icon"
				aria-label="LinkedIn Profile (opens in new tab)"
				title="LinkedIn Profile"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
					<rect x="2" y="9" width="4" height="12"></rect>
					<circle cx="4" cy="4" r="2"></circle>
				</svg>
			</a>

			{#if mailtoUrl}
				<a
					href={mailtoUrl}
					class="btn-icon"
					aria-label="Send Email to Sagnik Behera"
					title="Email Sagnik Behera"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
				</a>
			{/if}

			<noscript>
				<a
					href={siteMeta.linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-icon"
					aria-label="Contact via LinkedIn (JavaScript disabled)"
					title="Find me on LinkedIn"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
						<rect x="2" y="9" width="4" height="12"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
				</a>
			</noscript>
		</div>
	</div>
</section>
