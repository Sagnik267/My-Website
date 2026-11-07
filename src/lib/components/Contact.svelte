<script lang="ts">
	import { onMount } from 'svelte';
	import { siteMeta, getEmail, getMailtoLink } from '#lib';

	let mailtoLink = $state('#');
	let displayEmail = $state('sagnikbehera30 [at] gmail [dot] com');

	onMount(() => {
		mailtoLink = getMailtoLink();
		displayEmail = getEmail();
	});
</script>

<section class="sec-contact" id="contact">
	<div class="wrap">
		<div class="contact-card">
			<span class="tag ctag">03 / Contact</span>

			<h2 class="contact-title">
				Let's build<br />
				<em>something</em> cool
			</h2>

			<a
				href={mailtoLink}
				class="contact-mail"
				aria-label="Send an email to Sagnik Behera"
			>
				<span class="mail-ico">✉</span>
				<span class="mail-text">{displayEmail}</span>
			</a>

			<div class="contact-socials">
				<a
					href={siteMeta.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="social-link"
				>
					GITHUB <span class="arr">↗</span>
				</a>

				<a
					href={siteMeta.linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="social-link"
				>
					LINKEDIN <span class="arr">↗</span>
				</a>

				<a
					href={siteMeta.resumeUrl}
					download
					target="_blank"
					rel="noopener noreferrer"
					class="social-link"
				>
					RÉSUMÉ <span class="arr">↓</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.sec-contact {
		padding: 70px 0 30px;
	}

	.contact-card {
		border: var(--border-thick);
		background: var(--ink);
		color: var(--paper);
		box-shadow: var(--shadow-lg);
		text-align: center;
		padding: clamp(48px, 8vw, 86px) 24px;
		position: relative;
		overflow: hidden;
	}

	.ctag {
		color: var(--green);
		font-size: 13px;
		letter-spacing: 0.16em;
	}

	.contact-title {
		font-family: var(--font-display);
		font-size: clamp(38px, 8.5vw, 106px);
		font-weight: 700;
		line-height: 0.94;
		text-transform: uppercase;
		letter-spacing: -0.03em;
		margin: 20px 0 16px;
	}

	.contact-title em {
		display: inline-block;
		font-style: normal;
		-webkit-text-stroke: 2px var(--paper);
		color: transparent;
	}

	.contact-mail {
		font-family: var(--font-mono);
		font-size: clamp(16px, 2.5vw, 24px);
		font-weight: 700;
		color: var(--paper);
		border: 3px solid var(--paper);
		box-shadow: 6px 6px 0 var(--green);
		background: transparent;
		display: inline-flex;
		align-items: center;
		gap: 12px;
		margin-top: 28px;
		padding: 16px 32px;
		text-decoration: none;
		transition: transform 0.15s var(--ease), background 0.2s var(--ease), box-shadow 0.15s var(--ease), color 0.2s var(--ease);
	}

	.contact-mail:hover {
		background: var(--green);
		border-color: var(--green);
		color: var(--paper);
		box-shadow: 9px 9px 0 var(--paper);
		transform: translate(-3px, -3px);
	}

	.mail-ico {
		font-size: 1.1em;
	}

	.contact-socials {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 14px;
		margin-top: 38px;
	}

	.social-link {
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 700;
		border: 3px solid var(--paper);
		color: var(--paper);
		padding: 12px 22px;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		transition: all 0.15s var(--ease);
	}

	.social-link:hover {
		background: var(--blue);
		border-color: var(--blue);
		color: var(--paper);
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-sm);
	}

	.arr {
		transition: transform 0.2s var(--ease);
	}

	.social-link:hover .arr {
		transform: translate(2px, -2px);
	}

	@media (max-width: 768px) {
		.contact-card {
			padding: 40px 18px;
		}

		.contact-mail {
			padding: 12px 20px;
			font-size: 15px;
			width: 100%;
			justify-content: center;
			word-break: break-all;
		}

		.contact-socials {
			flex-direction: column;
		}

		.social-link {
			justify-content: center;
		}
	}
</style>
