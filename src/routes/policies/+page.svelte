<script lang="ts">
	import { base } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';
	import Links from './links.svelte';
</script>

<Seo
	title="Privacy Policy and Terms of Service | Bootpack Digital"
	description="We are committed to protecting your privacy. This Privacy Policy describes how we collect and use information about you when you use our website."
	canonical="/policies"
/>

<div class="pt-8 pb-16 bg-white">
	<div class="container px-4 mx-auto mt-16 max-w-5xl text-gray-700">
		<h1 class="text-3xl font-extrabold tracking-tight leading-9 sm:leading-10 text-navy-600">
			Privacy Policy and Terms of Service
		</h1>

		<div class="mt-8 prose">
			<p>
				We take your privacy seriously. These policies describe how we collect and use information
				about you when you use our website. Please read them carefully. If you have any questions,
				please <a href={`${base}/contact`} class="underline text-navy-600">contact us</a>. We're
				happy to help.
			</p>
		</div>

		<div class="mt-10">
			<Links />
		</div>
	</div>
</div>

<ContactBanner textLine1="Ready to get started?" textLine2="Send us a message so we can chat." />
