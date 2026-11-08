<script lang="ts">
	import { experiences, computeDuration, sanitizeHtml } from '#lib';

	// Keep track of which cards are expanded. By default, open the first card.
	let expandedState = $state<Record<string, boolean>>({
		[experiences[0]?.id || '']: true
	});

	function toggleCard(id: string) {
		expandedState[id] = !expandedState[id];
	}
</script>

<section id="work" class="sec-work">
	<div class="wrap">
		<div class="sec-head">
			<span class="sec-num">00 / Work</span>
			<h2 class="sec-title">Experience</h2>
			<span class="sec-line"></span>
		</div>

		<div class="exp-list">
			{#each experiences as exp}
				{@const isExpanded = !!expandedState[exp.id]}
				{@const duration = computeDuration(exp.startDate, exp.endDate)}
				<article class="exp-card" class:placeholder={exp.isPlaceholder}>
					<div
						class="exp-head"
						onclick={() => toggleCard(exp.id)}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								toggleCard(exp.id);
							}
						}}
						role="button"
						tabindex="0"
						aria-expanded={isExpanded}
						aria-controls={`exp-body-${exp.id}`}
					>
						<div class="co-group">
							<div class="exp-logo" class:todo-logo={exp.isPlaceholder}>
								<span>{exp.logoText}</span>
							</div>

							<div class="co-info">
								<h3 class="co-name">{exp.company}</h3>
								<div class="co-role">{exp.role}</div>
							</div>
						</div>

						<div class="exp-meta">
							<span class="exp-date">
								{exp.startDate} — {exp.endDate}
								{#if duration}
									<span class="exp-dur">· {duration}</span>
								{/if}
							</span>
							<span class="exp-loc">{exp.location}</span>
						</div>

						<button
							type="button"
							class="exp-toggle"
							aria-label={isExpanded ? 'Collapse experience details' : 'Expand experience details'}
						>
							{isExpanded ? '−' : '+'}
						</button>
					</div>

					{#if isExpanded}
						<div class="exp-body" id={`exp-body-${exp.id}`}>
							<ul class="bullets">
								{#each exp.bullets as bullet}
									<li class="bullet-item">
										{@html sanitizeHtml(bullet)}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.sec-work {
		padding: 30px 0 60px;
	}

	.exp-list {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.exp-card {
		border: var(--border-thick);
		background: var(--surface);
		box-shadow: var(--shadow);
		transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
		overflow: hidden;
	}

	.exp-card:hover {
		box-shadow: var(--shadow-lg);
		transform: translate(-3px, -3px);
	}

	.exp-card.placeholder {
		border-style: dashed;
	}

	.exp-head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 24px 28px;
		cursor: pointer;
		user-select: none;
	}

	.co-group {
		display: flex;
		align-items: center;
		gap: 18px;
	}

	.exp-logo {
		width: 52px;
		height: 52px;
		border: var(--border);
		background: var(--paper-2);
		color: var(--ink);
		display: grid;
		place-items: center;
		font-family: var(--font-mono);
		font-size: 16px;
		font-weight: 800;
		box-shadow: var(--shadow-sm);
		flex-shrink: 0;
	}

	.exp-logo.todo-logo {
		background: var(--yellow);
		color: var(--paper);
	}

	.co-name {
		font-size: clamp(20px, 2.5vw, 26px);
		font-weight: 700;
		line-height: 1.1;
		margin: 0;
	}

	.co-role {
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 600;
		color: var(--blue);
		margin-top: 4px;
	}

	.exp-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 4px;
		font-family: var(--font-mono);
		font-size: 13px;
	}

	.exp-date {
		font-weight: 700;
		color: var(--ink);
	}

	.exp-dur {
		color: var(--green);
		font-weight: 600;
	}

	.exp-loc {
		color: var(--ink-soft);
	}

	.exp-toggle {
		width: 40px;
		height: 40px;
		border: var(--border);
		background: var(--paper-2);
		color: var(--ink);
		box-shadow: var(--shadow-sm);
		display: grid;
		place-items: center;
		font-family: var(--font-mono);
		font-size: 24px;
		font-weight: 700;
		line-height: 1;
		flex-shrink: 0;
		transition: all 0.15s var(--ease);
	}

	.exp-card:hover .exp-toggle {
		background: var(--blue);
		color: var(--paper);
	}

	.exp-body {
		border-top: var(--border);
		padding: 24px 28px 28px;
		background: var(--paper-2);
	}

	.bullets {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.bullet-item {
		position: relative;
		padding-left: 24px;
		color: var(--ink-soft);
		font-size: 15px;
		line-height: 1.55;
	}

	.bullet-item::before {
		content: '▸';
		position: absolute;
		left: 0;
		top: 0;
		color: var(--blue);
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 16px;
	}

	:global(.bullet-item b) {
		color: var(--ink);
		font-weight: 700;
	}

	@media (max-width: 768px) {
		.exp-head {
			padding: 18px 20px;
			gap: 14px;
		}

		.exp-meta {
			align-items: flex-start;
			width: 100%;
		}

		.exp-toggle {
			position: absolute;
			right: 18px;
			top: 18px;
		}

		.exp-card {
			position: relative;
		}

		.exp-body {
			padding: 20px;
		}
	}
</style>
