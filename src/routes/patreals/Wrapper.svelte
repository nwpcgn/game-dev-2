<script>
const images = ["gamer.png","people.png","financial-report.png","gamer.png","hardworking-man.png","job-interview.png","online-shopping.png","walk-dog.png","working-from-airport.png","work-tv.png","error1.png"]
export let slotClass = ''
export let img = 0
</script>

<article {...$$restProps}>
	<section>
		<img
			class="max-w-full max-h-full max-h-62 md:max-h-lg m-auto"
			src="https://shuffle.dev/metis-assets/illustrations/{images[img]}"
			alt="" />
	</section>
	<section {...$$restProps}>
		<slot><!-- optional fallback --></slot>
	</section>
</article>


<style>
	article {
		@apply grid grid-cols-1 md:grid-cols-2 gap-2;
	}
</style>