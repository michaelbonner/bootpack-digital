<script lang="ts">
	import { resolve } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';
	import BootpackInSnow from '../../images/bootpack-in-snow.jpg?w=640;960;1280;1920&enhanced';
	import MichaelBonner from '../../images/michael-bonner.jpg?w=340;480;680;960&enhanced';

	const personJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': 'https://bootpackdigital.com/about#michael-bonner',
		name: 'Michael Bonner',
		jobTitle: 'Founder',
		worksFor: { '@id': 'https://bootpackdigital.com/#organization' },
		url: 'https://michaelbonner.dev/',
		sameAs: [
			'https://www.linkedin.com/in/michaelbonner/',
			'https://github.com/michaelbonner',
			'https://www.instagram.com/michael__bonner/',
			'https://www.facebook.com/michaelwbonner',
			'https://michaelbonner.dev/'
		]
	};

	const facts = [
		{ value: '2019', label: 'Bootpack Digital founded' },
		{ value: '2006', label: 'Building for the web since' },
		{ value: 'Salt Lake City', label: 'Where we work' }
	];

	const socials = [
		{
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/in/michaelbonner/',
			stroke: false,
			paths: [
				'M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z'
			]
		},
		{
			title: 'Instagram',
			href: 'https://www.instagram.com/michael__bonner/',
			stroke: false,
			paths: [
				'M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z',
				'M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z'
			]
		},
		{
			title: 'GitHub',
			href: 'https://github.com/michaelbonner',
			stroke: false,
			paths: [
				'M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z'
			]
		},
		{
			title: 'Personal Site',
			href: 'https://michaelbonner.dev/',
			stroke: true,
			paths: [
				'M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42'
			]
		}
	];
</script>

<Seo
	title="About Bootpack Digital, a Utah-based Web and App Development Agency"
	description="Bootpack Digital is a web and app development agency in Salt Lake City, Utah. Founded in 2019, building for the web since 2006."
	canonical="/about"
	ogImage="/og-about.jpg"
	ogImageAlt="About Bootpack Digital"
	jsonLd={personJsonLd}
/>

<section class="overflow-hidden relative bg-blue-50">
	<TopoHeroBg />
	<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
			<div>
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					About Bootpack Digital
				</p>
				<h1
					class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					A small Salt Lake City team that builds software and treats people like people.
				</h1>
			</div>
			<div class="pb-1">
				<p class="max-w-xl text-lg leading-8 text-navy-600">
					We build to fit your business and start contributing on day one. We've shipped websites, mobile apps, and custom software for companies of every size.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={resolve('/work')}
				>
					See the work we've shipped
					<svg aria-hidden="true" class="ml-2 size-4" fill="none" viewBox="0 0 20 20">
						<path
							d="m7 4 6 6-6 6"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</a>
			</div>
		</div>

		<dl class="grid gap-px mt-14 bg-blue-200 border border-blue-200 rounded-xl overflow-hidden sm:grid-cols-3 md:mt-20">
			{#each facts as fact (fact.label)}
				<div class="px-6 py-7 bg-blue-50/90">
					<dt class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">
						{fact.label}
					</dt>
					<dd class="mt-2 text-2xl font-bold tracking-tight text-navy-700 sm:text-3xl">
						{fact.value}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 md:mb-16">
			<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">The team</p>
			<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
				Who you'll actually be working with
			</h2>
		</div>

		<div class="grid gap-10 items-center lg:grid-cols-[24rem_minmax(0,1fr)] lg:gap-16">
			<enhanced:img
				alt="Michael Bonner"
				class="object-cover object-top w-full max-w-sm bg-blue-100 rounded-2xl aspect-24/30"
				loading="lazy"
				sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, calc(100vw - 32px)"
				src={MichaelBonner}
			/>

			<div>
				<p class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">Founder</p>
				<h3 class="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
					Michael Bonner
				</h3>
				<p class="mt-5 text-lg leading-8 text-gray-600">
					Michael founded Bootpack Digital in 2019, building on the freelance business he'd run since
					2006. He started making websites at 16 and has worked at several companies since, including
					five years leading a development team.
				</p>

				<ul class="flex flex-wrap gap-3 mt-8">
					{#each socials as social (social.title)}
						<li>
							<a
								class="inline-flex gap-2 items-center py-2 px-4 text-sm font-semibold text-navy-700 bg-white rounded-full border border-blue-200 transition-colors hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
								data-sveltekit-reload
								href={social.href}
								rel="noopener noreferrer"
								target="_blank"
							>
								<svg
									aria-hidden="true"
									class="size-5"
									fill={social.stroke ? 'none' : 'currentColor'}
									stroke={social.stroke ? 'currentColor' : 'none'}
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width={social.stroke ? 36 : 0}
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									{#each social.paths as d (d)}
										<path {d} />
									{/each}
								</svg>
								{social.title}
								<span class="sr-only"> (opens a new tab)</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-navy-800 sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-8 items-start lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-300 uppercase">Open source</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Great software is built in the open
				</h2>
			</div>
			<div>
				<p class="text-base leading-7 text-navy-100">
					We publish the tools we build for ourselves. A PageSpeed score tracker, a screenshot generator, a bulk redirects builder, and a viewer that shows who has access to which GitHub repos. All of them are free and on GitHub.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-white underline decoration-blue-300 underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
					href={resolve('/open-source')}
				>
					Browse our open source projects
					<svg aria-hidden="true" class="ml-2 size-4" fill="none" viewBox="0 0 20 20">
						<path
							d="m7 4 6 6-6 6"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="px-4 pt-16 pb-12 mx-auto max-w-7xl sm:px-6 md:pt-24 lg:px-8 lg:pt-28">
		<div class="grid gap-8 items-start lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">The name</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					Why the name "Bootpack"?
				</h2>
			</div>
			<div>
				<p class="text-base leading-7 text-gray-600">
					We're from Utah and we ski. Sometimes you have to unclip, shoulder your skis, and hike to
					reach the good snow. The track someone stamped out ahead of you, up a slope too steep to
					skin, is called a boot pack. It saves you from breaking trail yourself. That's the idea
					here. We've already made the mistakes and learned what works, so your project doesn't start
					from scratch.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={resolve('/blog/how-we-work-with-you')}
				>
					See how we run projects
					<svg aria-hidden="true" class="ml-2 size-4" fill="none" viewBox="0 0 20 20">
						<path
							d="m7 4 6 6-6 6"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<enhanced:img
		alt="A line of climbers boot packing up a snow slope in a whiteout"
		class="object-cover object-bottom w-full aspect-2/1 sm:aspect-5/2 lg:aspect-16/5"
		loading="lazy"
		sizes="100vw"
		src={BootpackInSnow}
	/>
</section>

<ContactBanner
	textLine1="Have a project in mind?"
	textLine2="Tell us what you're trying to build."
	bgColor="bg-navy-100"
/>
