<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import { printBootpackConsoleInfo } from '../functions/printBootpackConsoleInfo';
	import { partytownSnippet } from '@builder.io/partytown/integration';

	let scriptEl: HTMLScriptElement;
	onMount(async () => {
		if (typeof window !== 'undefined') {
			printBootpackConsoleInfo();
		}
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});
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

<div class="leading-normal tracking-normal text-gray-900">
	<Header />
	<slot />
	<Footer />
</div>
