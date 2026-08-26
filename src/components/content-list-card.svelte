<script lang="ts">
	import clsx from 'clsx';
	import type { Picture } from 'vite-imagetools';
	import LinkArrow from './link-arrow.svelte';

	type Metadata =
		| { kind: 'label'; text: string }
		| { kind: 'date'; dateTime: string; text: string };

	interface Props {
		class?: string;
		description: string;
		href: string;
		image: Picture;
		linkText: string;
		loading?: 'eager' | 'lazy';
		metadata: Metadata;
		sizes: string;
		title: string;
		titleSize?: 'default' | 'large';
	}

	let {
		class: className,
		description,
		href,
		image,
		linkText,
		loading,
		metadata,
		sizes,
		title,
		titleSize = 'default'
	}: Props = $props();
</script>

<article class={clsx('pt-5 border-t border-blue-200 group', className)}>
	<a class="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600" {href}>
		<div class="overflow-hidden bg-blue-100 rounded-md">
			<enhanced:img
				alt={title}
				class="object-cover w-full transition-transform duration-500 ease-out aspect-[16/10] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				{loading}
				{sizes}
				src={image}
			/>
		</div>

		<div class="pt-6 pb-4">
			<p class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">
				{#if metadata.kind === 'date'}
					<time datetime={metadata.dateTime}>{metadata.text}</time>
				{:else}
					{metadata.text}
				{/if}
			</p>
			<h3
				class={clsx(
					'mt-3 text-2xl font-bold tracking-tight leading-tight text-navy-800 hover:underline',
					titleSize === 'large' && 'sm:text-3xl'
				)}
			>
				{title}
			</h3>
			<p class="mt-4 text-base leading-7 text-gray-600">{description}</p>
			<span
				class="inline-flex gap-2 items-center mt-7 font-semibold text-blue-700 underline decoration-1 decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-800"
			>
				{linkText}
				<LinkArrow />
			</span>
		</div>
	</a>
</article>
