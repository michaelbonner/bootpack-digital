<script lang="ts">
	type OgType = 'website' | 'article' | 'profile';

	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
		ogType?: OgType;
		ogImage?: string;
		ogImageAlt?: string;
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title = '',
		description = '',
		canonical = '/',
		ogType = 'website',
		ogImage = '/og-image.jpg',
		ogImageAlt = 'Bootpack Digital — custom web and app development',
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
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta name="twitter:image" content={resolvedOgImage} />
		{#if ogImageAlt}
			<meta property="og:image:alt" content={ogImageAlt} />
			<meta name="twitter:image:alt" content={ogImageAlt} />
		{/if}
	{/if}

	<link rel="canonical" href="https://bootpackdigital.com{canonical}" />

	{#each jsonLdBlocks as block, i (i)}
		{@html `<script type="application/ld+json">${JSON.stringify(block)}<\/script>`}
	{/each}
</svelte:head>
