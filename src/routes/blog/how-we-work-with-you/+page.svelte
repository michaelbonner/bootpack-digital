<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import Breadcrumbs from '../../../components/breadcrumbs.svelte';
	import thumbnail from '../../../images/how-we-work-with-you.jpg?enhanced';
	const datePublished = '2026-02-04';

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: 'How we work with you on projects',
			datePublished,
			dateModified: datePublished,
			description:
				'How we start projects, keep decisions in Basecamp, use focused weekly calls, and solve problems in writing before scheduling another meeting.',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': 'https://bootpackdigital.com/blog/how-we-work-with-you'
			},
			author: {
				'@type': 'Organization',
				name: 'Bootpack Digital',
				url: 'https://bootpackdigital.com'
			},
			publisher: {
				'@type': 'Organization',
				name: 'Bootpack Digital',
				logo: {
					'@type': 'ImageObject',
					url: 'https://bootpackdigital.com/images/bootpack-horizontal.png'
				}
			}
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Blog',
					item: 'https://bootpackdigital.com/blog'
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'How we work with you on projects',
					item: 'https://bootpackdigital.com/blog/how-we-work-with-you'
				}
			]
		}
	];
</script>

<Seo
	title="How we work with you on projects | Bootpack Digital"
	description="How we start projects, keep decisions in Basecamp, use focused weekly calls, and solve problems in writing before scheduling another meeting."
	canonical="/blog/how-we-work-with-you"
	ogType="article"
	ogImage="/og-blog-how-we-work-with-you.jpg"
	ogImageAlt="How we work with you on projects"
	{jsonLd}
/>

<div class="px-4 mx-auto sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[{ label: 'Blog', href: '/blog' }, { label: 'How we work with you on projects' }]}
		className="mb-8"
	/>
</div>
<div class="relative pt-4 pb-24">
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h1>
			<span class="block text-base font-semibold tracking-wide uppercase text-blue-600">
				Blog
			</span>
			<span class="block"> How we work with you on projects </span>
		</h1>
		<div class="text-gray-400">
			Published on <time datetime={datePublished}>February 4, 2026</time>
		</div>
		<enhanced:img src={thumbnail} alt="How we work with you on projects" class="mt-8 w-full rounded-lg" />
		<p class="mt-8 text-xl leading-8 text-gray-500">
			Good project communication should make the work easier, not become another job to manage. We
			keep decisions visible, write down the details, and schedule a meeting only when a live
			conversation will help.
		</p>
	</div>
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h2>Getting started</h2>
		<p>
			Before we write code, we spend time understanding what you are trying to accomplish. "Build a
			website" or "make an app" describes the output. We need to understand the business problem
			behind it.
			Who are your users? What does success look like? What has been tried before? Answering those
			questions helps us define the right project before development begins.
		</p>
		<p>
			That first conversation is the same no matter which of our
			<a href="/services">design and development services</a> a project ends up needing, whether
			that is a marketing site, a mobile app, or a search visibility problem.
		</p>

		<h2>Everything lives in Basecamp</h2>
		<p>
			We use <a href="https://basecamp.com/learn" target="_blank" rel="noopener noreferrer"
				>Basecamp</a
			> for project communication. Everyone who needs the context gets access. Basecamp holds the
			files, discussions, to-do lists, decisions, and progress updates in one place.
		</p>
		<p>
			You do not have to dig through email for a decision from three weeks ago. If it affects the
			project, it goes in Basecamp, where anyone can check the current status and the record behind
			it.
		</p>

		<h2>Weekly check-ins (when they make sense)</h2>
		<p>
			For larger projects, we use a weekly call to demonstrate the work, discuss what is next, and
			make decisions together. We keep the agenda focused and the call short.
			For smaller projects, we skip them and handle everything asynchronously in Basecamp.
		</p>
		<p>
			We record every call. If someone can't make it, they can watch it later. We also post a
			summary in Basecamp with the key decisions and action items, so nobody has to scrub through a
			30-minute recording for one decision.
		</p>

		<h2>Writing first, meetings second</h2>
		<p>
			When a tricky problem comes up, we write it down before scheduling a call. We explain the
			problem, lay out the options, and make a recommendation. Everyone gets time to consider the
			tradeoffs instead of making a snap decision in a meeting.
		</p>
		<p>
			Writing first also gives our developers longer blocks of uninterrupted work. When a live
			conversation is necessary, everyone arrives with the same context and time to form an opinion.
		</p>
	</div>
</div>

<div class="px-4 mx-auto mt-16 mb-12 max-w-prose sm:px-6 lg:px-8">
	<h2 class="text-2xl font-bold tracking-tight text-navy-900">Related posts</h2>
	<div class="mt-6">
		<a
			href="/blog/ai-product-iteration"
			class="block p-6 rounded-lg shadow-lg bg-white hover:-translate-y-1 transition-all duration-300"
		>
			<p class="text-xl font-semibold text-gray-900">Rapid product iteration with AI</p>
			<p class="mt-3 text-base text-gray-500">
				How we build working prototypes in isolated sandboxes so clients can test an idea before
				committing to a full build.
			</p>
		</a>
	</div>
</div>

<ContactBanner
	textLine1="Have a project that needs a clear plan?"
	textLine2="Tell us what you're trying to accomplish."
	bgColor="bg-gray-50"
/>
