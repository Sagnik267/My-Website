<script lang="ts">
	import { tickerSkills } from '#lib';
</script>

<div class="ticker-container" aria-label="Key Technologies and Analytical Tools">
	<div class="ticker-track">
		<!-- First iteration of skills -->
		<div class="ticker-group" aria-hidden="false">
			{#each tickerSkills as skill}
				<span class="ticker-item">
					<span class="ticker-dot" aria-hidden="true">•</span>
					<span>{skill}</span>
				</span>
			{/each}
		</div>

		<!-- Duplicate iteration for seamless infinite scroll -->
		<div class="ticker-group" aria-hidden="true">
			{#each tickerSkills as skill}
				<span class="ticker-item">
					<span class="ticker-dot" aria-hidden="true">•</span>
					<span>{skill}</span>
				</span>
			{/each}
		</div>
	</div>
</div>
