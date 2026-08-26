<script lang="ts">
	import clsx from 'clsx';
	import TopoHeroBg from './topo-hero-bg.svelte';
	import LinkArrow from './link-arrow.svelte';

	interface Props {
		class?: string;
		description: string;
		eyebrow: string;
		heading: string;
		linkHref: string;
		linkText: string;
	}

	let {
		class: className,
		description,
		eyebrow,
		heading,
		linkHref,
		linkText
	}: Props = $props();
</script>

<section class={clsx('overflow-hidden relative bg-blue-50', className)}>
	<TopoHeroBg />
	<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
			<div>
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					{eyebrow}
				</p>
				<h1
					class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					{heading}
				</h1>
			</div>
			<div class="pb-1">
				<p class="max-w-xl text-lg leading-8 text-navy-600">{description}</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={linkHref}
				>
					{linkText}
					<LinkArrow class="ml-2" />
				</a>
			</div>
		</div>
	</div>
</section>
