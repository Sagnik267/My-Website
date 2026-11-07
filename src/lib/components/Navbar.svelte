<script lang="ts">
	import { onMount } from 'svelte';
	import { siteMeta } from '#lib';

	let isScrolled = $state(false);
	let isMobileOpen = $state(false);
	let currentTheme = $state<'dark' | 'light'>('dark');

	onMount(() => {
		// Initialize theme from localStorage or system preference
		const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
		if (storedTheme) {
			currentTheme = storedTheme;
		} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			currentTheme = 'light';
		} else {
			currentTheme = 'dark';
		}
		document.documentElement.setAttribute('data-theme', currentTheme);

		const handleScroll = () => {
			isScrolled = window.scrollY > 40;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleTheme() {
		currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', currentTheme);
		localStorage.setItem('theme', currentTheme);
	}

	function closeMobileMenu() {
		isMobileOpen = false;
	}
</script>

<nav class="nav" class:float={isScrolled} id="nav" aria-label="Main navigation">
	<div class="nav-inner">
		<a href="#top" class="brand" onclick={closeMobileMenu}>
			<span class="mark">{siteMeta.brandBadge}</span>
			<span class="brand-name">{siteMeta.brandName}</span>
		</a>

		<!-- Desktop Navigation Links -->
		<div class="nav-links">
			<a href="#work" class="nav-link">
				<svg
					class="nav-ico"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<rect x="2" y="7" width="20" height="14" rx="2"></rect>
					<path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
					<path d="M2 13h20"></path>
				</svg>
				<span class="lbl">Experience</span>
			</a>

			<a href="#projects" class="nav-link">
				<svg
					class="nav-ico"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>
				<span class="lbl">Projects</span>
			</a>

			<a href="#education" class="nav-link">
				<svg
					class="nav-ico"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M22 10 12 5 2 10l10 5 10-5Z"></path>
					<path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"></path>
				</svg>
				<span class="lbl">Education</span>
			</a>

			<a href="#contact" class="nav-link nav-cta">
				<span class="lbl">Let's talk</span>
			</a>

			<button
				type="button"
				class="theme-toggle"
				onclick={toggleTheme}
				aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				title={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if currentTheme === 'dark'}
					<!-- Moon Icon -->
					<svg
						class="nav-ico"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				{:else}
					<!-- Sun Icon -->
					<svg
						class="nav-ico"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
						<line x1="1" y1="12" x2="3" y2="12"></line>
						<line x1="21" y1="12" x2="23" y2="12"></line>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Controls -->
		<div class="mobile-actions">
			<button
				type="button"
				class="theme-toggle mobile-theme-btn"
				onclick={toggleTheme}
				aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if currentTheme === 'dark'}
					<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				{:else}
					<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
					</svg>
				{/if}
			</button>

			<button
				type="button"
				class="burger-btn"
				onclick={() => (isMobileOpen = !isMobileOpen)}
				aria-label="Toggle navigation menu"
				aria-expanded={isMobileOpen}
			>
				<span class="burger-bar" class:open={isMobileOpen}></span>
				<span class="burger-bar" class:open={isMobileOpen}></span>
				<span class="burger-bar" class:open={isMobileOpen}></span>
			</button>
		</div>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if isMobileOpen}
		<div class="mobile-menu" role="dialog" aria-label="Mobile Navigation">
			<a href="#work" onclick={closeMobileMenu}>Experience</a>
			<a href="#projects" onclick={closeMobileMenu}>Projects</a>
			<a href="#education" onclick={closeMobileMenu}>Education</a>
			<a href="#contact" class="mobile-cta" onclick={closeMobileMenu}>Let's talk ↗</a>
		</div>
	{/if}
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 500;
		background: var(--paper);
		border-bottom: var(--border);
		transition: all 0.35s var(--ease);
	}

	.nav.float {
		width: min(780px, calc(100% - 28px));
		margin: 0 auto;
		top: 14px;
		background: var(--surface);
		border: var(--border);
		border-radius: 16px;
		box-shadow: var(--shadow);
	}

	.nav-inner {
		max-width: var(--maxw);
		height: 64px;
		margin: 0 auto;
		padding: 0 28px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 14px;
		transition: height 0.35s var(--ease), padding 0.35s var(--ease);
	}

	.nav.float .nav-inner {
		height: 54px;
		padding: 0 16px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-mono);
		font-weight: 700;
		text-decoration: none;
	}

	.mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--ink);
		background: var(--blue);
		color: var(--paper);
		padding: 3px 7px;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.05em;
		box-shadow: var(--shadow-sm);
	}

	.brand-name {
		font-size: 15px;
		color: var(--ink);
		letter-spacing: -0.01em;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.nav-link {
		font-family: var(--font-mono);
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 8px 12px;
		font-size: 13px;
		font-weight: 600;
		color: var(--ink);
		border: 2px solid transparent;
		transition: all 0.18s var(--ease);
	}

	.nav-link:hover {
		border-color: var(--ink);
		background: var(--paper-2);
	}

	.nav-ico {
		width: 16px;
		height: 16px;
		stroke-width: 2.2;
	}

	.nav-cta {
		border: 2px solid var(--ink);
		background: var(--green);
		color: var(--paper);
		box-shadow: var(--shadow-sm);
		padding: 7px 14px;
	}

	.nav-cta:hover {
		background: var(--blue);
		color: var(--paper);
		transform: translate(-1px, -1px);
		box-shadow: var(--shadow);
	}

	.theme-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border: 2px solid var(--ink);
		background: var(--surface);
		color: var(--ink);
		box-shadow: var(--shadow-sm);
		margin-left: 6px;
		transition: transform 0.15s var(--ease), box-shadow 0.15s var(--ease);
	}

	.theme-toggle:hover {
		transform: translate(-1px, -1px);
		box-shadow: var(--shadow);
		background: var(--paper-2);
	}

	.mobile-actions {
		display: none;
		align-items: center;
		gap: 8px;
	}

	.burger-btn {
		width: 38px;
		height: 38px;
		border: 2px solid var(--ink);
		background: var(--surface);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		box-shadow: var(--shadow-sm);
	}

	.burger-bar {
		display: block;
		width: 20px;
		height: 2px;
		background: var(--ink);
		transition: all 0.25s var(--ease);
	}

	.burger-bar.open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.burger-bar.open:nth-child(2) {
		opacity: 0;
	}
	.burger-bar.open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		background: var(--surface);
		border-top: var(--border);
		padding: 16px 20px;
		gap: 12px;
	}

	.mobile-menu a {
		font-family: var(--font-mono);
		font-size: 15px;
		font-weight: 700;
		padding: 10px 14px;
		border: 2px solid var(--ink);
		background: var(--paper);
		box-shadow: var(--shadow-sm);
	}

	.mobile-menu .mobile-cta {
		background: var(--green);
		color: var(--paper);
	}

	@media (max-width: 820px) {
		.nav-links {
			display: none;
		}

		.mobile-actions {
			display: flex;
		}

		.nav.float {
			width: calc(100% - 24px);
			top: 10px;
		}
	}
</style>
