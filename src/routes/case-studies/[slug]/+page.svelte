<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import Breadcrumbs from '../../../components/breadcrumbs.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let caseStudy = $derived(data.caseStudy);
</script>

<Seo
	title="{caseStudy.title} | Bootpack Digital"
	description={caseStudy.description}
	canonical="/case-studies/{caseStudy.slug}"
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: caseStudy.title,
		description: caseStudy.description,
		image: `https://bootpackdigital.com/images/case-studies/${caseStudy.slug}.jpg`, // Assuming we set up OG images, or use a default
		author: {
			'@type': 'Organization',
			name: 'Bootpack Digital',
			url: 'https://bootpackdigital.com'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Bootpack Digital',
			logo: {
				'@type': 'ImageObject',
				url: 'https://bootpackdigital.com/images/bootpack-horizontal.png'
			}
		}
	}}
/>

<div class="px-4 mx-auto sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[{ label: 'Case Studies', href: '/case-studies' }, { label: caseStudy.title }]}
		className="mb-8"
	/>
</div>

<div class="py-16 bg-white overflow-hidden lg:py-24">
	<div class="relative px-4 mx-auto max-w-xl sm:px-6 lg:px-8 lg:max-w-7xl">
		<div class="relative">
			<h1
				class="text-3xl font-extrabold leading-8 tracking-tight text-center text-navy-900 sm:text-4xl"
			>
				{caseStudy.title}
			</h1>
			<p class="mt-4 max-w-3xl text-xl text-center text-gray-500 mx-auto">
				{caseStudy.description}
			</p>
		</div>

		<div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
			<div class="relative">
				<h2 class="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
					Project Highlights
				</h2>

				<dl class="mt-10 space-y-10">
					{#each caseStudy.features as feature}
						<div class="relative">
							<dt>
								<div
									class="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
								>
									{#if feature.icon === 'lightning'}
										<svg
											class="w-6 h-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									{:else if feature.icon === 'users'}
										<svg
											class="w-6 h-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
											/>
										</svg>
									{:else}
										<!-- Default Icon checkmark -->
										<svg
											class="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											></path></svg
										>
									{/if}
								</div>
								<p class="ml-16 text-lg font-medium leading-6 text-navy-900">{feature.title}</p>
							</dt>
							<dd class="mt-2 ml-16 text-base text-gray-500">
								{feature.description}
							</dd>
						</div>
					{/each}
				</dl>

				<div class="mt-10">
					<a
						href={caseStudy.link}
						target="_blank"
						rel="noopener noreferrer"
						class="text-base font-medium text-blue-600 hover:text-blue-500"
					>
						Visit {caseStudy.title} <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>

			<div class="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
				<enhanced:img
					class="relative mx-auto rounded-lg shadow-lg lg:max-w-none w-full max-w-lg"
					src={caseStudy.image}
					alt="{caseStudy.title} Screenshot"
				/>
			</div>
		</div>
	</div>
</div>

{#if caseStudy.sections}
	<div class="relative overflow-hidden bg-white py-16">
		<div class="relative px-4 sm:px-6 lg:px-8">
			<div class="prose prose-lg text-gray-500 mx-auto">
				{#each caseStudy.sections as section}
					<h2>
						<span
							class="block text-center text-base font-semibold tracking-wide text-blue-600 uppercase"
						>
							Case Study Detail
						</span>
						<span
							class="mt-2 block text-center text-3xl leading-8 font-extrabold tracking-tight text-navy-900 sm:text-4xl"
						>
							{section.title}
						</span>
					</h2>
					{#each section.content as paragraph}
						<p class="mt-8 text-xl text-gray-500 leading-8">
							{paragraph}
						</p>
					{/each}
					{#if section.image}
						<figure class="my-8">
							<enhanced:img
								class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
								src={section.image}
								alt={section.imageAlt || section.title}
							/>
						</figure>
					{/if}

					{#if section.images && section.images.length > 0}
						<div class="my-12 grid grid-cols-1 gap-8 md:grid-cols-2">
							{#each section.images as img, i}
								<figure class="relative group not-prose">
									<div
										class="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
									>
										<enhanced:img
											class="w-full transform transition-transform duration-700 group-hover:scale-105"
											src={img}
											alt="{section.title} Screenshot {i + 1}"
										/>
									</div>
								</figure>
							{/each}
						</div>
					{/if}
					<div class="my-12"></div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<ContactBanner
	textLine1="Have a project in mind?"
	textLine2="Let's build something great together."
	bgColor="bg-gray-50"
/>
