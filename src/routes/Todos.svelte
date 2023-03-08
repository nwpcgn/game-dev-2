<script>
	import { Page, H1, H2, P } from '../lib'
	import Wrapper from './patreals/Wrapper.svelte'
	import TodoWrapper from '../lib/list/TodoWrapper.svelte';
</script>

<Page content>
	<section class="py-20">
		<Wrapper img={1}>
			<header>
				<H1>Nwp-Studio</H1>
				<H2>Database</H2>
				<P lead>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
					eget justo et iaculis.
				</P>
				<ul>
					<li class="py-4">
						<span
							class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded"
							>1</span>
						<span>Proin volutpat ex eu</span>
					</li>
					<li class="py-4">
						<span
							class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded"
							>2</span>
						<span>Fusce posuere nibh in cursus</span>
					</li>
					<li class="py-4">
						<span
							class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded"
							>3</span>
						<span>Maecenas sit amet vehicula</span>
					</li>
				</ul>
			</header>
		</Wrapper>

		<div>
			<TodoWrapper></TodoWrapper>
		</div>
	</section>
</Page>
