<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '../../components/seo.svelte';

	const posts = [
		{
			title: 'Rapid product iteration with AI',
			slug: 'ai-product-iteration',
			description:
				'How we use AI to build interactive prototypes, deploy them to sandboxes for testing, and leverage years of experience to help clients explore new opportunities.',
			date: 'February 6, 2026'
		},
		{
			title: 'How we work with you on projects',
			slug: 'how-we-work-with-you',
			description:
				'Learn about our onboarding process, how we collaborate in Basecamp, and our offline-first approach to problem solving.',
			date: 'February 5, 2026'
		}
	];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getBlogPostUrl = (slug: string) => resolve(('/blog/' + slug) as any);
</script>

<Seo
	title="Blog | Bootpack Digital"
	description="Insights and updates from Bootpack Digital."
	canonical="/blog"
/>

<div class="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
	<div class="lg:text-center">
		<h2 class="text-base font-semibold tracking-wide uppercase text-blue-600">Blog</h2>
		<p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-navy-900 sm:text-4xl">
			Latest thoughts & updates
		</p>
	</div>

	<div class="grid gap-5 mx-auto mt-12 max-w-lg lg:grid-cols-3 lg:max-w-none">
		{#each posts as post}
			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<div class="flex flex-col justify-between flex-1 p-6 bg-white">
					<div class="flex-1">
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
