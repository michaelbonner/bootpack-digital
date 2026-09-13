<script lang="ts">
	import { resolve } from '$app/paths';
	import clsx from 'clsx';
	import FreeWebsiteForm from '../../components/free-website-form.svelte';
	import LinkArrow from '../../components/link-arrow.svelte';
	import Seo from '../../components/seo.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';

	const facts = [
		{ value: 'One website', label: 'Built each quarter' },
		{ value: 'Up to five pages', label: 'Designed and developed' },
		{ value: '$0', label: 'Your total cost' }
	];

	const steps = [
		{
			title: 'Tell us about your work',
			body: "Fill out the short form below. Share your mission, who you serve, and what you're hoping a website can do for you."
		},
		{
			title: 'We pick one organization each quarter',
			body: 'Every quarter we choose one Salt Lake-area organization based on need and the impact a new website could have, then reach out to get started.'
		},
		{
			title: 'We design and build it with you',
			body: 'We build up to five pages in a clean, brochure-style site that matches your brand. Think Home, About, Programs, and Contact.'
		},
		{
			title: 'You own it, forever',
			body: 'We hand over the Git repository and you control where it deploys. Update it later with Claude Code, ChatGPT, or any tool you like.'
		}
	];

	const included = [
		'A brand-matched, mobile-friendly website',
		'Up to five pages (for example: Home, About, Programs, and Contact)',
		'All your website files, yours to keep (a Git repository you own)',
		"Freedom to host and deploy wherever you want (we'll help you get set up)",
		'The ability to make edits later with AI tools like Claude Code or ChatGPT',
		'Built by the Bootpack Digital team, at no cost to you'
	];

	const orgTypes = [
		'Nonprofits (501(c)(3))',
		'Community organizations',
		'Mutual aid & grassroots groups',
		'Faith-based organizations',
		'Schools & education',
		'LGBTQIA+ support organizations'
	];

	const faqs = [
		{
			q: 'Is it really free?',
			a: "Yes. There's no cost and no catch. It's how we give back to the Salt Lake community we're part of."
		},
		{
			q: 'How often do you choose an organization?',
			a: "We review applications and select one organization every quarter, so it's worth applying even if it isn't your turn yet."
		},
		{
			q: 'How do you decide who gets selected?',
			a: "We weigh need and impact. This is for nonprofits and community organizations that genuinely can't afford a professionally built website, so we prioritize the groups where a new site will do the most good for the community. It isn't meant for well-funded businesses looking for free work."
		},
		{
			q: 'What does "up to five pages" mean?',
			a: "A focused, brochure-style site. Typically that's a home page plus pages like About, Programs or Services, and Contact. We'll figure out the right mix together."
		},
		{
			q: 'Do we have to know how to code to maintain it?',
			a: 'No. Because you own the Git repository, you can make updates yourself using AI tools like Claude Code or ChatGPT, hand it to a volunteer, or hire anyone you like.'
		}
	];
</script>

