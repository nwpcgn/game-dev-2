<script>
	import {  _game } from '../../lib/data'

	const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	$: daten = Object.entries($_game)
</script>

<section {...$$restProps}>
	{#each daten as [k, v], i}
		<span class="ml-1 d_row">
			<span class="d_col1">{i}: {k}:</span>
			<span class="d_col2">{v}</span>
		</span>
	{/each}
</section>

<!-- {#if op1}
	<div class="space-x-1 space-y-2 p-1">
		<span class="d_row">
			<span class="d_col1">money:</span>
			<span class="d_col2">{money}</span>
		</span>
		<span class="d_row">
			<span class="d_col1">moneyup:</span>
			<span class="d_col2">{moneyup}</span>
		</span>
		<span class="d_row">
			<span class="d_col1">msec:</span>
			<span class="d_col2">{msec}</span>
		</span>

		{#if up1}
			<span class="d_row">
				<span class="d_col1">upown:</span>
				<span class="d_col2">{upown}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">upcost:</span>
				<span class="d_col2">{upcost}</span>
			</span>
		{/if}
		{#if up2}
			<span class="d_row">
				<span class="d_col1">catown:</span>
				<span class="d_col2">{catown}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">catcost:</span>
				<span class="d_col2">{catcost}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">catadd:</span>
				<span class="d_col2">{catadd}</span>
			</span>
		{/if}
		{#if up3}
			<span class="d_row">
				<span class="d_col1">workerown:</span>
				<span class="d_col2">{workerown}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">workercost:</span>
				<span class="d_col2">{workercost}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">workadd:</span>
				<span class="d_col2">{workadd}</span>
			</span>
		{/if}
		{#if up4}
			<span class="d_row">
				<span class="d_col1">cboost:</span>
				<span class="d_col2">{cboost}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">wboost:</span>
				<span class="d_col2">{wboost}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">catmax:</span>
				<span class="d_col2">{catmax}</span>
			</span>
			<span class="d_row">
				<span class="d_col1">workmax:</span>
				<span class="d_col2">{workmax}</span>
			</span>
		{/if}
	</div>
{/if} -->
<style>
	section {
		@apply space-x-1 space-y-2;
	}
	.d_row {
		@apply inline-flex items-center px-3 py-1 rounded shadow justify-between;
	}
	.d_col1 {
		@apply capitalize text-base font-extralight;
	}
	.d_col2 {
		@apply ml-2 text-xl font-extrabold;
	}
</style>
