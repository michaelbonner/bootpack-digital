<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import Breadcrumbs from '../../../components/breadcrumbs.svelte';
	const datePublished = '2026-02-04';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: 'How we work with you on projects',
		datePublished,
		dateModified: datePublished,
		description:
			'A look at how we run projects at Bootpack Digital: onboarding, Basecamp collaboration, weekly check-ins, and our writing-first approach to problem solving.',
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
	};
</script>

<Seo
	title="How we work with you on projects | Bootpack Digital"
	description="A look at how we run projects at Bootpack Digital: onboarding, Basecamp collaboration, weekly check-ins, and our writing-first approach to problem solving."
	canonical="/blog/how-we-work-with-you"
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
		<p class="mt-8 text-xl leading-8 text-gray-500">
			We've tried a lot of ways to run projects over the years. What we've settled on comes down to
			a few things: keep everyone in the loop, write things down, and don't waste people's time.
			Here's how it works in practice.
		</p>
	</div>
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h2>Getting started</h2>
		<p>
			Before we write any code, we spend time understanding what you're actually trying to
			accomplish. Not just "build a website" or "make an app," but the business problem behind it.
			Who are your users? What does success look like? What's been tried before? This upfront
			conversation saves us from building the wrong thing.
		</p>

		<h2>Everything lives in Basecamp</h2>
		<p>
			We use <a href="https://basecamp.com/learn" target="_blank" rel="noopener noreferrer"
				>Basecamp</a
			> for all project communication. Everyone on the project gets access: your team, our team,
			whoever needs to be in the loop. Files, discussions, to-do lists, updates; it's all in one
			place.
		</p>
		<p>
			The big win here is no more digging through email threads to find that one decision from three
			weeks ago. If it happened on the project, it's in Basecamp. You can check in anytime and see
			exactly where things stand.
		</p>

		<h2>Weekly check-ins (when they make sense)</h2>
		<p>
			For bigger projects, we'll hop on a weekly call to show what we've built, talk through what's
			coming up, and make decisions together. We keep these focused and try not to let them run long.
			For smaller projects, we skip them and handle everything asynchronously in Basecamp.
		</p>
		<p>
			We record every call. If someone can't make it, they can watch it later. We also post a
			summary in Basecamp with the key decisions and action items, so nobody has to scrub through a
			30-minute video for the one thing they need.
		</p>

		<h2>Writing first, meetings second</h2>
		<p>
			When a tricky problem comes up, our first instinct isn't to jump on a call. We write it up.
			What's the problem, what are the options, what do we recommend. This gives everyone time to
			think it through instead of making snap decisions in a meeting.
		</p>
		<p>
			It also means our developers get long, uninterrupted stretches to focus on the work. Fewer
			context switches, better code. When we do need to talk something through live, the
			conversation is better because everyone's already read the write-up and had time to form an
			opinion.
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
				How we use AI to build interactive prototypes, deploy them to sandboxes for testing, and
				leverage years of experience to help clients explore new opportunities.
			</p>
		</a>
	</div>
</div>

<ContactBanner
	textLine1="Ready to get started?"
	textLine2="Send us a message so we can chat."
	bgColor="bg-gray-50"
/>
