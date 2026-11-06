<script lang="ts">
	import { skillCategories, certifications } from '#lib';
</script>

<section id="skills" class="section-wrapper" aria-labelledby="skills-heading">
	<div class="container">
		<header class="section-header">
			<div class="section-tag">Competencies</div>
			<h2 id="skills-heading" class="section-title">Technical Skills</h2>
			<p class="section-desc">
				Core programming languages, database systems, analytical environments, and collaborative competencies.
			</p>
		</header>

		<div class="skills-grid">
			{#each skillCategories as cat}
				<div class="skill-category-card">
					<h3 class="category-title">{cat.category}</h3>
					<ul class="skill-items-list">
						{#each cat.items as item}
							<li class="skill-pill">
								<span class="skill-pill-bullet" aria-hidden="true"></span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		{#if certifications.length > 0}
			<div class="certifications-box" aria-label="Certifications">
				<div class="cert-meta">
					<div class="cert-icon" aria-hidden="true">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="8" r="7"></circle>
							<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
						</svg>
					</div>
					<div>
						{#each certifications as cert}
							<h3 class="cert-title">{cert.title}</h3>
							<p class="cert-issuer">Issued by {cert.issuer}</p>
						{/each}
					</div>
				</div>
				<div class="section-tag">Verified Certification</div>
			</div>
		{/if}
	</div>
</section>
