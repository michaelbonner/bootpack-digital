<script lang="ts">
	import clsx from 'clsx';
	import gsap from 'gsap';
	import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
	import { SplitText } from 'gsap/SplitText';
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

		gsap.registerPlugin(SplitText);
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

		const titleElement = document.querySelector('.bpd-animate-split-title');
		if (titleElement) {
			let title = SplitText.create(titleElement, {
				type: 'words'
			});
			timelines.push(
				gsap.from(title.words, {
					rotate: -3,
					scale: 1.05,
					y: '-0.5rem',
					autoAlpha: 0,
					stagger: 0.08,
					duration: 0.4
				})
			);
		}

		const subtitleElement = document.querySelector('.bpd-animate-split-subtitle');
		if (subtitleElement) {
			let subtitle = SplitText.create(subtitleElement, {
				type: 'lines'
			});

			gsap.from(subtitle.lines, {
				y: -20,
				autoAlpha: 0,
				delay: 1.2
			});
		}

		const quoteButtonElement = document.querySelector('.bpd-animate-quote-button');
		if (quoteButtonElement) {
			timelines.push(
				gsap.from(quoteButtonElement, {
					y: -20,
					autoAlpha: 0,
					delay: 1.5
				})
			);
		}

		const upAfterDelayElements = document.querySelectorAll('.bpd-animate-up-after-delay');
		if (upAfterDelayElements) {
			timelines.push(
				gsap.from(upAfterDelayElements, {
					y: -20,
					autoAlpha: 0,
					delay: 1.8
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
						'xl:text-[clamp(2rem,4cqw,4rem)]',
						'bpd-animate-split-title'
					)}
				>
					Web design and development experts
					<br />
					<span class="text-blue-500">based in Salt Lake City, Utah</span>
				</h1>
				<p
					class="mb-8 text-base leading-normal text-center text-blue-600 md:text-xl md:text-left bpd-animate-split-subtitle"
				>
					We help you build <span class="font-bold">websites</span>, mobile
					<span class="font-bold">apps</span>, and web
					<span class="font-bold">software</span> applications that work.
				</p>
				<div class="my-4 rounded-md shadow-sm lg:my-0 bpd-animate-quote-button">
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
