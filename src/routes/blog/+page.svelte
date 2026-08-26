<script lang="ts">
	import { resolve } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import ContentListCard from '../../components/content-list-card.svelte';
	import ContentPageHero from '../../components/content-page-hero.svelte';
	import LinkArrow from '../../components/link-arrow.svelte';
	import Seo from '../../components/seo.svelte';
	import { blogPosts, formatBlogPostDate } from '$lib/data/blog-posts';

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

<ContentPageHero
	description="What we are building, how we test product ideas, and the habits that keep client projects moving."
	eyebrow="The Bootpack blog"
	heading="Notes from the work"
	linkHref={resolve('/work')}
	linkText="See the work we've shipped"
/>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<article
			class="overflow-hidden w-full bg-navy-800 group lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]"
		>
			<div class="overflow-hidden min-h-72 bg-blue-100 lg:min-h-[30rem]">
				<enhanced:img
					alt={featuredPost.title}
					class="object-cover w-full h-full min-h-72 transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100 lg:min-h-[30rem]"
					fetchpriority="high"
					loading="eager"
					sizes="(min-width: 1024px) min(736px, calc(57.5vw - 37px)), calc(100vw - 32px)"
					src={featuredPost.thumbnail}
				/>
			</div>

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
						<LinkArrow />
					</a>
					<time class="text-sm font-medium text-navy-200" datetime={featuredPost.publishedAt}>
						{formatBlogPostDate(featuredPost.publishedAt)}
					</time>
				</div>
			</div>
		</article>

		<div class="mt-16 mb-12 md:mt-24 md:mb-16">
			<p class="text-sm font-bold tracking-[0.16em] text-orange-800 uppercase">More posts</p>
			<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
				What we have been building and learning
			</h2>
		</div>

		<div class="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-20 xl:grid-cols-3">
			{#each morePosts as post (post.slug)}
				<ContentListCard
					description={post.description}
					href={getBlogPostUrl(post.slug)}
					image={post.thumbnail}
					linkText="Read the post"
					loading="lazy"
					metadata={{
						kind: 'date',
						dateTime: post.publishedAt,
						text: formatBlogPostDate(post.publishedAt)
					}}
					sizes="(min-width: 1440px) 432px, (min-width: 1280px) calc(33.333vw - 48px), (min-width: 1024px) calc(50vw - 48px), (min-width: 768px) calc(50vw - 40px), calc(100vw - 32px)"
					title={post.title}
				/>
			{/each}
		</div>
	</div>
</section>

<ContactBanner
	textLine1="Working through a problem like these?"
	textLine2="Tell us what you're trying to build."
	bgColor="bg-navy-100"
/>
