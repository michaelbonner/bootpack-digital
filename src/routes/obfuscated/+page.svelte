<script lang="ts">
	const seoTitle = 'Obfuscated | Bootpack Digital';
	const seoDescription =
		'This page is obfuscated. It is not meant to be read. It is meant to be used as a placeholder for a real page.';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
</svelte:head>

<div class="bg-white pt-8 pb-16">
	<div class="container prose mx-auto mt-16 max-w-5xl px-4 text-gray-700">
		<h1>You shouldn't be here</h1>

		<p>
			You might be a bot, we don't really know. If you are a human, please
			<a href="/contact"> contact us. </a>
		</p>
	</div>
</div>
