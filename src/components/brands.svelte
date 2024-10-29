<script lang="ts">
	import CocaCola from '../images/clients/coca-cola-classic-gray.svg';
	import EdgeHomes from '../images/clients/edge-homes-gray.svg';
	import IntermountainHealthcare from '../images/clients/intermountain-healthcare-gray.svg';
	import Ogio from '../images/clients/ogio-gray.svg';
	import DominionEnergy from '../images/clients/dominion-energy-gray.svg';
	import PACS from '../images/clients/pacs-gray.svg';
	import BrandImage from './brand-image.svelte';
</script>

<div class="py-4 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 lg:py-24">
	<div class="py-12 px-4 mx-auto max-w-screen-xl sm:px-6 lg:py-24 lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
			<div class="lg:mt-8">
				<h2 class="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 text-navy-600">
					Brands we have worked with
				</h2>
				<p class="mt-3 max-w-3xl text-lg leading-7 text-navy-700">
					We have worked with companies from all different industries on all sizes of projects.
				</p>
				<p class="mt-3">
					<a class="text-lg text-blue-500 underline" href="/work">See some of our work</a>
				</p>
			</div>
			<div class="grid grid-cols-2 gap-x-0.5 gap-y-4 items-center mt-8 md:grid-cols-3 lg:mt-0">
				<BrandImage height={126} logo={CocaCola} title="CocaCola logo" width={300} />
				<BrandImage height={43} logo={PACS} title="PACS logo" width={165} />
				<BrandImage height={65} logo={EdgeHomes} title="EDGEHomes logo" width={300} />
				<BrandImage
					height={63}
					logo={IntermountainHealthcare}
					title="Intermountain Healthcare logo"
					width={300}
				/>
				<BrandImage height={102} logo={Ogio} title="Ogio logo" width={300} />
				<BrandImage height={150} logo={DominionEnergy} title="Dominion Energy logo" width={300} />
			</div>
		</div>
	</div>
</div>
