<script lang="ts">
	import { resolve } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';
	import { caseStudies } from '$lib/data/case-studies';
</script>

<Seo
	title="Case Studies | Bootpack Digital"
	description="See how we built a multi-site education platform for the National Energy Foundation and launched Wasatch Fabrication's custom operations software in under six weeks."
	canonical="/case-studies"
	ogImage="/og-case-studies.jpg"
	ogImageAlt="Bootpack Digital case studies"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		headline: 'Case Studies',
		description:
			"See how we built a multi-site education platform for the National Energy Foundation and launched Wasatch Fabrication's custom operations software in under six weeks.",
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: caseStudies.map((study, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				url: `https://bootpackdigital.com/case-studies/${study.slug}`
			}))
		}
	}}
/>

<section class="overflow-hidden relative bg-blue-50">
	<TopoHeroBg />
	<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
			<div>
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					Case studies
				</p>
				<h1
					class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					The full story behind the work, from first call to launch.
				</h1>
			</div>
			<div class="pb-1">
				<p class="max-w-xl text-lg leading-8 text-navy-600">
					See how we replaced repeated content updates with one shared platform and turned an
					operations workflow into working software in under six weeks.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={resolve('/work')}
				>
					See more of the work we've shipped
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

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Selected builds</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					Problems worth solving, start to finish
				</h2>
			</div>
			<p class="max-w-md text-base leading-7 text-gray-600 md:text-right">
				What the client needed, what we built, and what changed once it shipped.
			</p>
		</div>

		<div class="grid gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-20">
			{#each caseStudies as study (study.slug)}
				<article class="pt-5 border-t border-blue-200 group">
					<a
						aria-label={study.title}
						class="block overflow-hidden bg-blue-100 rounded-md"
						href={resolve(`/case-studies/${study.slug}`)}
					>
						<enhanced:img
							alt={study.title}
							class="object-cover w-full transition-transform duration-500 ease-out aspect-[16/10] group-hover:scale-[1.025]"
							sizes="(min-width: 1280px) 592px, (min-width: 1024px) calc(50vw - 48px), calc(100vw - 32px)"
							src={study.image}
						/>
					</a>

					<div class="pt-6 pb-4">
						<p class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">Case study</p>
						<a class="block" href={resolve(`/case-studies/${study.slug}`)}>
							<h3
								class="mt-3 text-2xl font-bold tracking-tight leading-tight text-navy-800 hover:underline sm:text-3xl"
							>
								{study.title}
							</h3>
							<p class="mt-4 text-base leading-7 text-gray-600">{study.description}</p>
						</a>
						<a
							class="inline-flex gap-2 items-center mt-7 font-semibold text-blue-700 underline decoration-1 decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-500"
							href={resolve(`/case-studies/${study.slug}`)}
						>
							Read the full case study
							<svg aria-hidden="true" class="size-4" fill="none" viewBox="0 0 20 20">
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
				</article>
			{/each}
		</div>
	</div>
</section>

<ContactBanner
	textLine1="Have a workflow that needs better software?"
	textLine2="Tell us what's slowing your team down."
	bgColor="bg-navy-100"
/>
