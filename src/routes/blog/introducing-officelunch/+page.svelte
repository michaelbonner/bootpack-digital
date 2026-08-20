<script lang="ts">
	import ContactBanner from '../../../components/contact-banner.svelte';
	import Seo from '../../../components/seo.svelte';
	import Breadcrumbs from '../../../components/breadcrumbs.svelte';

	import homepage from '../../../images/officelunch-screenshots/homepage.jpg?enhanced';
	import pricing from '../../../images/officelunch-screenshots/pricing.jpg?enhanced';
	import dashboard from '../../../images/officelunch-screenshots/dashboard.jpg?enhanced';
	import vote from '../../../images/officelunch-screenshots/vote.jpg?enhanced';
	import votingResults from '../../../images/officelunch-screenshots/voting-results.jpg?enhanced';
	import restaurants from '../../../images/officelunch-screenshots/restaurants.jpg?enhanced';
	import restaurantRequests from '../../../images/officelunch-screenshots/restaurant-requests.jpg?enhanced';
	import orderManagement from '../../../images/officelunch-screenshots/order-management.jpg?enhanced';
	import orderPreferences from '../../../images/officelunch-screenshots/order-preferences.jpg?enhanced';
	import users from '../../../images/officelunch-screenshots/users.jpg?enhanced';
	import organizations from '../../../images/officelunch-screenshots/organizations.jpg?enhanced';
	import settings from '../../../images/officelunch-screenshots/settings.jpg?enhanced';
	import apiTokens from '../../../images/officelunch-screenshots/api-tokens.jpg?enhanced';
	import { resolve } from '$app/paths';

	const datePublished = '2026-05-02';

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: 'Introducing Office Lunch App',
			datePublished,
			dateModified: datePublished,
			description:
				'Office Lunch App replaces lunch-day chat threads with one place to opt in, vote on restaurants, save orders, and automate recurring choices.',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': 'https://bootpackdigital.com/blog/introducing-officelunch'
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
					name: 'Introducing Office Lunch App',
					item: 'https://bootpackdigital.com/blog/introducing-officelunch'
				}
			]
		}
	];
</script>

<Seo
	title="Introducing Office Lunch App | Bootpack Digital"
	description="Office Lunch App replaces lunch-day chat threads with one place to opt in, vote on restaurants, save orders, and automate recurring choices."
	canonical="/blog/introducing-officelunch"
	ogType="article"
	ogImage="/og-blog-introducing-officelunch.jpg"
	ogImageAlt="Introducing Office Lunch App"
	{jsonLd}
/>

<div class="px-4 mx-auto sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[{ label: 'Blog', href: '/blog' }, { label: 'Introducing Office Lunch App' }]}
		className="mb-8"
	/>
