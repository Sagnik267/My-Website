<script lang="ts">
	import { onMount } from 'svelte';
	import { siteMeta, getMailtoLink, getEmail } from '#lib';

	let mailtoUrl = $state('');
	let emailDisplay = $state('');

	onMount(() => {
		// Construct mailto and email string dynamically client-side
		mailtoUrl = getMailtoLink();
		emailDisplay = getEmail();
	});
</script>

<section id="contact" class="section-wrapper" aria-labelledby="contact-heading">
	<div class="container">
		<div class="contact-card">
			<div class="section-tag">Direct Communication</div>
			<h2 id="contact-heading" class="contact-headline">Let's Connect</h2>
			<p class="contact-subtext">
				Whether you have an inquiry about my data analytics capstone projects, model development, or collaboration opportunities, feel free to reach out directly.
			</p>

			<div class="contact-actions">
				{#if mailtoUrl}
					<a href={mailtoUrl} class="btn btn-primary" aria-label="Send an Email to Sagnik Behera">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
						<span>Send an Email</span>
					</a>
					<p class="ticker-item" aria-label="Direct Email Address">
						<span class="ticker-dot" aria-hidden="true">•</span>
						<span>{emailDisplay}</span>
					</p>
				{/if}

				<noscript>
					<div class="noscript-fallback">
						<p>
							JavaScript is disabled. <a href={siteMeta.linkedinUrl} target="_blank" rel="noopener noreferrer">Find me on LinkedIn</a>
						</p>
					</div>
				</noscript>
			</div>

			<div class="contact-links-group" aria-label="Social Profiles">
				<a
					href={siteMeta.linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
						<rect x="2" y="9" width="4" height="12"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
					<span>LinkedIn Profile</span>
				</a>

				<a
					href={siteMeta.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
					</svg>
					<span>GitHub Profile</span>
				</a>
			</div>

			<div class="security-notice-box" role="note">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
				</svg>
				<span>Static Site Architecture: Zero backend APIs, zero forms, and zero tracking cookies.</span>
			</div>
		</div>
	</div>
</section>
