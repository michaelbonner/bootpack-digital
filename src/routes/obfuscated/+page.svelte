<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '../../components/seo.svelte';
</script>

<Seo
	title="Obfuscated | Bootpack Digital"
	description="This page is obfuscated. It is not meant to be read. It is meant to be used as a placeholder for a real page."
	canonical="/obfuscated"
/>

<div class="pt-8 pb-16 bg-white">
	<div class="container px-4 mx-auto mt-16 max-w-5xl text-gray-700 prose">
		<h1>You shouldn't be here</h1>

		<p>
			You might be a bot, we don't really know. If you are a human, please
			<a href={`${base}/contact`}> contact us. </a>
		</p>
	</div>
</div>
