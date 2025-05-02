<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
	}

	let { title = '', description = '', canonical = '/' }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://bootpackdigital.com{canonical}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	<link rel="canonical" href="https://bootpackdigital.com{canonical}" />
</svelte:head>
