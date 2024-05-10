<script lang="ts">
	type Wallpaper = {
		title: string;
		src: string;
		width: number;
	};

	const seoTitle = 'Bootpack Wallpapers | Bootpack Digital';
	const seoDescription =
		"We have a collection of wallpapers that we've created for our own use. We hope you enjoy them.";

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

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />

	<link rel="canonical" href="https://bootpackdigital.com/wallpapers" />
</svelte:head>

<div class="bg-white pt-8 pb-16">
	<div class="container mx-auto mt-16 grid max-w-5xl gap-16 px-4 text-gray-700">
		<div>
			<h1 class="text-3xl font-extrabold leading-9 tracking-tight text-navy-600 sm:leading-10">
				Wallpapers
			</h1>
			<p class="mt-4 text-lg leading-7 text-gray-500">
				Here&apos;s a collection of wallpapers that we&apos;ve created for our own use. We figure
				maybe somebody else will enjoy them too.
			</p>
		</div>
		{#each wallpapers as wallpaper}
			<div class="grid justify-start gap-4">
				<h2 class="text-2xl font-extrabold leading-9 text-navy-600 sm:text-3xl sm:leading-10">
					{wallpaper.title}
				</h2>
				<div class="group relative shadow-lg">
					<a href={wallpaper.src} download>
						<img alt={`${wallpaper.title} Wallpaper`} src={wallpaper.src} width={wallpaper.width} />
					</a>
					<div
						class="pointer-events-none absolute bottom-2 right-2 rounded-md bg-white p-2 opacity-100 transition-opacity group-hover:opacity-100 md:opacity-0"
					>
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="0"
							viewBox="0 0 24 24"
							height="1em"
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
