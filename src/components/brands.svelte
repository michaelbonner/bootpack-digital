<script lang="ts">
	import { base } from '$app/paths';
	import CocaCola from '../images/clients/coca-cola-classic-gray.svg';
	import DominionEnergy from '../images/clients/dominion-energy-gray.svg';
	import EdgeHomes from '../images/clients/edge-homes-gray.svg';
	import IntermountainHealthcare from '../images/clients/intermountain-healthcare-gray.svg';
	import Ogio from '../images/clients/ogio-gray.svg';
	import PACS from '../images/clients/pacs-gray.svg';
	import BrandImage from './brand-image.svelte';
</script>

<div class="py-4 bg-linear-to-r from-blue-100 via-blue-50 to-blue-100 lg:py-24">
	<div class="py-12 px-4 mx-auto max-w-(--breakpoint-xl) sm:px-6 lg:py-24 lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
			<div class="prose lg:prose-lg">
				<h2 class="text-navy-600">Brands we have worked with</h2>
				<p>We have worked with companies from all different industries on all sizes of projects.</p>
				<p>
					<a class="text-blue-500 underline" href={`${base}/work`}>See some of our work</a>
				</p>
			</div>
			<div class="grid grid-cols-2 gap-x-0.5 gap-y-4 items-center mt-8 md:grid-cols-3 lg:mt-0">
				<BrandImage height={126} logo={CocaCola} title="Coca-Cola logo" width={300} />
				<BrandImage height={43} logo={PACS} title="PACS logo" width={165} />
				<BrandImage height={65} logo={EdgeHomes} title="EDGEhomes logo" width={300} />
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
