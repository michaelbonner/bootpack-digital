<script lang="ts">
	import { resolve } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import LinkArrow from '../../components/link-arrow.svelte';
	import Seo from '../../components/seo.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';
	import { services } from '$lib/data/services';

	const facts = [
		{ value: 'Design and development', label: 'What we handle' },
		{ value: 'Web, iOS and Android', label: 'Where we build' },
		{ value: 'Built into every build', label: 'How we treat SEO' }
	];

	const steps = [
		{
			number: '01',
			title: 'Talk it through',
			body: "We start with a call about what you're trying to build and why. No pitch deck, no discovery fee. You leave that call knowing whether we're the right fit."
		},
		{
			number: '02',
			title: 'Scope and estimate',
			body: 'We write down what gets built, what it costs, and roughly how long it takes. You approve the scope before any code gets written.'
		},
		{
			number: '03',
			title: 'Design and build',
			body: 'You see working software early and often. Short cycles, a staging link you can click through anytime, and a direct line to the person writing the code.'
		},
		{
			number: '04',
			title: 'Launch and support',
			body: "We handle the launch, the monitoring, and whatever comes next. Most clients stay on for ongoing work because the person who built it is still the person fixing it."
		}
	];

	const faqs = [
		{
			question: 'Do you handle both design and development?',
			answer:
				"Yes. Most projects we take on are design and development together, which is usually cheaper and faster than splitting them across two vendors. We're also happy to build from designs your team or another agency produced."
		},
		{
			question: 'Can you build for both iOS and Android?',
			answer:
				'Yes. We build cross platform apps that ship to the App Store and Google Play from a single codebase, so a feature gets designed and built once instead of twice.'
		},
		{
			question: 'Is SEO included, or is it a separate service?',
			answer:
				'The technical foundation is included in every site we build: fast page loads, semantic markup, structured data, clean URLs, and correct metadata. Ongoing SEO work such as audits, content strategy, and reporting is a separate engagement.'
		},
		{
			question: 'What does a project cost?',
			answer:
				'It depends on scope. A marketing site is a very different project from a custom application with user accounts and integrations. We give you a written estimate before work starts, and we bill against an approved scope rather than an open ended hourly meter.'
		},
		{
			question: 'Do you work with clients outside Utah?',
			answer:
				'We do. We are based in Salt Lake City and we love working with local businesses, but most of our clients are remote and spread across the United States.'
		},
		{
			question: 'What happens after launch?',
			answer:
				'We stick around. Hosting, monitoring, security updates, and new features are all things we handle on an ongoing basis. You are never handed a codebase and left to figure it out alone.'
		}
	];

	const servicesJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Services',
		description:
			'Design, web development, mobile app development, and SEO services from Bootpack Digital in Salt Lake City, Utah.',
		url: 'https://bootpackdigital.com/services',
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: services.map((service, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				item: {
					'@type': 'Service',
					name: service.title,
					description: service.summary,
					url: `https://bootpackdigital.com/services#${service.id}`,
					areaServed: 'United States',
					provider: { '@id': 'https://bootpackdigital.com/#organization' }
				}
			}))
		}
	};

	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
</script>

<Seo
	title="Design, Development, and SEO Services | Bootpack Digital"
	description="Design and development for web and mobile applications, plus SEO built into every project. A Salt Lake City studio shipping websites, apps, and custom software."
	canonical="/services"
	jsonLd={[servicesJsonLd, faqJsonLd]}
/>

