<script lang="ts">
	import ContactBanner from '../../components/contact-banner.svelte';
	import Links from './links.svelte';

	const seoTitle = 'Privacy Policy and Terms of Service | Bootpack Digital';
	const seoDescription =
		'We are committed to protecting your privacy. This Privacy Policy describes how we collect and use information about you when you use our website.';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:url" content="https://bootpackdigital.com/policies" />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
	<script src="https://app.termageddon.com/js/termageddon.js"></script>

	<link rel="canonical" href="https://bootpackdigital.com/policies" />
</svelte:head>

<div class="bg-white pb-16 pt-8">
	<div class="container mx-auto mt-16 max-w-5xl px-4 text-gray-700">
		<h1 class="text-3xl font-extrabold leading-9 tracking-tight text-navy-600 sm:leading-10">
			Privacy Policy and Terms of Service
		</h1>

		<div class="prose mt-8">
			<p>
				We take your privacy seriously. These policies describe how we collect and use information
				about you when you use our website. Please read them carefully. If you have any questions,
				please <a href="/contact" class="text-navy-600 underline">contact us</a>. We're happy to
				help.
			</p>
		</div>

		<div class="mt-10">
			<Links />
		</div>
	</div>
</div>

<ContactBanner textLine1="Ready to get started?" textLine2="Send us a message so we can chat." />
