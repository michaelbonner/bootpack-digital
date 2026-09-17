<script lang="ts">
	import Seo from '../../components/seo.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';

	const reviewSites = [
		{
			name: 'Google',
			href: 'https://g.page/bootpack/review',
			description: 'Share your experience on Google.'
		},
		{
			name: 'Yelp',
			href: 'https://www.yelp.com/biz/bootpack-digital-salt-lake-city',
			description: 'Share your experience on Yelp.'
		},
		{
			name: 'Clutch',
			href: 'https://review.clutch.co/review/?provider_id=1652001',
			description: 'Tell other businesses about your project.'
		}
	];
</script>

<Seo
	title="Leave a review | Bootpack Digital"
	description="Share your experience working with Bootpack Digital. Choose a review site to leave your feedback."
	canonical="/review"
/>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="relative isolate overflow-hidden bg-blue-50 py-16 md:py-24 lg:py-28">
	<TopoHeroBg />
	<div class="relative mx-auto max-w-7xl px-4 antialiased sm:px-6 lg:px-8">
		<p class="mb-5 text-base font-semibold text-orange-700">Thanks for working with us</p>
		<h1 class="max-w-[24ch] text-balance text-4xl font-semibold tracking-tight text-navy-700 sm:text-5xl lg:text-6xl">
			How was your experience?
		</h1>
		<p class="mt-6 max-w-[48ch] text-pretty text-lg leading-8 text-navy-600">
			Your feedback helps other people decide who to trust with their next project. Choose a site
			below to share an honest review. Thank you for taking the time.
		</p>
		<ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
			{#each reviewSites as site (site.name)}
				<li>
					<a
						class="block h-full rounded-2xl border border-navy-700/15 bg-white p-6 hover:border-blue-600 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600 sm:p-8"
						href={site.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 class="text-2xl font-semibold tracking-tight text-navy-700">{site.name}</h2>
						<p class="mt-3 text-pretty text-base leading-7 text-gray-600">{site.description}</p>
						<p class="mt-6 font-semibold text-blue-700">
							Leave a review <span aria-hidden="true">&rarr;</span>
							<span class="sr-only">on {site.name} (opens a new tab)</span>
						</p>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
