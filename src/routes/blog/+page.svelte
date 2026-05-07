<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '../../components/seo.svelte';
	import { blogPosts } from '$lib/data/blog-posts';

	const posts = blogPosts;

	// oxlint-disable-next-line @typescript-eslint/no-explicit-any
	const getBlogPostUrl = (slug: string) => resolve(('/blog/' + slug) as any);
</script>

<Seo
	title="Blog | Bootpack Digital"
	description="Bootpack Digital’s latest blog posts on web development, product strategy, and digital experiences for modern applications."
	canonical="/blog"
/>

<div class="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
	<div class="lg:text-center">
		<h2 class="text-base font-semibold tracking-wide uppercase text-blue-600">Blog</h2>
		<h1 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-navy-900 sm:text-4xl">
			Latest thoughts & updates
		</h1>
		<p class="mt-4 mx-auto max-w-2xl text-lg text-gray-500">
			Notes on product strategy, web development, and how we build practical digital experiences
			with our clients.
		</p>
	</div>

	<div class="grid gap-5 mx-auto mt-12 max-w-lg lg:grid-cols-3 lg:max-w-none">
		{#each posts as post (post.slug)}
			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a aria-label={post.title} href={getBlogPostUrl(post.slug)} class="block shrink-0">
					<enhanced:img src={post.thumbnail} alt={post.title} class="h-48 w-full object-cover" />
				</a>
				<div class="flex flex-col justify-between flex-1 p-6 bg-white">
					<div class="flex-1">
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={getBlogPostUrl(post.slug)} class="block mt-2">
							<p class="text-xl font-semibold text-gray-900">{post.title}</p>
							<p class="mt-3 text-base text-gray-500">{post.description}</p>
						</a>
					</div>
					<div class="flex items-center mt-6">
						<div class="flex shrink-0">
							<span class="sr-only">Bootpack Digital</span>
						</div>
						<div>
							<div class="flex space-x-1 text-sm text-gray-500">
								<time datetime={post.date}>{post.date}</time>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
