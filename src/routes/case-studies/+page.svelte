<script lang="ts">
	import { resolve } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import ContentListCard from '../../components/content-list-card.svelte';
	import ContentPageHero from '../../components/content-page-hero.svelte';
	import Seo from '../../components/seo.svelte';
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

<ContentPageHero
	description="See how we replaced repeated content updates with one shared platform and turned an operations workflow into working software in under six weeks."
	eyebrow="Case studies"
	heading="The full story behind the work, from first call to launch."
	linkHref={resolve('/work')}
	linkText="See more of the work we've shipped"
/>

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
				<ContentListCard
					description={study.description}
					href={resolve(`/case-studies/${study.slug}`)}
					image={study.image}
					linkText="Read the full case study"
					metadata={{ kind: 'label', text: 'Case study' }}
					sizes="(min-width: 1280px) 592px, (min-width: 1024px) calc(50vw - 48px), calc(100vw - 32px)"
					title={study.title}
					titleSize="large"
				/>
			{/each}
		</div>
	</div>
</section>

<ContactBanner
	textLine1="Have a workflow that needs better software?"
	textLine2="Tell us what's slowing your team down."
	bgColor="bg-navy-100"
/>
