<script lang="ts">
	export let description: string;
	export let link: string;
	export let poster: string;
	export let title: string;
	export let lazy = false;
	export let linkText = 'View Site';
</script>

<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
	<a class="bg-blue-100" href={link} rel="noopener noreferrer" target="_blank">
		<picture>
			<enhanced:img alt={title} loading={lazy ? 'lazy' : 'eager'} src={poster} />
		</picture>
	</a>
	<div class="flex flex-1 flex-col justify-between bg-white p-6">
		<div class="flex-1">
			<a class="block" href={link} rel="noopener noreferrer" target="_blank">
				<h2 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
					{title}
				</h2>
				<p class="mt-3 text-base leading-6 text-gray-500">
					{description}
				</p>
			</a>
		</div>
		<div class="mt-6 flex items-center">
			<div class="flex-shrink-0">
				<a
					class="flex gap-2 items-center text-blue-600 underline hover:text-blue-700 transition-colors font-medium"
					href={link}
					rel="noopener noreferrer"
					target="_blank"
				>
					<svg
						stroke="currentColor"
						fill="none"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path
							d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
						/></svg
					>
					{linkText}
				</a>
			</div>
		</div>
	</div>
</div>
