<script lang="ts">
	import clsx from 'clsx';
	import gsap from 'gsap';
	import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
	import { onMount } from 'svelte';
	import Brands from '../components/brands.svelte';
	import ContactBanner from '../components/contact-banner.svelte';
	import Seo from '../components/seo.svelte';
	import TopoBg from '../components/topo-bg.svelte';
	import WhatMakesUsDifferent from '../components/what-makes-us-different.svelte';

	let timelines: gsap.core.Tween[] = [];

	onMount(() => {
		// Respect user's motion preferences
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		gsap.registerPlugin(DrawSVGPlugin);

		const drawElements = document.querySelectorAll('.bpd-draw-svg path');
		if (drawElements.length > 0) {
			timelines.push(
				gsap.from('.bpd-draw-svg path', {
					duration: 5,
					drawSVG: '2% 90%',
					yoyo: true,
					repeat: -1
				})
			);
		}

		return () => {
			timelines.forEach((tl) => tl.kill());
		};
	});
</script>

<Seo
	title="Custom web and app developer in Utah | Bootpack Digital"
	description="We develop websites, mobile apps, and web software to turn your ideas into reality, delivering quality solutions essential for business success."
	canonical="/"
/>

<div class="relative bg-blue-50 hero-bg">
	<div class="flex overflow-hidden absolute inset-0 w-full h-full">
		<TopoBg />
		<TopoBg />
		<TopoBg />
		<TopoBg />
		<TopoBg />
		<TopoBg />
	</div>
	<div class="relative lg:py-8">
		<div class="py-12 px-4 lg:px-8 mx-auto md:py-18 max-w-7xl">
			<div class="flex flex-col lg:items-start">
				<h1
					class={clsx(
						'my-4 font-bold leading-tight text-center text-navy-500 text-[2rem]',
						'md:text-4xl md:text-left',
						'xl:text-[clamp(2rem,4cqw,4rem)]'
					)}
				>
					Web design and development experts
					<br />
					<span class="text-blue-500">based in Salt Lake City, Utah</span>
				</h1>
				<p class="mb-8 text-base leading-normal text-center text-blue-600 md:text-xl md:text-left">
					We help you build <span class="font-bold">websites</span>, mobile
					<span class="font-bold">apps</span>, and web
					<span class="font-bold">software</span> applications that work.
				</p>
				<div class="my-4 rounded-md shadow-sm lg:my-0">
					<a
						class="flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-white bg-orange-700 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-hidden focus:shadow-outline"
						href="/contact"
					>
						Request a Quote
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<WhatMakesUsDifferent />
<Brands />
<ContactBanner
	textLine1="Ready to get started?"
	textLine2="Send us a message so we can chat."
	bgColor="bg-white/50"
/>
