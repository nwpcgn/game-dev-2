<script>
	import { _game, addcomma } from '../../lib/data'
	export let openDialog, openModal
	$: active = $_game.money >= $_game.upcost || $_game.money >= $_game.catcost || $_game.money >= $_game.workercost 
</script>

<header {...$$restProps}>
	<section class="flex justify-between rounded divide-x shadow">
		<nav class="grid grid-cols-2 divide-x">
			<button class="rounded-l" class:btn-blue={active} on:click={openDialog}>Shop</button>
			<button on:click={openModal}>Settings</button>
		</nav>
		<div class="flex-1" />
		<nav class="grid grid-cols-3 divide-x">
			<div class="">
				<h5>Skills:</h5>
				<h4>{$_game.upown}</h4>
			</div>
			<div class="">
				<h5>Cats:</h5>
				<h4>{$_game.catown}</h4>
			</div>
			<div class="">
				<h5>Karens:</h5>
				<h4>{$_game.workerown}</h4>
			</div>
			
		</nav>
		<div class="">
			<h5>Coins:</h5>
			<h4>{$_game.money}</h4>
		</div>
	</section>
</header>

<style>
	div {
		@apply flex items-center justify-center px-2 py-1 truncate;
	}
	h4 {
		@apply font-bold px-1 text-lg text-center;
	}
	h5 {
		@apply italic px-1;
	}
	button {
		@apply px-2 py-1 active:text-primary-600 font-semibold;
	}
</style>