</div>
<div class="relative pt-4 pb-24">
	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<h1>
			<span class="block text-base font-semibold tracking-wide uppercase text-blue-600">
				Blog
			</span>
			<span class="block"> Introducing Office Lunch App </span>
		</h1>
		<div class="text-gray-400">
			Published on <time datetime={datePublished}>May 2, 2026</time>
		</div>
		<enhanced:img
			src={homepage}
			alt="Office Lunch App homepage"
			class="mt-8 w-full rounded-lg"
			width="1280"
			height="3098"
			sizes="(min-width: 1024px) 720px, 100vw"
			fetchpriority="high"
		/>
		<p class="mt-8 text-xl leading-8 text-gray-500">
			A group lunch can generate a surprising amount of admin. Someone asks who is in, chases
			replies, finds the menu, collects orders, and remembers who paid. Office Lunch App puts that
			work in one place, even when several teams share the account.
		</p>
	</div>

	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<p>
			Visit <a href="https://officelunch.app/">officelunch.app</a> to see it in action.
		</p>

		<h2>Why we built it</h2>
		<p>
			We are a distributed team, but we still share lunch when people are in the office. The food was
			never the problem. Responses disappeared in chat, restaurant links were pasted twice, and the
			same few people kept asking, "Who's ordering today?" Now admins set the restaurants and rules
			once. Everyone else opts in, votes, and saves their usual orders.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={dashboard}
					alt="Office Lunch App user dashboard"
					width="1280"
					height="1486"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={pricing}
					alt="Office Lunch App pricing page"
					width="1280"
					height="2129"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
		</div>

		<h2>Voting that ends with a decision</h2>
		<p>
			Most lunch decisions are long pauses in a chat. Office Lunch App
			gives everyone a quick voting view so the group can pick a restaurant in under a minute.
			Admins see the live results, can break ties, and lock in the winner without a follow-up
			thread.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={vote}
					alt="Cast your vote for lunch"
					width="1280"
					height="800"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={votingResults}
					alt="Admin voting results and winner selection"
					width="1280"
					height="1049"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
		</div>
		<p>
			Past winners stay in the history, so the same place does not sneak onto the list four weeks in a
			row.
		</p>

		<h2>Restaurants and saved orders, in one place</h2>
		<p>
			Each organization has a restaurant list with menu links, budget tiers, and a "Make Order"
			button. Employees can save a usual order for each restaurant instead of retyping it every week.
			Anyone can suggest a new place, and admins review those requests in the app instead of digging
			through messages.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={restaurants}
					alt="Restaurant management list"
					width="1280"
					height="1331"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={restaurantRequests}
					alt="Restaurant requests review screen"
					width="1280"
					height="1204"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={orderPreferences}
					alt="Saved order preferences across restaurants"
					width="1280"
					height="2134"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={orderManagement}
					alt="Admin order management for the day's restaurant"
					width="1280"
					height="2354"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
		</div>
		<p>
			On lunch day, the person placing the order sees everyone who opted in and each saved choice in
			one list. No stitching together direct messages at the last minute.
		</p>

		<h2>Separate settings for each team</h2>
		<p>
			If you manage more than one office or team, each can have its own restaurants, users, and
			settings. Administrators can oversee several organizations without mixing up their lunch plans.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={organizations}
					alt="Manage multiple organizations"
					width="1280"
					height="800"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={users}
					alt="Manage team members and roles"
					width="1280"
					height="1256"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={settings}
					alt="Organization settings"
					width="1280"
					height="1254"
					sizes="(min-width: 1024px) 360px, (min-width: 640px) 512px, 100vw"
					loading="lazy"
				/>
			</figure>
		</div>
		<p>
			Roles, opt-in defaults, and organization preferences live in settings, so each team can set its
			own routine.
		</p>

		<h2>API access for recurring tasks</h2>
		<p>
			We wanted to automate opt-ins from the start. If you always join on Tuesdays, or want a Slack
			workflow to opt you in on Friday, create an API token and update your status without opening
			the app.
		</p>
		<figure class="mx-auto mt-12 max-w-3xl">
			<enhanced:img
				class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
				src={apiTokens}
				alt="API tokens for automation"
				width="1280"
				height="2139"
				sizes="(min-width: 768px) 720px, 100vw"
				loading="lazy"
			/>
		</figure>

		<h2>A command-line tool for regular users and admins</h2>
		<p>
			On top of the API, we ship an official command-line tool, <code>olm</code>, published on npm
			as
			<a href="https://www.npmjs.com/package/@office-lunch/cli"><code>@office-lunch/cli</code></a>.
			It lets you opt in, place an order, or run admin tasks without leaving the terminal. It also
			works in shell aliases, cron jobs, and CI workflows.
		</p>
		<p>Install it globally and configure it once with an API token from your settings:</p>
		<pre><code
				>{`npm install -g @office-lunch/cli
olm configure
olm status`}</code
			></pre>
		<p>From there, the day-to-day commands read the way you'd expect:</p>
		<pre><code
				>{`olm opt-in                                  # opt in for today
olm order set <restaurant-id> "Carnitas bowl, no beans"
olm vote up <restaurant-id>
olm suggest "Shake Shack" "https://shakeshack.com"`}</code
			></pre>
		<p>
			Admins get a parallel set of commands for running the lunch itself, including viewing
			today's opted-in users, approving restaurant suggestions, and locking in the winning
			restaurant:
		</p>
		<pre><code
				>{`olm admin opt-ins --list not-responded
olm admin suggestions approve <id> --notes "Added it!"
olm admin lunch set <restaurant-id>`}</code
			></pre>
		<p>
			The CLI uses the same API as the web app. A cron job can opt your team in every Tuesday, or a
			GitHub Action can post the day's selection to Slack. No one has to open the interface to keep
			the routine moving.
		</p>

		<h2>Less back-and-forth, more lunch</h2>
		<p>
			Office Lunch App is the tool we wanted for our own lunches. It handles the repetitive details
			without prescribing where or how a team eats. If lunch coordination takes more time than lunch,
			give it a try at
			<a href="https://officelunch.app/">officelunch.app</a>.
		</p>
	</div>
</div>

<div class="px-4 mx-auto mt-16 mb-12 max-w-prose sm:px-6 lg:px-8">
	<h2 class="text-2xl font-bold tracking-tight text-navy-900">Related posts</h2>
	<div class="mt-6 grid gap-6 sm:grid-cols-2">
		<a
			href="{resolve('/blog/introducing-joblisting')}"
			class="block p-6 rounded-lg shadow-lg bg-white hover:-translate-y-1 transition-all duration-300"
		>
			<p class="text-xl font-semibold text-gray-900">Introducing JobListing.app</p>
			<p class="mt-3 text-base text-gray-500">
				A branded careers page and a focused way to collect applications, manage candidates, and
				schedule interviews.
			</p>
		</a>
		<a
			href="{resolve('/blog/introducing-easy-customer-feedback')}"
			class="block p-6 rounded-lg shadow-lg bg-white hover:-translate-y-1 transition-all duration-300"
		>
			<p class="text-xl font-semibold text-gray-900">Introducing EasyCustomerFeedback</p>
			<p class="mt-3 text-base text-gray-500">
				An embeddable feedback form, shared inbox, and integrations with the tools your team already
				uses.
			</p>
		</a>
	</div>
</div>

<ContactBanner
	textLine1="Have a product idea like this one?"
	textLine2="Let's talk through what it should do."
	bgColor="bg-gray-50"
/>
