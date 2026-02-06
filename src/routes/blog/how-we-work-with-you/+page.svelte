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
			'Learn about our onboarding process, collaboration in Basecamp, and our offline-first approach.',
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
	description="Learn about our onboarding process, collaboration in Basecamp, and our offline-first approach."
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
			At Bootpack Digital, we believe that transparency and clear communication are imporant
			elements to make a successful project. Here is a look at our process and how we collaborate
			with you to maintain alignment and quality throughout our engagement.
		</p>
	</div>
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h2>The Onboarding Process</h2>
		<p>
			Every project begins with a comprehensive onboarding phase. We take the time to deeply
			understand your business goals, target audience, and technical requirements. This initial
			investment ensures that we are building the right solution for your needs, not just writing
			code.
		</p>

		<h2>Collaborating in the Open with Basecamp</h2>
		<p>
			We use <a href="https://basecamp.com/learn" target="_blank" rel="noopener noreferrer"
				>Basecamp</a
			>
			as our central hub for project management. We invite all stakeholders into the project space, creating
			a place where we can all collaborate in the open.
		</p>
		<p>
			By centralized files, discussions, and to-do lists, we eliminate the chaos of scattered email
			threads. You'll have full visibility into what we're working on, upcoming milestones, and any
			blockers we're facing.
		</p>

		<h2>Weekly Check-in Meetings</h2>
		<p>
			We value regular syncs to keep momentum. We typically schedule weekly check-in meetings to
			review progress, demonstrate completed features, and refine the roadmap. This is optional and
			only applies to larger projects or when needed.
		</p>
		<p>
			We record these meetings so that anyone who couldn't attend can catch up later, and so we have
			a record of decisions made during the call. This helps ensure nothing falls through the
			cracks. We'll also send you a summary of the meeting in Basecamp if you don't want to watch
			the recording.
		</p>

		<h2>Offline-First Problem Solving</h2>
		<p>
			We adopt an "offline-first" approach to problem solving. This doesn't just mean our apps work
			offline (though they often can); it means we encourages deep work and thoughtful responses
			over instant messaging.
		</p>
		<p>
			By documenting problems and potential solutions in writing before discussing them, we can
			often resolve complex issues more clearly and faster than through ad-hoc chats. This respect
			for focus time allows our developers to build higher quality software for you.
		</p>
	</div>
</div>

<ContactBanner
	textLine1="Ready to get started?"
	textLine2="Send us a message so we can chat."
	bgColor="bg-gray-50"
/>
