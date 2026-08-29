<script lang="ts">
	import { resolve } from '$app/paths';
	import CocaCola from '../images/clients/coca-cola-classic-gray.svg';
	import DominionEnergy from '../images/clients/dominion-energy-gray.svg';
	import EdgeHomes from '../images/clients/edge-homes-gray.svg';
	import IntermountainHealthcare from '../images/clients/intermountain-healthcare-gray.svg';
	import Ogio from '../images/clients/ogio-gray.svg';
	import PACS from '../images/clients/pacs-gray.svg';
	import LinkArrow from './link-arrow.svelte';

	const brands = [
		{ title: 'Coca-Cola logo', logo: CocaCola, width: 300, height: 126 },
		{ title: 'PACS logo', logo: PACS, width: 165, height: 43 },
		{ title: 'EDGEhomes logo', logo: EdgeHomes, width: 300, height: 65 },
		{
			title: 'Intermountain Healthcare logo',
			logo: IntermountainHealthcare,
			width: 300,
			height: 63
		},
		{ title: 'Ogio logo', logo: Ogio, width: 300, height: 102 },
		{ title: 'Dominion Energy logo', logo: DominionEnergy, width: 300, height: 150 }
	];
</script>

<section class="px-4 py-16 bg-blue-50 sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-10 items-start lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Clients</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					Brands we have worked with
				</h2>
				<p class="mt-5 text-base leading-7 text-gray-600">
					From global brands like Coca-Cola and Intermountain Healthcare to local startups, we've
					shipped projects of every size and industry, and we'd love to add yours.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={resolve('/work')}
				>
					See some of our work
					<LinkArrow class="ml-2" />
				</a>
			</div>

			<ul class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
				{#each brands as brand (brand.title)}
					<li
						class="flex justify-center items-center px-5 h-24 bg-white rounded-xl border border-blue-200 sm:h-28"
					>
						<img
							alt={brand.title}
							class="object-contain max-w-full max-h-10 sm:max-h-12"
							height={brand.height}
							loading="lazy"
							src={brand.logo}
							width={brand.width}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
