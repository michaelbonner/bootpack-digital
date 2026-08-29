<script lang="ts">
	import { resolve } from '$app/paths';
	import clsx from 'clsx';

	interface Props {
		textLine1?: string;
		textLine2?: string;
		buttonText?: string;
		bgColor?: string;
		eyebrow?: string;
	}

	let {
		textLine1 = '',
		textLine2 = '',
		buttonText = 'Get in touch',
		bgColor = 'bg-blue-50',
		eyebrow = 'Next step'
	}: Props = $props();
</script>

<section class={clsx('px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24', bgColor)}>
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">{eyebrow}</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl">
					{textLine1}
					<span class="block text-blue-600">{textLine2}</span>
				</h2>
			</div>
			<a
				class="inline-flex justify-self-start items-center py-3 px-5 text-base font-semibold text-white bg-navy-700 rounded-lg transition-colors hover:bg-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
				href={resolve('/contact')}
			>
				{buttonText}
			</a>
		</div>
	</div>
</section>
