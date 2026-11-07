<script lang="ts">
	import { marqueeSkills } from '#lib';
</script>

<div class="marquee" aria-hidden="true">
	<div class="marquee-track">
		<!-- Repeat items twice for smooth seamless infinite loop -->
		{#each Array(4) as _}
			{#each marqueeSkills as skill}
				<span class="marquee-item">{skill}</span>
			{/each}
		{/each}
	</div>
</div>

<style>
	.marquee {
		border-top: var(--border-thick);
		border-bottom: var(--border-thick);
		background: var(--paper-2);
		color: var(--ink);
		padding: 14px 0;
		overflow: hidden;
		white-space: nowrap;
		margin-top: 30px;
		margin-bottom: 70px;
		user-select: none;
	}

	.marquee:hover .marquee-track {
		animation-play-state: paused;
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee-scroll 45s linear infinite;
	}

	.marquee-item {
		font-family: var(--font-mono);
		font-size: 14px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		display: inline-flex;
		align-items: center;
		gap: 24px;
		margin-right: 24px;
		color: var(--ink);
	}

	.marquee-item::after {
		content: '◆';
		color: var(--green);
		font-size: 11px;
	}

	@keyframes marquee-scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
			overflow-x: auto;
		}
	}

	@media (max-width: 768px) {
		.marquee {
			padding: 12px 0;
			margin-top: 20px;
			margin-bottom: 50px;
		}

		.marquee-item {
			font-size: 13px;
			gap: 18px;
			margin-right: 18px;
		}
	}
</style>
