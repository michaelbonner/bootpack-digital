<script lang="ts">
	import Brands from '../components/brands.svelte';
	import ContactForm from '../components/contact-form.svelte';
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
	<div class="container relative mx-auto lg:py-12">
		<div
			class="flex flex-col flex-wrap items-center py-12 px-6 mx-auto w-full max-w-(--breakpoint-xl) md:flex-row md:py-24"
		>
			<div class="flex overflow-y-hidden flex-col justify-center w-full lg:items-start xl:w-4/5">
				<h1
					class="my-4 text-2xl font-bold leading-tight text-center md:text-4xl md:text-left xl:text-5xl slide-in-bottom-h1 text-navy-500"
				>
					Software and Web Developers{` `}
					<br />
					<span class="text-blue-500">based in Salt Lake City, Utah</span>
				</h1>
				<p
					class="mb-8 text-base leading-normal text-center text-blue-600 md:text-xl md:text-left slide-in-bottom-subtitle"
				>
					We help you build websites, mobile applications, and web software that works. We want to
					help you turn your ideas into solutions that scale with your business. We see ourselves as
					a partner with you, and we're committed to making every venture as successful as possible.
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
<div class="py-12 bg-white" id="get-in-touch">
	<div class="container mx-auto max-w-(--breakpoint-xl)">
		<div class="py-6 px-8 mx-auto w-full">
			<h2 class="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 text-navy-600">
				Get in touch!
			</h2>
			<div class="lg:mx-24">
				<ContactForm />
			</div>
		</div>
	</div>
</div>
