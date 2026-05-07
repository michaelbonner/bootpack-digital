<script lang="ts">
	type OgType = 'website' | 'article' | 'profile';

	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
		ogType?: OgType;
		ogImage?: string;
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title = '',
		description = '',
		canonical = '/',
		ogType = 'website',
		ogImage,
		jsonLd = undefined
	}: Props = $props();

	const resolvedOgImage = $derived(
		ogImage
			? ogImage.startsWith('http')
				? ogImage
				: `https://bootpackdigital.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`
			: null
	);

	const jsonLdBlocks = $derived(
		jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content="https://bootpackdigital.com{canonical}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	{#if resolvedOgImage}
		<meta property="og:image" content={resolvedOgImage} />
		<meta name="twitter:image" content={resolvedOgImage} />
	{/if}

	<link rel="canonical" href="https://bootpackdigital.com{canonical}" />

	{#each jsonLdBlocks as block, i (i)}
		{@html `<script type="application/ld+json">${JSON.stringify(block)}</script>`}
	{/each}
</svelte:head>
