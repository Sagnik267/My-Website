<script lang="ts">
	import { siteMeta } from '#lib';
</script>

<footer class="foot-section">
	<div class="wrap">
		<div class="foot">
			<span class="foot-copy">
				© {new Date().getFullYear()}
				<a
					href={siteMeta.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="foot-handle"
				>
					{siteMeta.githubHandle}
				</a>
			</span>

			<a href="#top" class="to-top">
				Back to top <span class="to-top-arr">↑</span>
			</a>
		</div>
	</div>
</footer>

<style>
	.foot-section {
		padding: 30px 0 50px;
		background: var(--paper);
	}

	.foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 24px;
		border-top: 2px solid var(--ink);
		font-family: var(--font-mono);
		font-size: 13px;
	}

	.foot-copy {
		color: var(--ink-soft);
	}

	.foot-handle {
		color: var(--ink);
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.foot-handle:hover {
		color: var(--blue);
	}

	.to-top {
		font-weight: 700;
		color: var(--ink);
		display: inline-flex;
		align-items: center;
		gap: 6px;
		transition: transform 0.15s var(--ease), color 0.15s var(--ease);
	}

	.to-top:hover {
		color: var(--blue);
		transform: translateY(-2px);
	}

	.to-top-arr {
		transition: transform 0.15s var(--ease);
	}

	.to-top:hover .to-top-arr {
		transform: translateY(-3px);
	}

	@media (max-width: 600px) {
		.foot {
			flex-direction: column;
			gap: 14px;
			text-align: center;
		}
	}
</style>
