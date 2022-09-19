<script lang="ts">
	import '../app.css';

	import Footer from '../components/footer.svelte';
	import Gtm from '../components/gtm.svelte';
	import Header from '../components/header.svelte';

	const gtmId = 'GTM-KCZ4PZC';
	const gtmDataPoints: string[] = [];

	let loadTawkTo = false;

	setTimeout(() => (loadTawkTo = true), 3000);
</script>

<Gtm {gtmId} {gtmDataPoints} />

<div class="leading-normal tracking-normal text-gray-900">
	<Header />
	<slot />
	<Footer />
	{#if loadTawkTo}
		<script
			lang="js"
			src="https://embed.tawk.to/632142d937898912e96900dc/1gcsuq8kr"
			async="true"
			charset="UTF-8"
			crossorigin="*"></script>
	{/if}
</div>
