<script>
	import { _game, resetValues } from '../../lib/data'
	function playSound() {
		let ding = new Audio('./audio/mouse-click.mp3')
		ding.play()
	}
	let volume = 0.9
	let muted = false
	let paused
	export let sound
</script>

<audio
	bind:this={sound}
	src="./audio/mouse-click.mp3"
	bind:paused
	bind:volume
	bind:muted />
