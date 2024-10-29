<script lang="ts">
	import '../app.css';

	import { browser } from '$app/environment';
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import posthog from 'posthog-js';
	import { onMount } from 'svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import { printBootpackConsoleInfo } from '../functions/printBootpackConsoleInfo';

	onNavigate((navigation) => {
		if (!(document as any).startViewTransition) return;

		return new Promise((resolve) => {
			(document as any).startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let scriptEl: HTMLScriptElement;
	onMount(async () => {
		if (typeof window !== 'undefined') {
			printBootpackConsoleInfo();
		}
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});

	export const load = async () => {
		if (browser) {
			posthog.init('phc_bjb8pFfDLmpxH2XySWdJVgqkqSyoafIqOT3HK9Hh46d', {
				api_host: '/ingest',
				capture_pageleave: false,
				capture_pageview: false,
				ui_host: 'https://us.posthog.com'
			});
		}
		return;
	};
	load();

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
</script>

<svelte:head>
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
	<!-- Insert `partytownSnippet` here -->
	<script bind:this={scriptEl}></script>

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
		<slot />
	</main>
	<Footer />
</div>
