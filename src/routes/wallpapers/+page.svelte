<script lang="ts">
	import Seo from '../../components/seo.svelte';

	type Wallpaper = {
		title: string;
		src: string;
		width: number;
	};

	const wallpapers: Wallpaper[] = [
		{
			title: '5k Desktop',
			src: '/images/wallpapers/bootpack-digital-5k.jpg',
			width: 1200
		},
		{
			title: 'Laptop',
			src: '/images/wallpapers/bootpack-digital-macbook-14.jpg',
			width: 1200
		},
		{
			title: 'Tablet',
			src: '/images/wallpapers/bootpack-digital-5-k-i-pad-pro-12-9.jpg',
			width: 1200
		},
		{
			title: 'Phone',
			src: '/images/wallpapers/bootpack-digital-i-phone-14-pro.jpg',
			width: 400
		}
	];
</script>

<Seo
	title="Bootpack Wallpapers | Bootpack Digital"
	description="We have a collection of wallpapers that we've created for our own use. We hope you enjoy them."
	canonical="/wallpapers"
/>

<div class="pt-8 pb-16 bg-white">
	<div class="container grid gap-16 px-4 mx-auto mt-16 max-w-5xl text-gray-700">
		<div>
			<h1 class="text-3xl font-extrabold tracking-tight leading-9 sm:leading-10 text-navy-600">
				Wallpapers
			</h1>
			<p class="mt-4 text-lg leading-7 text-gray-500">
				Here&apos;s a collection of wallpapers that we&apos;ve created for our own use. We figure
				maybe somebody else will enjoy them too.
			</p>
		</div>
		{#each wallpapers as wallpaper}
			<div class="grid gap-4 justify-start">
				<h2 class="text-2xl font-extrabold leading-9 sm:text-3xl sm:leading-10 text-navy-600">
					{wallpaper.title}
				</h2>
				<div class="relative shadow-lg group">
					<a href={wallpaper.src} download>
						<img alt={`${wallpaper.title} Wallpaper`} src={wallpaper.src} width={wallpaper.width} />
					</a>
					<div
						class="absolute right-2 bottom-2 p-2 bg-white rounded-md opacity-100 transition-opacity pointer-events-none md:opacity-0 group-hover:opacity-100"
					>
						<svg
							fill="none"
							height="1em"
							role="presentation"
							stroke-width="0"
							stroke="currentColor"
							viewBox="0 0 24 24"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
							/></svg
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
