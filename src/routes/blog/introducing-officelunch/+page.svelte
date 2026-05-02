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

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: 'Introducing Office Lunch App',
		datePublished,
		dateModified: datePublished,
		description:
			'Office Lunch App is a new Bootpack Digital product that takes the daily back-and-forth out of group lunch ordering with voting, opt-ins, restaurant management, and an API for automation.',
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
	};
</script>

<Seo
	title="Introducing Office Lunch App | Bootpack Digital"
	description="Office Lunch App is a new Bootpack Digital product that takes the daily back-and-forth out of group lunch ordering with voting, opt-ins, restaurant management, and an API for automation."
	canonical="/blog/introducing-officelunch"
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
		<enhanced:img src={homepage} alt="Office Lunch App homepage" class="mt-8 w-full rounded-lg" />
		<p class="mt-8 text-xl leading-8 text-gray-500">
			Group lunch ordering is the kind of small, daily problem that quietly eats hours every week.
			Someone has to ask who's in, chase replies, juggle a menu link in a chat thread, collect
			orders, and remember who paid. Office Lunch App is our take on a tool that makes that whole
			rhythm feel effortless, even when you're coordinating across multiple teams.
		</p>
	</div>

	<div class="px-4 mx-auto mt-12 prose prose-lg text-gray-500 prose-blue">
		<p>
			Visit <a href="https://officelunch.app/">officelunch.app</a> to see it in action.
		</p>

		<h2>Why we built it</h2>
		<p>
			We're a distributed team that still loves a good shared lunch when people are in the office.
			What kept tripping us up wasn't the food, it was the coordination: opt-ins lost in chat,
			restaurant links pasted in twice, and the same handful of people always doing the wheel of
			"who's ordering today?" Office Lunch App turns that into a calm, predictable flow. Admins set
			up restaurants and rules once, and everyone else just opts in, votes, and saves their
			favorite orders.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={dashboard}
					alt="Office Lunch App user dashboard"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={pricing}
					alt="Office Lunch App pricing page"
				/>
			</figure>
		</div>

		<h2>Voting that actually picks a winner</h2>
		<p>
			Most lunch decisions are not really decisions, they're long pauses in a chat. Office Lunch App
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
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={votingResults}
					alt="Admin voting results and winner selection"
				/>
			</figure>
		</div>
		<p>
			Past winners are tracked too, so the same place doesn't sneak onto the list four weeks in a
			row.
		</p>

		<h2>Restaurants and saved orders, in one place</h2>
		<p>
			Each organization gets a restaurant list with menu links, budget tiers, and a one-click "Make
			Order" button. Employees can save their usual order at each restaurant so they're not
			retyping a sandwich name three times a week. Anyone can suggest a new spot, and admins
			review requests on a dedicated screen instead of digging through messages.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={restaurants}
					alt="Restaurant management list"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={restaurantRequests}
					alt="Restaurant requests review screen"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={orderPreferences}
					alt="Saved order preferences across restaurants"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={orderManagement}
					alt="Admin order management for the day's restaurant"
				/>
			</figure>
		</div>
		<p>
			On lunch day, whoever is placing the order pulls up the order management view, sees who opted
			in with their saved choice, and works through a single consolidated list instead of stitching
			DMs together.
		</p>

		<h2>Built for multiple teams and orgs</h2>
		<p>
			Office Lunch App is multi-tenant from the ground up. If you run more than one office, agency
			client, or team, you can manage them as separate organizations, each with its own
			restaurants, users, and settings, but with shared admin oversight where it makes sense.
		</p>
		<div class="grid gap-x-5 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none">
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={organizations}
					alt="Manage multiple organizations"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={users}
					alt="Manage team members and roles"
				/>
			</figure>
			<figure>
				<enhanced:img
					class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
					src={settings}
					alt="Organization settings"
				/>
			</figure>
		</div>
		<p>
			Roles, opt-in defaults, and per-org preferences all live in settings, so each team can run
			lunch the way they actually want to.
		</p>

		<h2>Tokenized API access for automation</h2>
		<p>
			One thing we wanted from day one was the ability to automate opt-ins. If you're always in on
			Tuesdays, or you want a Slack workflow to flip you in for Friday, Office Lunch App has
			tokenized API access for exactly that. Generate a token, hit the endpoint, and your status
			updates without anyone touching the UI.
		</p>
		<figure class="mx-auto mt-12 max-w-3xl">
			<enhanced:img
				class="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
				src={apiTokens}
				alt="API tokens for automation"
			/>
		</figure>

		<h2>A CLI for the terminal-inclined</h2>
		<p>
			On top of the API, we ship an official command-line tool, <code>olm</code>, published on npm
			as
			<a href="https://www.npmjs.com/package/@office-lunch/cli"><code>@office-lunch/cli</code></a>.
			It's the fastest way to opt in, place an order, or run admin tasks without leaving your
			terminal, and it slots cleanly into shell aliases, cron jobs, and CI workflows.
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
			Because everything runs through the same tokenized API, the CLI is also a clean building
			block for automation. A short script in a cron job can opt your team in every Tuesday, or a
			GitHub Action can post the day's selection to Slack. Either way, no one has to babysit the
			UI.
		</p>

		<h2>Less back-and-forth, more lunch</h2>
		<p>
			Office Lunch App is the tool we wanted ourselves: opinionated enough to remove the busywork,
			flexible enough to fit how different teams already eat together. If your office lunch
			coordination feels heavier than it should, give it a try at
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
				A Bootpack Digital product for branded job pages, applications, and managing candidates
				without a bloated ATS.
			</p>
		</a>
		<a
			href="{resolve('/blog/introducing-easy-customer-feedback')}"
			class="block p-6 rounded-lg shadow-lg bg-white hover:-translate-y-1 transition-all duration-300"
		>
			<p class="text-xl font-semibold text-gray-900">Introducing EasyCustomerFeedback</p>
			<p class="mt-3 text-base text-gray-500">
				A simple way to collect, organize, and act on feedback from your customers.
			</p>
		</a>
	</div>
</div>

<ContactBanner
	textLine1="Have a product idea like this one?"
	textLine2="Let's talk through what it should do."
	bgColor="bg-gray-50"
/>
