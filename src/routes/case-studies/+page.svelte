<script lang="ts">
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';
	import { caseStudies } from '$lib/data/case-studies';
	import { resolve } from '$app/paths';
</script>

<Seo
	title="Case Studies | Bootpack Digital"
	description="See how we've helped businesses like Wasatch Fabrication achieve their goals through custom software solutions."
	canonical="/case-studies"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		headline: 'Case Studies',
		description:
			"See how we've helped businesses like Wasatch Fabrication achieve their goals through custom software solutions.",
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

<div class="px-4 pt-16 pb-20 bg-white sm:px-6 lg:px-8 lg:pb-28">
	<div class="mx-auto max-w-7xl">
		<div class="prose lg:prose-lg text-gray-600">
			<h1 class="tracking-tight text-navy-600">Case Studies</h1>
			<p>A deep dive into some of our recent work.</p>
		</div>
		<div class="grid gap-x-5 gap-y-10 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			{#each caseStudies as study}
				<div
					class="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1 hover:scale-[101%]"
				>
					<a
						href={resolve(`/case-studies/${study.slug}`)}
						class="shrink-0 bg-blue-100"
						aria-label={study.title}
					>
						<enhanced:img class="w-full h-48 object-cover" src={study.image} alt={study.title} />
					</a>
					<div class="flex flex-col flex-1 justify-between p-6 bg-white">
						<div class="flex-1">
							<a href={resolve(`/case-studies/${study.slug}`)} class="block">
								<h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
									{study.title}
								</h3>
								<p class="mt-3 text-base leading-6 text-gray-500">
									{study.description}
								</p>
							</a>
						</div>
						<div class="mt-6">
							<a
								href={resolve(`/case-studies/${study.slug}`)}
								class="text-base font-semibold text-blue-600 hover:text-blue-500"
							>
								Read full case study <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<ContactBanner
	textLine1="Ready to get started?"
	textLine2="Send us a message so we can chat."
	bgColor="bg-navy-100"
/>