{#snippet check(extra: string)}
	<svg
		class={clsx('shrink-0 w-5 h-5 text-orange-600', extra)}
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			fill-rule="evenodd"
			d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
			clip-rule="evenodd"
		/>
	</svg>
{/snippet}

<Seo
	title="Bootpack for Good | Free websites for Salt Lake organizations doing good"
	description="Each quarter, Bootpack Digital builds a free, brand-matched website for one Salt Lake-area nonprofit or community organization doing good. You own the code and control the deployment. Apply today."
	canonical="/bootpack-for-good"
	ogImage="/og-bootpack-for-good.jpg"
	ogImageAlt="Bootpack for Good: free websites for Salt Lake organizations doing good"
/>

	<section class="overflow-hidden relative bg-blue-50">
		<TopoHeroBg />
		<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
			<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
				<div>
					<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
						Bootpack for Good
					</p>
					<h1
						class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
					>
						Free websites for Salt Lake organizations
						<span class="block text-blue-600">doing good</span>
					</h1>
				</div>
				<div class="pb-1">
					<p class="max-w-xl text-lg leading-8 text-navy-600">
						Each quarter, we design and build a website for one local nonprofit or community
						organization, completely free. You own the finished site outright.
					</p>
					<div class="flex flex-wrap gap-x-6 gap-y-4 items-center mt-7">
						<a
							class="inline-flex items-center py-3 px-5 text-base font-semibold text-white bg-navy-700 rounded-lg transition-colors hover:bg-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
							href="#apply"
						>
							Apply for a free website
						</a>
						<a
							class="inline-flex items-center font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
							href="#how"
						>
							See how it works
							<LinkArrow class="ml-2" />
						</a>
					</div>
				</div>
			</div>

			<dl class="grid overflow-hidden gap-px mt-14 rounded-xl md:grid-cols-3 md:mt-20">
				{#each facts as fact (fact.label)}
					<div class="px-6 py-7 bg-white/80">
						<dt class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">
							{fact.label}
						</dt>
						<dd class="mt-2 text-2xl font-bold tracking-tight text-navy-700 xl:text-3xl">
							{fact.value}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

<section id="how" class="px-4 py-16 bg-navy-800 sm:px-6 md:py-24 lg:px-8 lg:py-28 scroll-mt-20">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-300 uppercase">How it works</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Four steps from application to launch
				</h2>
			</div>
			<p class="max-w-md text-base leading-7 text-navy-100 md:text-right">
				We choose one organization each quarter and work directly with its team to build the right
				site.
			</p>
		</div>
		<ol class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
			{#each steps as step, i (step.title)}
				<li class="p-7 rounded-2xl border bg-navy-900/40 border-navy-600">
					<p class="text-3xl font-extrabold tracking-tight text-blue-300">
						{String(i + 1).padStart(2, '0')}
					</p>
					<h3 class="mt-4 text-xl font-bold tracking-tight text-white">{step.title}</h3>
					<p class="mt-3 text-base leading-7 text-navy-100">{step.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="grid gap-12 mx-auto max-w-7xl lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-20 lg:items-center">
		<div>
			<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">What you get</p>
			<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
				A useful website, built to be yours
			</h2>
			<ul class="grid gap-4 mt-8" role="list">
				{#each included as item (item)}
					<li class="flex gap-3 items-start text-base leading-7 text-gray-600">
						{@render check('mt-1.5')}
						{item}
					</li>
				{/each}
			</ul>
			<a
				class="inline-flex items-center mt-8 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
				href={resolve('/work')}
			>
				See the work we've shipped
				<LinkArrow class="ml-2" />
			</a>
		</div>
		<div class="p-7 bg-blue-50 rounded-2xl border border-blue-200 sm:p-9">
			<svg aria-hidden="true" class="size-9 text-blue-600" fill="none" viewBox="0 0 24 24">
				<path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
				<path d="M8.5 10 12 12l3.5-2M12 12v5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
			</svg>
			<h3 class="mt-5 text-2xl font-bold tracking-tight text-navy-700">You own it, not us</h3>
			<p class="mt-3 text-base leading-7 text-gray-600">
				This isn't a rented website you have to keep paying for. We build everything in a Git
				repository that becomes yours, and you control where and how it's deployed.
			</p>
			<p class="mt-4 text-base leading-7 text-gray-600">
				That means no lock-in. Down the road you can update copy, add pages, or redesign the whole
				thing using tools like
				<span class="font-semibold text-navy-600">Claude Code</span> or
				<span class="font-semibold text-navy-600">ChatGPT</span>, or hand it off to any developer
				you choose.
			</p>
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-blue-50 sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Who can apply</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					Built for groups doing a lot with a little
				</h2>
			</div>
			<p class="max-w-xl text-base leading-7 text-gray-600 md:text-right">
				We work with nonprofits and community organizations based in or serving the greater Salt
				Lake City area. We choose based on need and the impact a new website could have.
			</p>
		</div>
		<ul role="list" class="grid overflow-hidden gap-px rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
			{#each orgTypes as type (type)}
				<li class="flex gap-3 items-center p-6 bg-white">
					{@render check('')}
					<span class="font-semibold text-navy-700">{type}</span>
				</li>
			{/each}
		</ul>
		<p class="mt-6 max-w-3xl text-sm leading-6 text-gray-600">
			This program is for mission-driven groups that cannot afford a professionally built website.
			It is not intended for well-funded businesses looking for free work.
		</p>
	</div>
</section>

<section id="apply" class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28 scroll-mt-20">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-12 lg:grid-cols-[minmax(18rem,0.65fr)_minmax(0,1.35fr)] lg:gap-20">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Apply</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					Tell us about your organization
				</h2>
				<p class="mt-5 max-w-md text-base leading-7 text-gray-600">
					There is no deadline. We review applications each quarter. If we do not select your
					organization right away, your application stays in the running for future quarters.
				</p>
			</div>
			<div class="p-6 bg-blue-50 rounded-2xl border border-blue-200 sm:p-8 lg:p-10">
			<FreeWebsiteForm />
			</div>
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-navy-100 sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-10 items-start lg:grid-cols-[minmax(18rem,0.65fr)_minmax(0,1.35fr)] lg:gap-20">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Questions</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					A few things you may want to know
				</h2>
			</div>
			<div class="overflow-hidden bg-white rounded-2xl border divide-y divide-blue-200 border-blue-200">
			{#each faqs as faq (faq.q)}
				<details class="group">
					<summary
						class="flex gap-4 justify-between items-center px-6 py-5 list-none cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500 sm:px-8 sm:py-6 [&::-webkit-details-marker]:hidden"
					>
						<span class="text-lg font-bold text-navy-700">{faq.q}</span>
						<svg
							class="shrink-0 size-5 text-blue-600 transition-transform duration-200 group-open:rotate-180"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</summary>
					<p class="px-6 pb-6 max-w-3xl text-base leading-7 text-gray-600 sm:px-8">{faq.a}</p>
				</details>
			{/each}
			</div>
		</div>
	</div>
</section>
