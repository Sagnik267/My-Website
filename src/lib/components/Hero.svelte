<script lang="ts">
	import { onMount } from 'svelte';
	import { siteMeta, getMailtoLink, getEmail } from '#lib';

	let mailtoHref = $state('#contact');
	let emailAddress = $state('sagnikbehera30 [at] gmail [dot] com');

	onMount(() => {
		// Scraper-resistant email initialization
		mailtoHref = getMailtoLink();
		emailAddress = getEmail();
	});
</script>

<header class="hero" id="top">
	<div class="wrap">
		<!-- Top Status Pills -->
		<div class="hero-top">
			<span class="pill">
				<span class="dot"></span>
				<span class="tag">Open to building</span>
			</span>

			<span class="pill blue">
				<span class="tag">{siteMeta.statusRole}</span>
			</span>

			<span class="pill">
				<span class="tag">{siteMeta.statusLocation}</span>
			</span>
		</div>

		<!-- Huge Uppercase Name -->
		<h1 class="hero-title">
			<span class="ln">{siteMeta.firstName}</span>
			<span class="ln"><em>{siteMeta.lastName}</em></span>
		</h1>

		<!-- Tagline & Actions -->
		<div class="hero-sub">
			<p class="hero-lead">
				{@html siteMeta.headline}
			</p>

			<div class="hero-actions">
				<a href="#projects" class="btn primary">
					See the work <span class="arr">↘</span>
				</a>

				<a href={siteMeta.resumeUrl} download class="btn" target="_blank" rel="noopener noreferrer">
					Résumé.pdf <span class="arr">↓</span>
				</a>
			</div>
		</div>

		<!-- Social Icons Row -->
		<div class="socials-row">
			<span class="socials-label">Connect:</span>

			<a
				href={siteMeta.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="social-btn"
				aria-label="GitHub Profile"
				title="GitHub Profile"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ico" aria-hidden="true">
					<path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					></path>
				</svg>
				<span>GitHub</span>
			</a>

			<a
				href={siteMeta.linkedinUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="social-btn"
				aria-label="LinkedIn Profile"
				title="LinkedIn Profile"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ico" aria-hidden="true">
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
					<rect x="2" y="9" width="4" height="12"></rect>
					<circle cx="4" cy="4" r="2"></circle>
				</svg>
				<span>LinkedIn</span>
			</a>

			<a
				href={siteMeta.websiteUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="social-btn"
				aria-label="Website"
				title="Website"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ico" aria-hidden="true">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="2" y1="12" x2="22" y2="12"></line>
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
				</svg>
				<span>Website</span>
			</a>

			<a
				href={mailtoHref}
				class="social-btn"
				aria-label="Send an email"
				title="Send an email"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ico" aria-hidden="true">
					<rect x="2" y="4" width="20" height="16" rx="2"></rect>
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
				</svg>
				<span>Email</span>
			</a>
		</div>
	</div>
</header>

<style>
	.hero {
		padding: 140px 0 60px;
		position: relative;
	}

	.hero-top {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
		margin-bottom: 28px;
	}

	.hero-title {
		font-family: var(--font-display);
		font-size: clamp(52px, 11.5vw, 142px);
		font-weight: 700;
		line-height: 0.92;
		letter-spacing: -0.035em;
		text-transform: uppercase;
		margin: 0;
	}

	.hero-title .ln {
		display: block;
	}

	.hero-title em {
		display: inline-block;
		font-style: normal;
		-webkit-text-stroke: 2.5px var(--ink);
		color: transparent;
		transition: color 0.2s var(--ease);
	}

	.hero-title em:hover {
		color: var(--blue);
		-webkit-text-stroke-color: var(--blue);
	}

	.hero-sub {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		gap: 36px;
		margin-top: 36px;
	}

	.hero-lead {
		max-width: 580px;
		font-size: clamp(17px, 2.2vw, 22px);
		line-height: 1.5;
		color: var(--ink-soft);
	}

	:global(.hero-lead b) {
		color: var(--ink);
		font-weight: 700;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
	}

	.socials-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
		margin-top: 36px;
		padding-top: 24px;
		border-top: 2px dashed rgba(157, 148, 132, 0.35);
	}

	.socials-label {
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 700;
		color: var(--ink-soft);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-right: 6px;
	}

	.social-btn {
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 7px 14px;
		border: 2px solid var(--ink);
		background: var(--surface);
		color: var(--ink);
		box-shadow: var(--shadow-sm);
		transition: transform 0.15s var(--ease), box-shadow 0.15s var(--ease), background 0.2s var(--ease);
	}

	.social-btn:hover {
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow);
		background: var(--blue);
		color: var(--paper);
		border-color: var(--ink);
	}

	.ico {
		width: 15px;
		height: 15px;
		stroke-width: 2.2;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 110px 0 44px;
		}

		.hero-sub {
			gap: 24px;
			margin-top: 26px;
		}

		.socials-row {
			margin-top: 28px;
			padding-top: 18px;
		}
	}
</style>
