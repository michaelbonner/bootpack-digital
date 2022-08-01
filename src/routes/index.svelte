<script>
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
</svelte:head>

<div class="hero-bg">
	<div class="container mx-auto lg:py-12">
		<div
			class="w-full max-w-screen-xl py-12 md:py-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center"
		>
			<div class="flex flex-col w-full xl:w-4/5 justify-center lg:items-start overflow-y-hidden">
				<h1
					class="my-4 text-2xl md:text-4xl xl:text-5xl text-navy-500 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
				>
					Software and Web Developers{` `}
					<br />
					<span class="text-blue-500">based in Salt Lake, UT</span>
				</h1>
				<p
					class="leading-normal text-base md:text-xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-blue-600"
				>
					We help you build websites, mobile applications, and web software that works. We want to
					help you turn your ideas into solutions that scale with your business. We see ourselves as
					a partner with you, and we're committed to making every venture as successful as possible.
				</p>
				<div class="rounded-md shadow my-4 lg:my-0">
					<a
						class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
						href="/contact/"
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
		<div class="w-full mx-auto py-6 px-8">
			<h2 class="text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
				Get in touch!
			</h2>
			<div class="lg:mx-24">
				<ContactForm />
			</div>
		</div>
	</div>
</div>
