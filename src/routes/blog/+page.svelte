<script lang="ts">
	import { resolve } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';
	import { blogPosts } from '$lib/data/blog-posts';

	const [featuredPost, ...morePosts] = blogPosts;

	// oxlint-disable-next-line @typescript-eslint/no-explicit-any
	const getBlogPostUrl = (slug: string) => resolve(('/blog/' + slug) as any);
</script>

<Seo
	title="Blog | Bootpack Digital"
	description="Practical notes from Bootpack Digital on building products, testing ideas, and running client projects."
	canonical="/blog"
	ogImage="/og-blog.jpg"
	ogImageAlt="The Bootpack Blog"
/>

<section class="overflow-hidden relative bg-blue-50">
	<TopoHeroBg />
	<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
			<div>
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					The Bootpack blog
				</p>
				<h1
					class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					Notes from the work
				</h1>
			</div>
			<div class="pb-1">
				<p class="max-w-xl text-lg leading-8 text-navy-600">
					What we are building, how we test product ideas, and the habits that keep client projects
					moving.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={resolve('/work')}
				>
					See the work we've shipped
					<svg aria-hidden="true" class="ml-2 size-4" fill="none" viewBox="0 0 20 20">
						<path
							d="m7 4 6 6-6 6"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<article
			class="overflow-hidden w-full bg-navy-800 group lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]"
		>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a
				aria-label={featuredPost.title}
				class="block overflow-hidden min-h-72 bg-blue-100 lg:min-h-[30rem]"
				href={getBlogPostUrl(featuredPost.slug)}
			>
				<enhanced:img
					alt={featuredPost.title}
					class="object-cover w-full h-full min-h-72 transition-transform duration-500 ease-out group-hover:scale-[1.025] lg:min-h-[30rem]"
					fetchpriority="high"
					loading="eager"
					sizes="(min-width: 1024px) min(736px, calc(57.5vw - 37px)), calc(100vw - 32px)"
					src={featuredPost.thumbnail}
				/>
			</a>

			<div class="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
				<div>
					<p class="text-xs font-bold tracking-[0.16em] text-orange-300 uppercase">Latest post</p>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class="block" href={getBlogPostUrl(featuredPost.slug)}>
						<h2
							class="mt-3 text-3xl font-bold tracking-tight leading-tight text-white hover:underline sm:text-4xl"
						>
							{featuredPost.title}
						</h2>
						<p class="mt-4 text-base leading-7 text-navy-100">
							{featuredPost.description}
						</p>
					</a>
				</div>

				<div class="flex flex-wrap gap-x-6 gap-y-3 items-center mt-7">
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a
						class="inline-flex gap-2 items-center font-semibold text-white underline decoration-1 decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-200"
						href={getBlogPostUrl(featuredPost.slug)}
					>
						Read the post
						<svg aria-hidden="true" class="size-4" fill="none" viewBox="0 0 20 20">
							<path
								d="m7 4 6 6-6 6"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</a>
					<time class="text-sm font-medium text-navy-200" datetime={featuredPost.isoDate}>
						{featuredPost.date}
					</time>
				</div>
			</div>
		</article>

		<div class="mt-16 mb-12 md:mt-24 md:mb-16">
			<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">More posts</p>
			<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
				What we have been building and learning
			</h2>
		</div>

		<div class="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-20 xl:grid-cols-3">
			{#each morePosts as post (post.slug)}
				<article class="pt-5 border-t border-blue-200 group">
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a
						aria-label={post.title}
						class="block overflow-hidden bg-blue-100 rounded-md"
						href={getBlogPostUrl(post.slug)}
					>
						<enhanced:img
							alt={post.title}
							class="object-cover w-full transition-transform duration-500 ease-out aspect-[16/10] group-hover:scale-[1.025]"
							loading="lazy"
							sizes="(min-width: 1440px) 432px, (min-width: 1280px) calc(33.333vw - 48px), (min-width: 1024px) calc(50vw - 48px), (min-width: 768px) calc(50vw - 40px), calc(100vw - 32px)"
							src={post.thumbnail}
						/>
					</a>

					<div class="pt-6 pb-4">
						<p class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">
							<time datetime={post.isoDate}>{post.date}</time>
						</p>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a class="block" href={getBlogPostUrl(post.slug)}>
							<h3
								class="mt-3 text-2xl font-bold tracking-tight leading-tight text-navy-800 hover:underline"
							>
								{post.title}
							</h3>
							<p class="mt-4 text-base leading-7 text-gray-600">{post.description}</p>
						</a>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a
							class="inline-flex gap-2 items-center mt-7 font-semibold text-blue-700 underline decoration-1 decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-500"
							href={getBlogPostUrl(post.slug)}
						>
							Read the post
							<svg aria-hidden="true" class="size-4" fill="none" viewBox="0 0 20 20">
								<path
									d="m7 4 6 6-6 6"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<ContactBanner
	textLine1="Working through a problem like these?"
	textLine2="Tell us what you're trying to build."
	bgColor="bg-navy-100"
/>
