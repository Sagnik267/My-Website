<script lang="ts">
	import { projects, sanitizeHtml } from '#lib';
</script>

<section id="projects" class="sec-projects">
	<div class="wrap">
		<div class="sec-head">
			<span class="sec-num">01 / Build</span>
			<h2 class="sec-title">Projects</h2>
			<span class="sec-line"></span>
		</div>

		<div class="proj-grid">
			{#each projects as proj}
				<article class="proj-card">
					<!-- Terminal Window Bar -->
					<div class="pc-top">
						<div class="pc-dots">
							<span class="dot d-blue"></span>
							<span class="dot d-green"></span>
							<span class="dot d-yellow"></span>
						</div>
						<span class="pc-file">{proj.slug}</span>
					</div>

					<!-- Terminal Window Content -->
					<div class="pc-body">
						<h3 class="pc-title">{proj.name}</h3>
						<p class="pc-desc">
							{@html sanitizeHtml(proj.description)}
						</p>

						<!-- Tech Chips -->
						<div class="pc-stack">
							{#each proj.tags as tag}
								<span class="chip">{tag}</span>
							{/each}
						</div>

						<!-- Links -->
						<div class="pc-links">
							<a
								href={proj.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn primary pc-btn"
							>
								View repo <span class="arr">↗</span>
							</a>

							{#if proj.liveUrl}
								<a
									href={proj.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="btn green pc-btn"
								>
									Live demo <span class="arr">↗</span>
								</a>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.sec-projects {
		padding: 40px 0 70px;
	}

	.proj-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 32px;
	}

	.proj-card {
		border: var(--border-thick);
		background: var(--surface);
		box-shadow: var(--shadow);
		display: flex;
		flex-direction: column;
		transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
	}

	.proj-card:hover {
		box-shadow: var(--shadow-lg);
		transform: translate(-4px, -4px);
	}

	.pc-top {
		border-bottom: var(--border);
		background: var(--paper-2);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 18px;
	}

	.pc-dots {
		display: flex;
		align-items: center;
		gap: 7px;
	}

	.pc-dots .dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 2px solid var(--ink);
	}

	.pc-dots .d-blue {
		background: var(--blue);
	}
	.pc-dots .d-green {
		background: var(--green);
	}
	.pc-dots .d-yellow {
		background: var(--yellow);
	}

	.pc-file {
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 600;
		color: var(--ink-soft);
	}

	.pc-body {
		padding: 28px;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.pc-title {
		font-size: clamp(22px, 3vw, 28px);
		font-weight: 700;
		line-height: 1.15;
		margin: 0;
	}

	.pc-desc {
		color: var(--ink-soft);
		margin-top: 14px;
		font-size: 15px;
		line-height: 1.6;
		flex: 1;
	}

	:global(.pc-desc b) {
		color: var(--ink);
		font-weight: 700;
	}

	.pc-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 24px;
	}

	.pc-links {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 26px;
	}

	.pc-btn {
		padding: 10px 18px;
		font-size: 13px;
	}

	@media (max-width: 768px) {
		.proj-grid {
			grid-template-columns: 1fr;
			gap: 24px;
		}

		.pc-body {
			padding: 22px;
		}

		.pc-title {
			font-size: 22px;
		}
	}
</style>
