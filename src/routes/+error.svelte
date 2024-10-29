<script context="module" lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
</svelte:head>

<div class="overflow-hidden relative py-16 text-lg leading-8 bg-white">
	<div class="grid relative gap-y-12 px-4 text-center sm:px-6 lg:px-8">
		<h1
			class="text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10 text-navy-600"
		>
			Looks like you got lost along the way
		</h1>
		<p>
			{$page.status}: {$page.error?.message}
		</p>
	</div>
</div>
