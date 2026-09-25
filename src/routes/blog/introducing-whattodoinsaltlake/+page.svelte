<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import Breadcrumbs from '../../../components/breadcrumbs.svelte';

	import homepage from '../../../images/whattodoinsaltlake-screenshots/homepage.png?enhanced';
	import tonight from '../../../images/whattodoinsaltlake-screenshots/tonight.png?enhanced';
	import thisWeekend from '../../../images/whattodoinsaltlake-screenshots/this-weekend.png?enhanced';
	import events from '../../../images/whattodoinsaltlake-screenshots/events.png?enhanced';
	import eventDetail from '../../../images/whattodoinsaltlake-screenshots/event-detail.png?enhanced';
	import suggest from '../../../images/whattodoinsaltlake-screenshots/suggest.png?enhanced';
	import mobileHome from '../../../images/whattodoinsaltlake-screenshots/mobile-home.png?enhanced';
	import { resolve } from '$app/paths';

	const datePublished = '2026-09-24';

	const description =
		'What To Do In Salt Lake is a two-week agenda of concerts, markets, shows, and meetups around Salt Lake, built to answer one question fast.';

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: 'Introducing What To Do In Salt Lake',
			datePublished,
			dateModified: datePublished,
			description,
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': 'https://bootpackdigital.com/blog/introducing-whattodoinsaltlake'
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
					name: 'Introducing What To Do In Salt Lake',
					item: 'https://bootpackdigital.com/blog/introducing-whattodoinsaltlake'
				}
			]
		}
	];
</script>

<Seo
	title="Introducing What To Do In Salt Lake | Bootpack Digital"
	{description}
	canonical="/blog/introducing-whattodoinsaltlake"
	ogType="article"
	ogImage="/og-blog-introducing-whattodoinsaltlake.jpg"
	ogImageAlt="Introducing What To Do In Salt Lake"
	{jsonLd}
/>

<div class="px-4 mx-auto sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[{ label: 'Blog', href: '/blog' }, { label: 'Introducing What To Do In Salt Lake' }]}
		className="mb-8"
	/>
