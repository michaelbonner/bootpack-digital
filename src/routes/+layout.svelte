<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/figtree';

	import { browser } from '$app/environment';
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { partytownSnippet } from '@qwik.dev/partytown/integration';
	import posthog from 'posthog-js';
	import { onMount } from 'svelte';
	import FictiveRedirectModal from '../components/fictive-redirect-modal.svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import { PUBLIC_POSTHOG_ENABLED } from '$env/static/public';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!(document as Document).startViewTransition) return;

		return new Promise((resolve) => {
			(document as Document).startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(async () => {
		if (browser) {
			const { printBootpackConsoleInfo } = await import('../functions/printBootpackConsoleInfo');
			printBootpackConsoleInfo();
		}
	});

	if (PUBLIC_POSTHOG_ENABLED !== 'false') {
		if (browser) {
			posthog.init('phc_bjb8pFfDLmpxH2XySWdJVgqkqSyoafIqOT3HK9Hh46d', {
				api_host: '/ingest',
				capture_pageleave: false,
				capture_pageview: false,
				ui_host: 'https://us.posthog.com'
			});

			beforeNavigate(() => posthog.capture('$pageleave'));
			afterNavigate(() => posthog.capture('$pageview'));
		}
	}

	const children_render = $derived(children);

	export const ldJson = {
		'@context': 'https://schema.org',
		'@type': ['Organization', 'LocalBusiness'],
		'@id': 'https://bootpackdigital.com/#organization',
		name: 'Bootpack Digital',
		legalName: 'Bootpack Digital, LLC',
		url: 'https://bootpackdigital.com/',
		logo: 'https://bootpackdigital.com/bpd-color-horizontal.png',
		image: 'https://bootpackdigital.com/bpd-color-horizontal.png',
		description:
			'Bootpack Digital is a web and app development agency based in Salt Lake City, Utah. We specialize in custom websites, mobile apps, and web software applications, leveraging 18+ years of experience to help businesses grow.',
		address: {
			'@context': 'https://schema.org',
			'@type': 'PostalAddress',
			addressLocality: 'Salt Lake City',
			addressRegion: 'UT',
			addressCountry: 'US',
			postalCode: '84171'
		},
		areaServed: 'US',
		telephone: '+18018395287',
		email: 'hey@bootpackdigital.com',
		priceRange: '$$$',
		founder: {
			'@type': 'Person',
			name: 'Michael Bonner',
			email: 'hey@bootpackdigital.com',
			telephone: '+18018395287',
			sameAs: [
				'https://www.facebook.com/michaelwbonner',
				'https://www.instagram.com/michael__bonner/',
				'https://github.com/michaelbonner',
				'https://g.page/bootpack'
			]
		},
		foundingDate: '2019',
		sameAs: [
			'https://www.facebook.com/bootpackdigital',
			'https://www.instagram.com/bootpack.digital',
			'https://github.com/bootpackdigital'
		],
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00'
			}
		],
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: '+18018395287',
				contactType: 'customer service',
				areaServed: 'US',
				availableLanguage: ['English']
			}
		],
		hasOfferCatalog: {
			'@context': 'https://schema.org',
			'@type': 'OfferCatalog',
			name: 'Services',
			itemListElement: [
				[
					{
						name: 'Web Design',
						description: 'Custom web design and development services.'
					},
					{
						name: 'Web Development',
						description: 'Custom web development services.'
					},
					{
						name: 'Web Software Development',
						description: 'Custom web software development services.'
					},
					{
						name: 'Mobile App Development',
						description: 'Custom mobile app development services.'
					},
					{
						name: 'Marketing',
						description: 'Custom marketing services.'
					},
					{
						name: 'SEO',
						description: 'Custom SEO services.'
					},
					{
						name: 'Social Media',
						description: 'Custom social media services.'
					}
				].map((service) => ({
					'@context': 'https://schema.org',
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: service.name,
						description: service.description,
						areaServed: 'United States',
						provider: { '@id': 'https://bootpackdigital.com/#organization' }
					}
				}))
			]
		}
	};
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags @typescript-eslint/no-unused-expressions -->
	{@html '<script>' + partytownSnippet() + '</script>'}

	<script>
		// Config options
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://bootpackdigital.com/proxytown';

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`);

					const gtmId = new URL(url).searchParams.get('id');
					gtmId && proxyUrl.searchParams.append('id', gtmId);

					return proxyUrl;
				} else if (url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`);

					return proxyUrl;
				}

				return url;
			}
		};
	</script>

	<!-- GTM script + config -->
	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=GTM-KCZ4PZC"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'GTM-KCZ4PZC', {
			page_path: window.location.pathname
		});
	</script>

	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}</script>`}
</svelte:head>

<div class="tracking-normal leading-normal text-gray-900">
	<div class="p-2 text-right bg-white sr-only">
		<a class="py-1 px-2 border" href="#main-content">Skip to main content</a>
	</div>
	<Header />
	<main id="main-content">
		{@render children_render?.()}
	</main>
	<Footer />

	<FictiveRedirectModal />
</div>
