<script lang="ts">
	import { resolve } from '$app/paths';
	import Brands from '../components/brands.svelte';
	import ContactBanner from '../components/contact-banner.svelte';
	import LinkArrow from '../components/link-arrow.svelte';
	import Seo from '../components/seo.svelte';
	import TopoHeroBg from '../components/topo-hero-bg.svelte';
	import WhatMakesUsDifferent from '../components/what-makes-us-different.svelte';

	const facts = [
		{ value: 'Web, apps & software', label: 'What we build' },
		{ value: 'Founder-led', label: "Who you'll work with" },
		{ value: '1 business day', label: 'Typical reply time' }
	];
</script>

<Seo
	title="Custom web and app developer in Utah | Bootpack Digital"
	description="We develop websites, mobile apps, and web software to turn your ideas into reality, delivering quality solutions essential for business success."
	canonical="/"
/>

<section class="overflow-hidden relative bg-blue-50">
	<TopoHeroBg />
	<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
			<div>
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					Design and development studio
				</p>
				<h1
					class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					Web design and development experts
					<span class="block text-blue-600">based in Salt Lake City, Utah</span>
				</h1>
			</div>
			<div class="pb-1">
				<p class="max-w-xl text-lg leading-8 text-navy-600">
					We help you build <span class="font-semibold text-navy-700">websites</span>, mobile
					<span class="font-semibold text-navy-700">apps</span>, and custom
					<span class="font-semibold text-navy-700">software</span> that just works.
				</p>
				<div class="flex flex-wrap gap-x-6 gap-y-4 items-center mt-7">
					<a
						class="inline-flex items-center py-3 px-5 text-base font-semibold text-white bg-navy-700 rounded-lg transition-colors hover:bg-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
						href={resolve('/contact')}
					>
						Request a Free Quote
					</a>
					<a
						class="inline-flex items-center font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
						href={resolve('/work')}
					>
						See the work we've shipped
						<LinkArrow class="ml-2" />
					</a>
				</div>
			</div>
		</div>

		<dl class="grid overflow-hidden gap-px mt-14 rounded-xl md:grid-cols-3 md:mt-20">
			{#each facts as fact (fact.label)}
				<div class="px-6 py-7 bg-white/80">
					<dt class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">
						{fact.label}
					</dt>
					<dd class="mt-2 text-2xl font-bold tracking-tight text-navy-700 xl:text-3xl">
						{fact.value}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<div style="content-visibility: auto; contain-intrinsic-size: auto 900px;">
	<WhatMakesUsDifferent />
</div>
<div style="content-visibility: auto; contain-intrinsic-size: auto 600px;">
	<Brands />
</div>
<div style="content-visibility: auto; contain-intrinsic-size: auto 300px;">
	<ContactBanner
		textLine1="Ready to get started?"
		textLine2="Send us a message so we can chat."
		bgColor="bg-navy-100"
	/>
</div>
