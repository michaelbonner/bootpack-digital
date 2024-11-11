<script context="module" lang="ts">
	import { page } from '$app/stores';

	import Illustration404 from '../images/404-illustration.svg';
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
		<img
			alt="404 illustration"
			class="mx-auto w-sm"
			height="300"
			src={Illustration404}
			width="300"
		/>
		<p>
			<strong>{$page.status}</strong> &ndash;
			{$page.error?.message}
		</p>
	</div>
</div>
