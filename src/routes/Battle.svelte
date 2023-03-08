<script>
	const fields = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	$: score = 0
	$: time = 16
	let gamePos1 = 111
	let gamePos2 = 112
	let timer
	let active = false

	const stopTimer = () => {
		clearInterval(timer)
		// active = false
		gamePos1 = 111
		gamePos2 = 112
	}
	const startTimer = (callback, delay = 1000) => {
		timer = setInterval(() => callback(), delay)
	}

	const gameplay = () => {
		gamePos1 = Math.floor(Math.random() * 9)
		gamePos2 = Math.floor(Math.random() * 9)
		while (gamePos2 == gamePos1) {
			gamePos2 = Math.floor(Math.random() * 9)
		}
		time--
		if (time === 0) {
			stopTimer()
			setTimeout(() => {
				active = false
				console.log('Game Done! Refresh to restart.')
			}, 1000)
		}
	}

	const start = () => {
		score = 0
		time = 16
		active = true
		startTimer(gameplay, 1000)
	}

	const handleClick = (e) => {
		let i = parseInt(e.currentTarget.dataset.id)
		if (i == gamePos1 || i == gamePos2) score++
	}
	// $: console.log('Score', score)
</script>

<div class="w-full p-8">
	<nav class="bg-white bg-opacity-50 font-semibold px-2 py-1">
		Score: {score} | Time: {time}
	</nav>
	<section class="bg-white inline-grid grid-cols-3 grid-rows-3 gap-1 relative">
		{#each fields as el, i}
			<figure
				data-id={i}
				on:click={handleClick}
				class="h-28 overflow-hidden shadow w-28 smol-transitions fade">
				<button
					class="bg-gray-100 h-full rounded-lg w-full"
					class:mole={i == gamePos1}
					class:mole2={i == gamePos2}>
					<span class="sr-only">{el}</span>
				</button>
			</figure>
		{/each}
		{#if !active}
			<aside
				class="bg-gray-200 bg-opacity-50 flex flex-col items-center justify-center">
				<button class="nwp-btn blue" on:click={start}>Start</button>
			</aside>
		{/if}
	</section>
</div>

<style>
	aside {
		position: absolute;
		inset: 0;
		z-index: +1;
	}
	.smol-transitions > * {
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center bottom;
		background-color: transparent;
		opacity: 0;
	}

	.mole {
		background-image: url('./img/aniB05.png');
		opacity: 1;
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
		transition-duration: 250ms;
	}
	.mole2 {
		background-image: url('./img/aniB06.png');
		opacity: 1;
		transition-delay: 250ms;
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
		transition-duration: 250ms;
	}

	@media (prefers-reduced-motion: reduce) {
		.smol-transitions > * {
			--transition-duration: 0.01ms;
		}
	}
</style>
