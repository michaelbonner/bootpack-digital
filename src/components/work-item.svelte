<script lang="ts">
	export let description: string;
	export let link: string;
	export let poster: string;
	export let title: string;
	export let posterAvif = '';
	export let posterWebp = '';
	export let lazy = false;
</script>

<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
	<a class="bg-blue-100" href={link} rel="noopener noreferrer" target="_blank">
		<picture>
			<source srcset={posterAvif} type="image/avif" />
			<source srcset={posterWebp} type="image/webp" />
			<img alt={title} height="232" loading={lazy ? 'lazy' : 'eager'} src={poster} width="465" />
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
					class="focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-orange-700 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none"
					href={link}
					rel="noopener noreferrer"
					target="_blank"
				>
					View Site
					<svg
						class="ml-1 w-5 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width={2}
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div>
