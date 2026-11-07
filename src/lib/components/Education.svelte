<script lang="ts">
	import { education, certifications } from '#lib';

	const primaryEdu = education[0];
	const secondaryEduList = education.slice(1);
</script>

<section id="education" class="sec-edu">
	<div class="wrap">
		<div class="sec-head">
			<span class="sec-num">02 / Learn</span>
			<h2 class="sec-title">Education</h2>
			<span class="sec-line"></span>
		</div>

		<!-- Main University Hero Card (matching sm2k4.dev brutalist card style) -->
		{#if primaryEdu}
			<article class="edu-hero">
				<div class="edu-hero-left">
					<div class="edu-mark">
						<span>{primaryEdu.logoText}</span>
					</div>

					<div class="edu-info">
						<h3 class="edu-title">{primaryEdu.institution}</h3>
						<div class="edu-deg">{primaryEdu.degree}</div>
						{#if primaryEdu.location}
							<div class="edu-loc">{primaryEdu.location}</div>
						{/if}
					</div>
				</div>

				<div class="edu-date-badge">
					{primaryEdu.period}
				</div>
			</article>
		{/if}

		<!-- Secondary Education & Certifications Grid -->
		<div class="edu-subgrid">
			{#each secondaryEduList as item}
				<div class="sub-card">
					<div class="sub-head">
						<span class="sub-mark">{item.logoText}</span>
						<span class="sub-year">{item.period}</span>
					</div>
					<h4 class="sub-title">{item.institution}</h4>
					<p class="sub-deg">{item.degree}</p>
					{#if item.score}
						<div class="sub-score">Score: <b>{item.score}</b></div>
					{/if}
				</div>
			{/each}

			{#each certifications as cert}
				<div class="sub-card cert-card">
					<div class="sub-head">
						<span class="sub-mark cert-mark">CERT</span>
						<span class="sub-year">Verified</span>
					</div>
					<h4 class="sub-title">{cert.title}</h4>
					<p class="sub-deg">Issued by {cert.issuer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sec-edu {
		padding: 40px 0 70px;
	}

	.edu-hero {
		border: var(--border-thick);
		background: var(--blue);
		color: var(--paper);
		box-shadow: var(--shadow-lg);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 28px;
		padding: 38px 42px;
		margin-bottom: 32px;
	}

	.edu-hero-left {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 24px;
	}

	.edu-mark {
		width: 72px;
		height: 72px;
		border: 3px solid var(--paper);
		background: var(--paper);
		color: var(--blue);
		display: grid;
		place-items: center;
		font-family: var(--font-mono);
		font-size: 24px;
		font-weight: 800;
		flex-shrink: 0;
		box-shadow: var(--shadow-sm);
	}

	.edu-title {
		font-size: clamp(22px, 2.8vw, 32px);
		font-weight: 700;
		line-height: 1.1;
		color: var(--paper);
		margin: 0;
	}

	.edu-deg {
		font-family: var(--font-mono);
		font-size: 15px;
		font-weight: 600;
		opacity: 0.95;
		margin-top: 6px;
		color: var(--paper);
	}

	.edu-loc {
		font-family: var(--font-mono);
		font-size: 13px;
		opacity: 0.8;
		margin-top: 2px;
		color: var(--paper);
	}

	.edu-date-badge {
		font-family: var(--font-mono);
		border: 3px solid var(--paper);
		padding: 10px 18px;
		font-size: 15px;
		font-weight: 700;
		white-space: nowrap;
		color: var(--paper);
	}

	.edu-subgrid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 24px;
	}

	.sub-card {
		border: var(--border);
		background: var(--surface);
		padding: 24px;
		box-shadow: var(--shadow);
		display: flex;
		flex-direction: column;
		transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
	}

	.sub-card:hover {
		box-shadow: var(--shadow-lg);
		transform: translate(-3px, -3px);
	}

	.cert-card {
		border-color: var(--green);
	}

	.sub-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 14px;
	}

	.sub-mark {
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 800;
		border: 2px solid var(--ink);
		background: var(--paper-2);
		padding: 2px 7px;
	}

	.cert-mark {
		background: var(--green);
		color: var(--paper);
	}

	.sub-year {
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 700;
		color: var(--ink-soft);
	}

	.sub-title {
		font-size: 18px;
		font-weight: 700;
		line-height: 1.25;
		margin: 0;
	}

	.sub-deg {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--ink-soft);
		margin-top: 8px;
		line-height: 1.4;
	}

	.sub-score {
		font-family: var(--font-mono);
		font-size: 13px;
		margin-top: 12px;
		padding-top: 10px;
		border-top: 1px dashed rgba(157, 148, 132, 0.4);
		color: var(--ink);
	}

	.sub-score b {
		color: var(--green);
	}

	@media (max-width: 768px) {
		.edu-hero {
			padding: 24px 20px;
			gap: 20px;
		}

		.edu-date-badge {
			width: 100%;
			text-align: center;
		}
	}
</style>
