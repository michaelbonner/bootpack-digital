<script lang="ts">
	import clsx from 'clsx';
	import FreeWebsiteForm from '../../components/free-website-form.svelte';
	import Seo from '../../components/seo.svelte';

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
			a: 'We review applications and select one organization every quarter, so it's worth applying even if it isn't your turn yet.'
		},
		{
			q: 'How do you decide who gets selected?',
			a: 'We weigh need and impact. This is for nonprofits and community organizations that genuinely can't afford a professionally built website, so we prioritize the groups where a new site will do the most good for the community. It isn't meant for well-funded businesses looking for free work.'
		},
		{
			q: 'What does "up to five pages" mean?',
			a: 'A focused, brochure-style site. Typically that's a home page plus pages like About, Programs or Services, and Contact. We'll figure out the right mix together.'
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

<div class="relative bg-blue-50">
	<div
		class="absolute inset-0 w-full h-full"
		style="background-image: url('/images/blue-topo.svg'); background-size: 600px 600px; background-repeat: repeat;"
		aria-hidden="true"
	></div>
	<div
		class="grid relative gap-12 items-center px-4 py-16 mx-auto max-w-6xl sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8"
	>
		<div>
			<p class="text-sm font-bold tracking-widest text-orange-700 uppercase">Bootpack for Good</p>
			<h1
				class="mt-3 max-w-[18ch] text-balance text-[2rem] font-semibold tracking-tight text-navy-500 md:text-4xl xl:text-5xl"
			>
				Free websites for Salt Lake organizations
				<span class="text-blue-500">doing good</span>
			</h1>
			<p class="mt-6 max-w-xl text-pretty text-base text-blue-700 md:text-lg">
				The work you do deserves a website that helps, not one that holds you back. Each quarter, we
				partner with one local nonprofit or community organization to design and build a brand-matched site, completely free. You walk away owning it outright, with no monthly fees or strings. We're a Salt Lake studio that builds for paying clients, and this is how we give back.
			</p>
			<div class="flex flex-wrap gap-5 items-center mt-8">
				<a
					class="flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-white bg-orange-700 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-hidden focus:shadow-outline"
					href="#apply"
				>
					Apply for a free website
				</a>
				<a
					class="text-base font-semibold text-blue-700 transition-colors hover:text-blue-600"
					href="#how"
				>
					See how it works
				</a>
			</div>
		</div>
		<div class="p-8 bg-white rounded-xl border shadow-sm border-navy-100">
			<p class="text-sm font-bold tracking-widest text-orange-700 uppercase">
				What you walk away with
			</p>
			<ul role="list" class="mt-4 space-y-3">
				{#each included.slice(0, 4) as item (item)}
					<li class="flex gap-3 items-start text-gray-700">
						{@render check('mt-1')}
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<section id="how" class="px-4 py-16 bg-white sm:px-6 lg:py-20 lg:px-8 scroll-mt-20">
	<div class="mx-auto max-w-5xl">
		<h2 class="text-2xl font-semibold tracking-tight text-balance text-center text-navy-600 md:text-3xl">
			How it works
		</h2>
		<div class="grid gap-8 mt-12 sm:grid-cols-2">
			{#each steps as step, i (step.title)}
				<div class="flex gap-4 items-start">
					<div
						class="flex shrink-0 justify-center items-center w-10 h-10 text-lg font-bold text-white bg-blue-600 rounded-full"
						aria-hidden="true"
					>
						{i + 1}
					</div>
					<div>
						<h3 class="text-lg font-semibold text-navy-600">{step.title}</h3>
						<p class="mt-1 text-pretty text-gray-600">{step.body}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-blue-50 sm:px-6 lg:py-20 lg:px-8">
	<div class="grid gap-12 mx-auto max-w-5xl lg:grid-cols-2 lg:items-center">
		<div>
			<h2 class="text-2xl font-semibold tracking-tight text-balance text-navy-600 md:text-3xl">
				What you get
			</h2>
			<ul class="mt-6 space-y-3" role="list">
				{#each included as item (item)}
					<li class="flex gap-3 items-start text-gray-700">
						{@render check('mt-1')}
						<span>{item}</span>
					</li>
				{/each}
			</ul>
			<p class="mt-6">
				<a
					class="text-base font-semibold text-blue-700 transition-colors hover:text-blue-600"
					href="/work"
				>
					See examples of our work →
				</a>
			</p>
		</div>
		<div class="p-8 bg-white rounded-xl border border-navy-100 shadow-sm">
			<h3 class="text-xl font-semibold text-navy-600">You own it, not us</h3>
			<p class="mt-3 text-pretty text-gray-600">
				This isn't a rented website you have to keep paying for. We build everything in a Git
				repository that becomes yours, and you control where and how it's deployed.
			</p>
			<p class="mt-3 text-pretty text-gray-600">
				That means no lock-in. Down the road you can update copy, add pages, or redesign the whole
				thing using modern AI tools like
				<span class="font-semibold text-navy-600">Claude Code</span> or
				<span class="font-semibold text-navy-600">ChatGPT</span>, or hand it off to any developer
				you choose.
			</p>
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 lg:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-2xl font-semibold tracking-tight text-balance text-navy-600 md:text-3xl">
				Who can apply
			</h2>
			<p class="mx-auto mt-4 text-pretty text-gray-600">
				We're looking for nonprofits and community organizations based in or serving the greater Salt
				Lake City area that are making their community better but don't have the budget for a
				professionally built website. We choose each quarter's recipient based on need and the impact a
				new site could have. This is for mission-driven groups doing a lot with a little, not
				well-funded businesses looking for something free.
			</p>
		</div>
		<ul role="list" class="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each orgTypes as type (type)}
				<li class="flex gap-3 items-center p-5 bg-blue-50 rounded-xl border border-navy-100">
					{@render check('')}
					<span class="font-semibold text-navy-600">{type}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section id="apply" class="px-4 py-16 bg-blue-50 sm:px-6 lg:py-20 lg:px-8 scroll-mt-20">
	<div class="mx-auto max-w-3xl">
		<h2 class="text-2xl font-semibold tracking-tight text-balance text-center text-navy-600 md:text-3xl">
			Apply for a free website
		</h2>
		<p class="mx-auto mt-4 mb-4 max-w-2xl text-pretty text-center text-gray-600">
			Tell us about your organization. There's no deadline. We review applications and choose a new
			organization every quarter. If you're not selected right away, your application stays in the running for future quarters.
		</p>
		<div class="p-6 bg-white rounded-xl border border-navy-100 shadow-sm sm:p-8">
			<FreeWebsiteForm />
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 lg:py-20 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="text-2xl font-semibold tracking-tight text-balance text-center text-navy-600 md:text-3xl">
			Frequently asked questions
		</h2>
		<div class="mt-10 rounded-xl border divide-y divide-navy-100 border-navy-100">
			{#each faqs as faq (faq.q)}
				<details class="group">
					<summary
						class="flex gap-4 justify-between items-center px-6 py-5 list-none cursor-pointer [&::-webkit-details-marker]:hidden"
					>
						<span class="text-lg font-semibold text-navy-600">{faq.q}</span>
						<svg
							class="shrink-0 w-5 h-5 transition-transform duration-200 text-navy-400 group-open:rotate-180"
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
					<p class="px-6 pb-5 text-pretty text-gray-600">{faq.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
