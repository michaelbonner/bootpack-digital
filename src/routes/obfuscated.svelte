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
	<div class="container mx-auto mt-16 max-w-5xl px-4 text-gray-700">
		<h1 class="text-3xl font-extrabold leading-9 tracking-tight text-navy-600 sm:leading-10">
			You shouldn't be here
		</h1>

		<p class="mt-4">
			You might be a bot, we don't really know. If you are a human, please contact us.
		</p>
	</div>
</div>
<div class="bg-gray-200">
	<div
		class="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8"
	>
		<h2
			class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10"
		>
			<span class="block">Ready to get started?</span>
			<span class="block text-blue-600"> Send us a message so we can chat. </span>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow">
				<a
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500"
					href="/contact"
				>
					Get in touch
				</a>
			</div>
		</div>
	</div>
</div>
