<script>
	import { _game, resetValues } from '../../lib/data'
	const resetStore = () => {
		_game.set(resetValues)
	}

</script>

	<footer>
		<div class="py-2">
			<button class="button-blue" on:click={resetStore}>Reset</button>
		</div>
	</footer>

