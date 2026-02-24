<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import Links from '../links.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="Terms of Service | Bootpack Digital"
	description="We are committed to protecting your privacy. This Privacy Policy describes how we collect and use information about you when you use our website."
	canonical="/policies/terms-of-service"
/>

<div class="pt-8 pb-16 bg-white">
	<div class="container px-4 mx-auto mt-8 max-w-5xl text-gray-700">
		<Links />

		<div class="pt-4 max-w-3xl prose">
			<h1>Bootpack Digital's Terms of Service</h1>

			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.policyBody}
		</div>
	</div>
</div>

<ContactBanner textLine1="Ready to get started?" textLine2="Send us a message so we can chat." />
