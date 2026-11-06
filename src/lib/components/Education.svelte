<script lang="ts">
	import { educationHistory } from '#lib';
</script>

<section id="education" class="section-wrapper" aria-labelledby="education-heading">
	<div class="container">
		<header class="section-header">
			<div class="section-tag">Academic Background</div>
			<h2 id="education-heading" class="section-title">Education</h2>
			<p class="section-desc">
				Formal engineering foundation in Computer Science with a specialization in Data Science and school background.
			</p>
		</header>

		<div class="education-timeline">
			{#each educationHistory as edu}
				<div class="education-card">
					<div>
						<h3 class="edu-institution">{edu.institution}</h3>
						<p class="edu-credential">
							{edu.credential}
							{#if edu.location}
								<span aria-hidden="true"> • </span>
								<span>{edu.location}</span>
							{/if}
						</p>
					</div>

					<div class="edu-badge-group">
						<span class="edu-year-badge">{edu.year}</span>
						{#if edu.score}
							<span class="edu-score-badge">Score: {edu.score}</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