</div>
<div class="relative pt-4 pb-24">
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h1>
			<span class="block text-base font-semibold tracking-wide uppercase text-blue-600">
				Blog
			</span>
			<span class="block"> Introducing What To Do In Salt Lake </span>
		</h1>
		<div class="text-gray-400">
			Published on <time datetime={datePublished}>September 24, 2026</time>
		</div>
		<enhanced:img
			src={homepage}
			alt="What To Do In Salt Lake homepage showing tonight's events in start-time order"
			class="mt-8 w-full rounded-lg"
			width="1280"
			height="800"
			sizes="(min-width: 1024px) 720px, 100vw"
			fetchpriority="high"
		/>
		<p class="mt-8 text-xl leading-8 text-gray-500">
			Salt Lake has plenty going on. The hard part is finding it. Shows are listed on venue
			websites, markets live on Instagram, and half the good stuff turns up in a friend's group
			text the day after it happened. What To Do In Salt Lake puts it all on one calendar, in
			order, so you can decide what to do with your Saturday in about thirty seconds.
		</p>
	</div>

	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<p>
			Visit <a href="https://whattodoinsaltlake.com/">whattodoinsaltlake.com</a> to see what's on this
			week.
		</p>

		<h2>Why we built it</h2>
		<p>
			We live here, and we kept asking each other the same question on Thursday nights. The
			existing answers were either ticketing sites built to sell you something, or tourism pages
			that list the same five attractions every year. We wanted the version a well-informed
			neighbor would give you: what's happening, where, and when, without the noise.
		</p>
		<p>
			So the homepage is just that. The next two weeks, in order, starting with tonight. No
			carousels, no sponsored hero, no sign-up wall.
		</p>

		<h2>Tonight, tomorrow, and this weekend</h2>
		<p>
			Most people visit with one of three questions in mind, so each one has its own page.
			<a href="https://whattodoinsaltlake.com/tonight">Tonight</a> shows only what you can still
			get to. Anything that has already wrapped up drops off on its own.
			<a href="https://whattodoinsaltlake.com/tomorrow">Tomorrow</a> is a quick look ahead, and
			<a href="https://whattodoinsaltlake.com/this-weekend">This weekend</a> groups Friday through
			Sunday by day, then narrows to the days that are left once the weekend is underway.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={tonight}
					alt="What to do in Salt Lake tonight page"
					width="1280"
					height="800"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={thisWeekend}
					alt="What to do in Salt Lake this weekend page"
					width="1280"
					height="800"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
		</div>
		<p>
			Some Tuesdays it's a short list. We would rather show you an honest short list than pad it
			with filler.
		</p>

		<h2>The full calendar, when you want to dig</h2>
		<p>
			For planning further out, the events page holds more than 1,500 upcoming listings. Search by
			title, venue, or description, filter by category or date range, and switch between list,
			agenda, and calendar views. Every venue and organizer has its own page too, so you can see
			everything coming up at Abravanel Hall or The Complex in one place.
		</p>
		<figure class="mx-auto mt-12 max-w-3xl">
			<enhanced:img
				class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
				src={events}
				alt="Searchable list of upcoming events in Salt Lake with category and date filters"
				width="1280"
				height="800"
				sizes="(min-width: 768px) 720px, 100vw"
				loading="lazy"
			/>
		</figure>

		<h2>Event pages that do the basics well</h2>
		<p>
			Each event page answers the questions you actually have: when it starts, where it is, who is
			putting it on, and how to get tickets. From there you can add it to your calendar, share it
			with a friend, or save it for later. If a listing is wrong, there's a link right on the page
			to suggest a change.
		</p>
		<figure class="mx-auto mt-12 max-w-3xl">
			<enhanced:img
				class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
				src={eventDetail}
				alt="Hoodah Fest event page with venue, organizer, price, and share, add to calendar, and save buttons"
				width="1280"
				height="800"
				sizes="(min-width: 768px) 720px, 100vw"
				loading="lazy"
			/>
		</figure>

		<h2>Save events and share lists</h2>
		<p>
			Sign in and the heart button saves an event to your favorites. You can sort favorites into
			named lists, like "Date nights" or "Things the kids will like," and share a list with a
			partner or a group of friends so everyone can add to it. Shared favorites also come with a
			calendar feed, so the plans you save show up in the calendar app you already use.
		</p>

		<h2>How the calendar stays full</h2>
		<p>
			A calendar like this is only useful if it's complete. We pull listings directly from
			around twenty venue and promoter calendars, including The Urban Lounge, The State Room, Red
			Butte Garden, Brighton, Hogle Zoo, and the Salt Lake arts calendar. That automation handles
			the volume. People handle the rest: we review new listings, fix times and venues, and add
			the one-off events that no feed will ever catch.
		</p>
		<p>
			That is also where you come in. If you're running a market, a meetup, or a show, the
			<a href="https://whattodoinsaltlake.com/events/suggest">suggest an event</a> form takes a
			minute. Paste a link and a short summary, and we'll take it from there.
		</p>
		<figure class="mx-auto mt-12 max-w-3xl">
			<enhanced:img
				class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
				src={suggest}
				alt="Suggest an event form"
				width="1280"
				height="800"
				sizes="(min-width: 768px) 720px, 100vw"
				loading="lazy"
			/>
		</figure>

		<h2>Built for your phone first</h2>
		<p>
			Most visits happen in line for coffee or on the couch on a weeknight, so we designed for a
			quick scroll on a phone before anything else. The agenda is dense enough to scan two weeks at
			a glance, and it refreshes on its own when you come back to a tab you left open yesterday.
		</p>
		<figure class="mx-auto mt-12 max-w-xs">
			<enhanced:img
				class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
				src={mobileHome}
				alt="What To Do In Salt Lake homepage on a phone"
				width="390"
				height="844"
				sizes="320px"
				loading="lazy"
			/>
		</figure>

		<h2>See what's on this week</h2>
		<p>
			What To Do In Salt Lake is the site we wanted when we were trying to figure out our own
			weekends. If you live along the Wasatch Front, bookmark it and check back on Thursday. Start
			at <a href="https://whattodoinsaltlake.com/">whattodoinsaltlake.com</a>.
		</p>
		<p>
			We built it the same way we build for clients. If you need a content-heavy site that stays
			current without a lot of manual work, that is what our
			<a href="/services#web-development">web application development</a> work is for.
		</p>
	</div>
</div>

<div class="px-4 mx-auto mt-16 mb-12 max-w-prose sm:px-6 lg:px-8">
	<h2 class="text-2xl font-bold tracking-tight text-navy-900">Related posts</h2>
	<div class="mt-6 grid gap-6 sm:grid-cols-2">
		<a
			href={resolve('/blog/introducing-officelunch')}
			class="block p-6 rounded-lg shadow-lg bg-white hover:-translate-y-1 transition-all duration-300"
		>
			<p class="text-xl font-semibold text-gray-900">Introducing Office Lunch App</p>
			<p class="mt-3 text-base text-gray-500">
				One place to opt in, vote on restaurants, save orders, and automate recurring lunch
				choices.
			</p>
		</a>
		<a
			href={resolve('/blog/introducing-joblisting')}
			class="block p-6 rounded-lg shadow-lg bg-white hover:-translate-y-1 transition-all duration-300"
		>
			<p class="text-xl font-semibold text-gray-900">Introducing JobListing.app</p>
			<p class="mt-3 text-base text-gray-500">
				A branded careers page and a focused way to collect applications, manage candidates, and
				schedule interviews.
			</p>
		</a>
	</div>
</div>

<ContactBanner
	textLine1="Have a product idea like this one?"
	textLine2="Let's talk through what it should do."
	bgColor="bg-gray-50"
/>
