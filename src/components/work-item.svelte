<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	interface Props {
		description: string;
		link: string;
		poster: Picture;
		title: string;
		lazy?: boolean;
		linkText?: string;
	}

	let { description, link, poster, title, lazy = false, linkText = 'View Site' }: Props = $props();
</script>

<div
	class="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1 hover:scale-[101%]"
>
	<a class="bg-blue-100" href={link} rel="noopener noreferrer" target="_blank">
		<enhanced:img alt={title} loading={lazy ? 'lazy' : 'eager'} src={poster} />
		<span class="sr-only"> (opens a new tab)</span>
	</a>
	<div class="flex flex-col flex-1 justify-between p-6 bg-white">
		<div class="flex-1">
			<a class="block" href={link} rel="noopener noreferrer" target="_blank">
				<h2 class="mt-2 text-xl font-semibold leading-7 text-gray-900 hover:underline">
					{title}
				</h2>
				<p class="mt-3 text-base leading-6 text-gray-500">
					{description}
				</p>
				<span class="sr-only"> (opens a new tab)</span>
			</a>
		</div>
		<div class="flex items-center mt-6">
			<div class="shrink-0">
				<a
					class="flex gap-2 items-center font-medium text-blue-600 underline transition-colors hover:text-blue-700"
					href={link}
					rel="noopener noreferrer"
					target="_blank"
				>
					<svg
						fill="none"
						height="1em"
						role="presentation"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						stroke="currentColor"
						viewBox="0 0 24 24"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path
							d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
						/></svg
					>
					{linkText}
					<span class="sr-only"> (opens a new tab)</span>
				</a>
			</div>
		</div>
	</div>
</div>
