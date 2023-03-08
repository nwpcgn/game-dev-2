<script>
	import { Page } from '../lib'
	import UpgradeBar from './game/UpgradeBar.svelte'
	import StatusBar from './game/StatusBar.svelte'
	import MainBar from './game/MainBar.svelte'
	import Settings from './game/Settings.svelte'
	import Trigger from './game/Trigger.svelte'
	import { _game, resetValues } from '../lib/data'
	import { onInterval } from './game/utils'
	function playSound() {
		let ding = new Audio('./audio/mouse-click.mp3')
		ding.play()
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

	const updateStore = () => {
		_game.set({
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
		})
	}
	const resetStore = () => {
		_game.set(resetValues)
	}
	const clicked = () => {
		money += moneyup
		// playSound()
	}
	function upgrade(name) {
		if (name === 'kitten') {
			if (money >= catcost && catown < 50) {
				if (catown <= 13) {
					msec += catadd
					catadd++
					cboost = 1
				} else if (catown == 14) {
					msec += catadd
					catadd++
					cboost = 200
				} else if (catown <= 23) {
					msec += 200 * catadd
					catadd++
					cboost = 200
				} else if (catown == 24) {
					msec += 200 * catadd
					catadd++
					cboost = 5000
				} else if (catown <= 48) {
					msec += 5000 * catadd
					catadd++
					cboost = 5000
				} else if (catown == 49) {
					msec += 5000 * catadd
					catadd++
					cboost = 15000
				} else {
					msec += 15000 * catadd
					catadd++
					cboost = 15000
				}
				catown += 1
				money -= catcost
				catcost = catcost * 2
			}
		}
		if (name === 'worker') {
			if (money >= workercost && workerown < 50) {
				if (workerown <= 13) {
					msec += workadd
					workadd++
					wboost = 1
				} else if (workerown == 14) {
					msec += workadd
					workadd++
					wboost = 200
				} else if (workerown <= 23) {
					msec += 200 * workadd
					workadd++
					wboost = 200
				} else if (workerown == 24) {
					msec += 200 * workadd
					workadd++
					wboost = 5000
				} else if (workerown <= 48) {
					msec += 5000 * workadd
					workadd++
					wboost = 5000
				} else if (workerown == 49) {
					msec += 5000 * workadd
					workadd++
					wboost = 15000
				} else {
					msec += 15000 * workadd
					workadd++
					wboost = 15000
				}
				workerown += 1
				money -= workercost
				workercost = workercost * 3
			}
		}

		if (name === 'upgrade') {
			if (money >= upcost) {
				moneyup += upcost / 15
				money -= upcost
				upown += 1
				upcost = upcost * 5
				if (catown == 50) {
					msec -= catmax
					catmax = Math.floor(moneyup * 0.15)
					msec += catmax
				}
				if (workerown == 50) {
					msec -= workmax
					workmax = Math.floor(moneyup * 0.35)
					msec += workmax
				}
			}
		}
	}
	function myTimer() {
		money += msec
	}

	onInterval(myTimer, 1000)

	let ITEMS = [
		{
			name: 'Monkey',
			description:
				"A monkey to help you press space. It doesn't really know what a <i>spacebar</i> is, so it will just bash the whole keyboard and eventually hit it. It succeeds every <b>%v seconds</b>.",
			cost: 30,
			initial_value: 0.2,
			lvl: 0,
			cost_func: (x) => 1.1 * x,
			value_func: (x) => x,
			getDescription: (it) =>
				it.description.replace('%v', 1.0 / it.initial_value)
		},
		{
			name: 'Boomer Mom',
			description:
				"A boomer mom who can't barely open a Word document to help you press it. Every mom can press it <b>%vx a second</b>!",
			cost: 120,
			initial_value: 3,
			lvl: 0,
			cost_func: (x) => 1.3 * x,
			value_func: (x) => 1.0 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		},
		{
			name: 'Gen Z Kid',
			description:
				"A Generation Z kid will help you press it. They haven't ever seen a keyboard before, but they're good at scrolling short vertical videos online, so they do it <b>%vx a second</b>!",
			cost: 500,
			initial_value: 20,
			lvl: 0,
			cost_func: (x) => 1.4 * x,
			value_func: (x) => 1.0 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		},
		{
			name: 'Keyboard Upgrade',
			description: 'Every upgrade will <b>DOUBLE</b> your own hits.',
			cost: 6000,
			multiplier: 2,
			lvl: 0,
			cost_func: (x) => 3.5 * x,
			getDescription: (it) => it.description
		},
		{
			name: 'Angry Influencer',
			description:
				"Angry influencer whose computer crashed and they're now bashing their heads against the keyboard. The more influencer you get, the faster they can hit it, because they can't stand competition. The next one will give <b>%vx per second</b>.",
			cost: 10000,
			initial_value: 150,
			lvl: 0,
			cost_func: (x) => 1.5 * x,
			value_func: (x) => 1.2 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		},
		{
			name: 'MOBA Gamer',
			description:
				'MOBA gamers are fast at pressing keys and they play well in teams. New gamer will hit it <b>%vx per second</b>.',
			cost: 200000,
			initial_value: 600,
			lvl: 0,
			cost_func: (x) => 1.4 * x,
			value_func: (x) => 1.25 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		},
		{
			name: 'Homemade Pressing Robot',
			description:
				'Just a simple robot made out of a broken robot vacuum cleaner that can press the key at the impressive rate of <b>%vx per second</b>!',
			cost: 800000,
			initial_value: 3500,
			lvl: 0,
			cost_func: (x) => 1.4 * x,
			value_func: (x) => 1.25 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		},
		{
			name: 'Laser Machine Gun',
			description:
				'A machine gun that shoots a lot of laser blasts at the spacebar, at a rate of <b>%vx per second</b>!',
			cost: 2000000,
			initial_value: 25000,
			lvl: 0,
			cost_func: (x) => 1.4 * x,
			value_func: (x) => 1.3 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		},
		{
			name: 'Nuclear Blast Gun',
			description:
				'No one knows how it works except for the girl that created it. But the rate is pretty high at <b>%vx per second</b>!',
			cost: 10000000,
			initial_value: 100000,
			lvl: 0,
			cost_func: (x) => 1.4 * x,
			value_func: (x) => 1.3 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		},
		{
			name: 'Alien Tech Key Pressing Machine',
			description:
				'No one knows how it works except for the girl that created it. But the rate is pretty high at <b>%vx per second</b>!',
			cost: 80000000,
			initial_value: 1000000,
			lvl: 0,
			cost_func: (x) => 1.4 * x,
			value_func: (x) => 1.3 * x,
			getDescription: (it) => it.description.replace('%v', nfmt(it.value))
		}
	]
	let active = false
	function onKeyDown(e) {
		// console.log("KEY", e.keyCode)
		if (e.keyCode == 32) {
			active = true
			clicked()
		}
	}
	function onKeyUp(e) {
		if (e.keyCode == 32) {
			active = false
		}
	}
	$: updateStore(money)
	let dialog
	let modal
	const openDialog = () => {
		dialog.showModal()
	}
	const openModal = () => {
		modal.showModal()
	}
</script>

<Page>
	<header class="px-4">
		<StatusBar {openDialog} {openModal} />
	</header>

	<div class="flex-1 flex flex-col justify-around px-4">
		<MainBar />
		<Trigger on:click={clicked} bind:active />
	</div>
</Page>

<dialog class="w-full px-4 py-4 rounded-lg space-y-4" bind:this={dialog}>
	<UpgradeBar on:upgrade={(e) => upgrade(e.detail)} />
	<form method="dialog" class="flex justify-end">
		<button class="btn btn-blue">Close</button>
	</form>
</dialog>

<dialog class="w-full px-4 py-4 rounded-lg space-y-4" bind:this={modal}>
	<Settings {upgrade} />
	<form method="dialog" class="flex justify-end">
		<button class="btn btn-blue">Close</button>
	</form>
</dialog>

<svelte:window
	on:keyup|preventDefault={onKeyUp}
	on:keydown|preventDefault={onKeyDown} />

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(1px);
	}
</style>
