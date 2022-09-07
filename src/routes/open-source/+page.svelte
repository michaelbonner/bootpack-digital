<script lang="ts">
	const seoTitle = 'Open Source Projects | Bootpack Digital';
	const seoDescription =
		'Open source is important to the modern web. We are committed to sharing tools we think will strengthen the web development community.';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
</svelte:head>

<div class="gray-topo to-gray-100 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
	<div class="relative mx-auto grid max-w-lg gap-8 lg:max-w-7xl">
		<div>
			<h1
				class="text-3xl font-extrabold leading-9 tracking-tight text-navy-600 sm:text-4xl sm:leading-10"
			>
				Open Source Projects
			</h1>
			<div class="flex flex-wrap items-start justify-between gap-8">
				<div class="mt-3 sm:mt-4">
					<p class="max-w-screen-md text-xl leading-7 text-gray-500">
						Most of the web is built on open-source projects. Since open source projects are such a
						valuable resource, we are committed to sharing tools we think will strengthen the web
						development community.
					</p>
				</div>
				<div class="mt-3 inline-flex text-gray-500 sm:mt-4">
					<a
						class="group flex items-center gap-2 rounded-lg border bg-white py-2 px-5 underline-offset-2 shadow-sm transition-colors hover:text-navy-800 hover:underline"
						href="https://github.com/michaelbonner?tab=repositories&q=&type=source&language=&sort=&utm_source=bootpackdigital.com/open-source"
					>
						<svg
							class="h-6 scale-90 fill-current text-gray-600 transition-all group-hover:scale-100 group-hover:text-blue-600"
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Github</title>
							<path
								d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
							/>
						</svg>
						<p class="max-w-screen-md leading-7">See all of our public projects on GitHub</p>
					</a>
				</div>
			</div>
		</div>
		<div
			class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 md:mt-8 md:pt-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12"
		>
			<div>
				<a class="block hover:underline" href="https://github.com/michaelbonner/is-it-down">
					<h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">Is It Down Checker</h3>
				</a>
				<p class="mt-3 text-base leading-6 text-gray-500">
					A tool to track whether or not your sites are up. It also keeps track of how often a site
					goes down, and for how long. An invaluable tool for any company that manages several
					sites.
				</p>
				<div class="mt-3">
					<a
						class="text-base font-semibold leading-6 text-orange-600 underline-offset-2 transition duration-150 ease-in-out hover:text-orange-500 hover:underline"
						href="https://github.com/michaelbonner/is-it-down"
					>
						See Is It Down Checker Code on GitHub
					</a>
				</div>
			</div>
			<div>
				<a class="block hover:underline" href="https://github.com/michaelbonner/redirects-wizard">
					<h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">Redirects Wizard</h3>
				</a>
				<p class="mt-3 text-base leading-6 text-gray-500">
					Sometimes when you're migrating a site you have a lot of links you need to redirect
					somewhere else. Redirects Wizard allows you to do that task, but much quicker.
				</p>
				<div class="mt-3">
					<a
						class="text-base font-semibold leading-6 text-orange-600 underline-offset-2 transition duration-150 ease-in-out hover:text-orange-500 hover:underline"
						href="https://github.com/michaelbonner/redirects-wizard"
					>
						See Redirects Wizard Code on GitHub
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="bg-gray-200">
	<div
		class="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8"
	>
		<h2
			class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10"
		>
			<span class="block">Ready to build something together?</span>
			<span class="block text-blue-600"> Send us a message so we can chat. </span>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow">
				<a
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500"
					href="/contact"
				>
					Get in touch
				</a>
			</div>
		</div>
	</div>
</div>