<section class="overflow-hidden relative bg-blue-50">
	<TopoHeroBg />
	<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
			<div>
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">Services</p>
				<h1
					class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					Design and development
					<span class="block text-blue-600">for web and mobile, built to be found</span>
				</h1>
			</div>
			<div class="pb-1">
				<p class="max-w-xl text-lg leading-8 text-navy-600">
					One team for the whole build. We design it, we develop it, and we make sure search engines
					can actually read it.
				</p>
				<div class="flex flex-wrap gap-x-6 gap-y-4 items-center mt-7">
					<a
						class="inline-flex items-center py-3 px-5 text-base font-semibold text-white bg-navy-700 rounded-lg transition-colors hover:bg-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
						href={resolve('/contact')}
					>
						Request a Free Quote
					</a>
					<a
						class="inline-flex items-center font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
						href={resolve('/work')}
					>
						See the work we've shipped
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

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">What we do</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					Four things we do well
				</h2>
			</div>
			<p class="max-w-md text-base leading-7 text-gray-600 md:text-right">
				Take one of them or take all four. Most projects end up using more than one, and they work
				better together than apart.
			</p>
		</div>

		<div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
			{#each services as service (service.id)}
				<article
					class="flex flex-col p-7 bg-blue-50 rounded-2xl border border-blue-200 scroll-mt-24 sm:p-9"
					id={service.id}
				>
					<div class="flex gap-4 items-center">
						<span
							class="inline-flex justify-center items-center bg-white rounded-xl border border-blue-200 size-12 shrink-0"
						>
							<svg
								aria-hidden="true"
								class="size-6 text-blue-600"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d={service.path} />
							</svg>
						</span>
						<p class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">
							{service.eyebrow}
						</p>
					</div>

					<h3 class="mt-5 text-2xl font-bold tracking-tight text-navy-700">
						{service.title}
					</h3>
					<p class="mt-3 text-base leading-7 text-gray-600">
						{service.summary}
					</p>

					<h4 class="mt-7 text-xs font-bold tracking-[0.16em] text-navy-600 uppercase">
						What you get
					</h4>
					<ul class="grid gap-2 mt-4">
						{#each service.deliverables as deliverable (deliverable)}
							<li class="flex gap-3 items-start text-base leading-7 text-gray-600">
								<svg
									aria-hidden="true"
									class="mt-1.5 text-blue-600 size-4 shrink-0"
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.5"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M5 13l4 4L19 7" />
								</svg>
								{deliverable}
							</li>
						{/each}
					</ul>

					<ul class="flex flex-wrap gap-2 mt-auto pt-8">
						{#each service.tags as tag (tag)}
							<li
								class="py-1.5 px-3 text-sm font-semibold bg-white rounded-full border border-blue-200 text-navy-600"
							>
								{tag}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-navy-800 sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-300 uppercase">How it goes</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					What working with us looks like
				</h2>
			</div>
			<p class="max-w-md text-base leading-7 text-navy-100 md:text-right">
				No account managers, no handoffs to a team you've never met. You work directly with the
				people building your project.
			</p>
		</div>

		<ol class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
			{#each steps as step (step.number)}
				<li class="p-7 rounded-2xl border bg-navy-900/40 border-navy-600">
					<p class="text-3xl font-extrabold tracking-tight text-blue-300">{step.number}</p>
					<h3 class="mt-4 text-xl font-bold tracking-tight text-white">{step.title}</h3>
					<p class="mt-3 text-base leading-7 text-navy-100">{step.body}</p>
				</li>
			{/each}
		</ol>

		<a
			class="inline-flex items-center mt-12 font-semibold text-white underline decoration-blue-300 underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
			href={resolve('/blog/how-we-work-with-you')}
		>
			Read more about how we run projects
			<LinkArrow class="ml-2" />
		</a>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-8 items-start lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Questions</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					The things clients ask first
				</h2>
				<p class="mt-5 text-base leading-7 text-gray-600">
					Still not sure where your project fits? Send us a note and we'll tell you straight whether
					we're the right team for it.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={resolve('/contact')}
				>
					Ask us anything
					<LinkArrow class="ml-2" />
				</a>
			</div>

			<dl class="grid gap-8">
				{#each faqs as faq (faq.question)}
					<div class="pb-8 border-b border-blue-200 last:pb-0 last:border-b-0">
						<dt class="text-xl font-bold tracking-tight text-navy-700">{faq.question}</dt>
						<dd class="mt-3 text-base leading-7 text-gray-600">{faq.answer}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>

<ContactBanner
	textLine1="Know what you need built?"
	textLine2="Let's talk through the scope."
	bgColor="bg-navy-100"
/>
