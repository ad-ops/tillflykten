<script>
	// import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="grid grid-cols-5 justify-items-center">
			<div>asd</div>
			<div class="grid-span-3 flex justify-center items-center space-x-4 lg:space-x-6">
				<a
					href="/"
					class="text-sm font-medium transition-colors hover:text-primary"
				>
					Hem
				</a>
				<a
					href="/characters"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
				>
					Kompisarna
				</a>
				<a
					href="/story"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
				>
					Resan
				</a>
				<a
					href="/people"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
				>
					Personer
				</a>
				<a
					href="/map"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
				>
					Kartan
				</a>
				<a
					href="/messages"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
				>
					SMS
				</a>
			</div>
			<span class="justify-end">asdasd</span>
		</div>
	</nav>
</header>

<style>
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
