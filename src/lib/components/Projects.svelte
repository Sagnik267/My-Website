<script lang="ts">
	import { projects } from '#lib';
</script>

<section id="projects" class="section-wrapper" aria-labelledby="projects-heading">
	<div class="container">
		<header class="section-header">
			<div class="section-tag">Featured Work</div>
			<h2 id="projects-heading" class="section-title">Projects</h2>
			<p class="section-desc">
				Practical capstone and analytical implementations focused on campaign performance, ETL, and decision support.
			</p>
		</header>

		<div class="projects-grid">
			{#each projects as project (project.id)}
				<article class="project-card">
					<span class="project-tagline">{project.tagline}</span>
					<h3 class="project-title">{project.title}</h3>
					<p class="project-description">{project.description}</p>

					<div class="project-tags" aria-label="Project Technologies">
						{#each project.tags as tag}
							<span class="tag-badge">{tag}</span>
						{/each}
					</div>

					<div class="details-wrapper">
						<details>
							<summary class="details-summary">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
								<span>Key Responsibilities & Highlights</span>
							</summary>
							<div class="details-content">
								<ul class="bullet-list">
									{#each project.details as detail}
										<li class="bullet-item">
											<span class="bullet-icon" aria-hidden="true">›</span>
											<span>{detail}</span>
										</li>
									{/each}
								</ul>
							</div>
						</details>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
