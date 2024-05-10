<script lang="ts">
	import Brands from '../components/brands.svelte';
	import ContactForm from '../components/contact-form.svelte';
	import WhatMakesUsDifferent from '../components/what-makes-us-different.svelte';

	const seoTitle = 'Custom web and app developer in Utah | Bootpack Digital';
	const seoDescription =
		'We build websites, mobile applications, and web software. We want to help you turn your ideas into realities. We understand how to build quality software, and we understand what it takes for a business to succeed.';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />

	<link rel="canonical" href="https://bootpackdigital.com/" />
</svelte:head>

<div class="hero-bg">
	<div class="container mx-auto lg:py-12">
		<div
			class="mx-auto flex w-full max-w-screen-xl flex-col flex-wrap items-center py-12 px-6 md:flex-row md:py-24"
		>
			<div class="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-4/5">
				<h1
					class="slide-in-bottom-h1 my-4 text-center text-2xl font-bold leading-tight text-navy-500 md:text-left md:text-4xl xl:text-5xl"
				>
					Software and Web Developers{` `}
					<br />
					<span class="text-blue-500">based in Salt Lake City, Utah</span>
				</h1>
				<p
					class="slide-in-bottom-subtitle mb-8 text-center text-base leading-normal text-blue-600 md:text-left md:text-xl"
				>
					We help you build websites, mobile applications, and web software that works. We want to
					help you turn your ideas into solutions that scale with your business. We see ourselves as
					a partner with you, and we're committed to making every venture as successful as possible.
				</p>
				<div class="my-4 rounded-md shadow lg:my-0">
					<a
						class="focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-orange-700 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none"
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
<div class="bg-white py-12" id="get-in-touch">
	<div class="container mx-auto max-w-screen-xl">
		<div class="mx-auto w-full py-6 px-8">
			<h2 class="text-3xl font-extrabold leading-9 text-navy-600 sm:text-4xl sm:leading-10">
				Get in touch!
			</h2>
			<div class="lg:mx-24">
				<ContactForm />
			</div>
		</div>
	</div>
</div>
