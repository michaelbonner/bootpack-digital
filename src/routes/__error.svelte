<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }: { error: any; status: number }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="relative overflow-hidden bg-white py-16 text-lg leading-8">
	<div class="relative grid gap-y-12 px-4 text-center sm:px-6 lg:px-8">
		<h1
			class="text-3xl font-extrabold leading-9 tracking-tight text-navy-600 sm:text-4xl sm:leading-10"
		>
			Looks like you got lost along the way
		</h1>
		<p>
			{title}
		</p>
	</div>
</div>
