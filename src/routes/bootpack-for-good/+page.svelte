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
			body: 'Every quarter we choose one Salt Lake–area organization from the applications we receive and reach out to get started.'
		},
		{
			title: 'We design and build it with you',
			body: 'We build up to five pages in a clean, brochure-style site that matches your brand — think Home, About, Programs, and Contact.'
		},
		{
			title: 'You own it, forever',
			body: 'We hand over the Git repository and you control where it deploys. Update it later with Claude Code, ChatGPT, or any tool you like.'
		}
	];

	const included = [
		'A brand-matched, mobile-friendly website',
		'Up to five pages (for example: Home, About, Programs, Contact, and one more)',
		'A Git repository that belongs to you',
		'Freedom to host and deploy wherever you want',
		'The ability to make edits later with AI tools like Claude Code or ChatGPT',
		'Built by the Bootpack Digital team — at no cost to you'
	];

	const faqs = [
		{
			q: 'Is it really free?',
			a: "Yes. There's no cost and no catch. It's how we give back to the Salt Lake community we're part of."
		},
		{
			q: 'How often do you choose an organization?',
			a: 'We review applications and select one organization every quarter, so it’s worth applying even if it isn’t your turn yet.'
		},
		{
			q: 'What does "up to five pages" mean?',
			a: 'A focused, brochure-style site — typically a home page plus pages like About, Programs or Services, and Contact. We’ll figure out the right mix together.'
		},
		{
			q: 'Do we have to know how to code to maintain it?',
			a: 'No. Because you own the Git repository, you can make updates yourself using AI tools like Claude Code or ChatGPT, hand it to a volunteer, or hire anyone you like.'
		}
	];
</script>

<Seo
	title="Bootpack for Good | Free websites for Salt Lake organizations doing good"
	description="Each quarter, Bootpack Digital builds a free, brand-matched website for one Salt Lake–area nonprofit or community organization doing good. You own the code and control the deployment. Apply today."
	canonical="/bootpack-for-good"
/>

<div class="relative bg-blue-50">
	<div
		class="absolute inset-0 w-full h-full"
		style="background-image: url('/images/blue-topo.svg'); background-size: 600px 600px; background-repeat: repeat;"
		aria-hidden="true"
	></div>
	<div class="relative py-16 px-4 mx-auto max-w-4xl text-center sm:px-6 lg:py-24 lg:px-8">
		<p class="mb-3 text-sm font-bold tracking-widest text-orange-700 uppercase">Bootpack for Good</p>
		<h1
			class={clsx(
				'font-bold leading-tight text-navy-500 text-[2rem]',
				'md:text-4xl',
				'xl:text-5xl'
			)}
		>
			Free websites for Salt Lake organizations
			<span class="text-blue-500">doing good</span>
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-base leading-normal text-blue-600 md:text-xl">
			Every quarter, we partner with one local nonprofit or community organization to design and
			build a website that matches their brand — completely free. You walk away owning the code and
			controlling where it lives.
		</p>
		<div class="flex justify-center mt-8">
			<a
				class="flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-white bg-orange-700 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-hidden focus:shadow-outline"
				href="#apply"
			>
				Apply for a free website
			</a>
		</div>
	</div>
</div>

<section class="px-4 py-16 bg-white sm:px-6 lg:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="text-2xl font-bold text-center text-navy-600 md:text-3xl">How it works</h2>
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
						<h3 class="text-lg font-bold text-navy-600">{step.title}</h3>
						<p class="mt-1 text-gray-600">{step.body}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-blue-50 sm:px-6 lg:py-20 lg:px-8">
	<div class="grid gap-12 mx-auto max-w-5xl lg:grid-cols-2 lg:items-center">
		<div>
			<h2 class="text-2xl font-bold text-navy-600 md:text-3xl">What you get</h2>
			<ul class="mt-6 space-y-3">
				{#each included as item (item)}
					<li class="flex gap-3 items-start text-gray-700">
						<svg
							class="shrink-0 mt-1 w-5 h-5 text-orange-600"
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
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="p-8 bg-white rounded-xl border border-navy-100 shadow-sm">
			<h3 class="text-xl font-bold text-navy-600">You own it — not us</h3>
			<p class="mt-3 text-gray-600">
				This isn't a rented website you have to keep paying for. We build everything in a Git
				repository that becomes yours, and you control where and how it's deployed.
			</p>
			<p class="mt-3 text-gray-600">
				That means no lock-in. Down the road you can update copy, add pages, or redesign the whole
				thing using modern AI tools like
				<span class="font-semibold text-navy-600">Claude Code</span> or
				<span class="font-semibold text-navy-600">ChatGPT</span> — or hand it off to any developer
				you choose.
			</p>
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 lg:py-20 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-2xl font-bold text-navy-600 md:text-3xl">Who can apply</h2>
		<p class="mt-4 text-gray-600">
			We're looking for organizations based in or serving the greater Salt Lake City area that are
			making their community better — nonprofits, community groups, mutual aid efforts, and
			organizations supporting marginalized communities. If you're doing good and a better website
			would help you do more of it, we'd love to hear from you.
		</p>
	</div>
</section>

<section id="apply" class="px-4 py-16 bg-blue-50 sm:px-6 lg:py-20 lg:px-8 scroll-mt-20">
	<div class="mx-auto max-w-3xl">
		<h2 class="text-2xl font-bold text-center text-navy-600 md:text-3xl">Apply for a free website</h2>
		<p class="mx-auto mt-4 mb-4 max-w-2xl text-center text-gray-600">
			Tell us about your organization. There's no deadline — we review applications and choose a new
			organization every quarter.
		</p>
		<div class="p-6 bg-white rounded-xl border border-navy-100 shadow-sm sm:p-8">
			<FreeWebsiteForm />
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 lg:py-20 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h2 class="text-2xl font-bold text-center text-navy-600 md:text-3xl">Frequently asked questions</h2>
		<dl class="mt-10 space-y-8">
			{#each faqs as faq (faq.q)}
				<div>
					<dt class="text-lg font-bold text-navy-600">{faq.q}</dt>
					<dd class="mt-2 text-gray-600">{faq.a}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
