<script lang="ts">
	import '../app.css';

	import { browser } from '$app/environment';
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { partytownSnippet } from '@qwik.dev/partytown/integration';
	import posthog from 'posthog-js';
	import { onMount } from 'svelte';
	import FictiveRedirectModal from '../components/fictive-redirect-modal.svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';

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

			posthog.init('phc_bjb8pFfDLmpxH2XySWdJVgqkqSyoafIqOT3HK9Hh46d', {
				api_host: '/ingest',
				capture_pageleave: false,
				capture_pageview: false,
				ui_host: 'https://us.posthog.com'
			});

			beforeNavigate(() => posthog.capture('$pageleave'));
			afterNavigate(() => posthog.capture('$pageview'));
		}
	});

	const children_render = $derived(children);
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
