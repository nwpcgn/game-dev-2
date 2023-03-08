<script>
	import MainBar from './MainBar.svelte'
	import UpgradeBar from './UpgradeBar.svelte'
	import StatusBar from './StatusBar.svelte'
	import Engine from './Engine.svelte'

	import { Page } from '../../lib'
	import { _game, resetValues, addcomma } from '../../lib/data'
	const resetStore = () => {
		_game.set(resetValues)
	}

	$: ({
		money,
		moneyup,
		msec,
		upcost,
		catcost,
		workercost,
		upown,
		catown,
		workerown,
		catadd,
		workadd,
		cboost,
		wboost,
		catmax,
		workmax
	} = $_game)
</script>

<Page>
	<header class="space-y-3 px-4">
		<StatusBar />
		<MainBar />
		<details>
			<UpgradeBar />
		</details>
		
		<Engine />
	</header>

	<article />
	<footer>
		<div class="py-2">
			<button class="button-blue" on:click={resetStore}>Reset</button>
		</div>
	</footer>
</Page>
