<script lang="ts">
	import clsx from 'clsx';
	import Brands from '../components/brands.svelte';
	import ContactBanner from '../components/contact-banner.svelte';
	import Seo from '../components/seo.svelte';
	import WhatMakesUsDifferent from '../components/what-makes-us-different.svelte';
	import BlueTopo from '../images/blue-topo.svg';
</script>

<Seo
	title="Custom web and app developer in Utah | Bootpack Digital"
	description="We develop websites, mobile apps, and web software to turn your ideas into reality, delivering quality solutions essential for business success."
	canonical="/"
/>

<div class="relative bg-blue-50 hero-bg">
	<div class="flex overflow-hidden absolute inset-0 w-full h-full opacity-80">
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
		<img
			loading="eager"
			class="min-h-full"
			src={BlueTopo}
			alt="Blue topographic map"
			width="740"
			height="740"
		/>
	</div>
	<div class="relative lg:py-8">
		<div class="py-12 px-4 lg:px-8 mx-auto md:py-18 max-w-7xl">
			<div class="flex flex-col lg:items-start">
				<h1
					class={clsx(
						'my-4 font-bold leading-tight text-center text-navy-500 text-2xl',
						'sm:text-3xl',
						'md:text-4xl md:text-left',
						'xl:text-[clamp(2rem,4cqw,4rem)]'
					)}
				>
					Web design and development experts
					<br />
					<span class="text-blue-500">based in Salt Lake City, Utah</span>
				</h1>
				<p
					class="mb-8 text-base leading-normal text-center text-blue-600 md:text-xl md:text-left slide-in-bottom-subtitle"
				>
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
