<script>
	import Wrapper from './patreals/Wrapper.svelte'
	import { Page, H2 } from '../lib'
</script>

<Page content>
	<section class="mt-20">
		<Wrapper img={0}>
			<div class="px-4">
				<span class="text-4xl text-blue-600 font-bold font-heading mb-4"
					>Nwp-Studio</span>
				<div class="flex flex-col py-2 mt-4 space-y-2">
					<a class="btn btn-blue" href="#/game">Start Here</a>
					<a class="btn btn-blue" href="#/settings">Settings</a>
				</div>
			</div>
		</Wrapper>
	</section>
</Page>
