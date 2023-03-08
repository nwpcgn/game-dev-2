<script>
	import { TopBar } from './lib'
	import { Toasts } from 'svoast'
	import Router, { location, link } from 'svelte-spa-router'
	import { loading, sleep } from './lib/data'
	import routes from './routes'
	const nav = [
		['/', 'Home'],
		['/todo', 'Todos'],
		['/game', 'Game'],
		['/battle', 'Battle'],
		['/settings', 'Settings']
	]
	function routeLoading(event) {
		loading.set(true)
	}

	function routeLoaded(event) {
		loading.set(false)
	}
</script>

<Toasts />
<TopBar class="pl-2 shadow">
	<svelte:fragment slot="start">
		<h4 class="text-2xl font-semibold">NWP-APP</h4>
	</svelte:fragment>
	<svelte:fragment slot="end">
		<nav>
			{#each nav as [path, name]}
				<a href="#{path}" class="nav-link" class:active={path === $location}
					>{name}</a>
			{/each}
		</nav>
	</svelte:fragment>
</TopBar>

<main>
	<Router
		{routes}
		on:routeLoading={routeLoading}
		on:routeLoaded={routeLoaded} />
</main>

<style>
	:root {
		--nav-link-bg: rgba(255, 255, 255, 0.1);
	}
	.nav-link {
		@apply inline-flex items-center justify-center min-h-12 px-2 transition-colors duration-150 ease-linear;
	}
	.nav-link:active {
		background-color: var(--nav-link-bg);
	}
	.nav-link.active {
		@apply font-italic;
	}
	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
