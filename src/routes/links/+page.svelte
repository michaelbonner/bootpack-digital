<script lang="ts">
	import { resolve } from '$app/paths';
	import clsx from 'clsx';
	import type { Picture } from 'vite-imagetools';
	import Seo from '../../components/seo.svelte';
	import SocialIcons from '../../components/social-icons.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';
	// screenshots
	import BookAMeetingTime from '../../images/links/book-a-meeting-time.jpg?w=288;384;640;800&enhanced';
	import EasyCustomerFeedback from '../../images/links/easycustomerfeedback.jpg?w=288;384;640;800&enhanced';
	import GitHub from '../../images/links/github.jpg?w=288;384;640;800&enhanced';
	import JobListing from '../../images/links/joblisting.jpg?w=288;384;640;800&enhanced';
	import MichaelBonner from '../../images/links/michaelbonner.jpg?w=288;384;640;800&enhanced';
	import OfficeLunch from '../../images/links/officelunch.jpg?w=288;384;640;800&enhanced';

	const utm = '?utm_source=bootpackdigital.com/links';

	type LinkGroup = {
		heading: string;
		blurb: string;
		links: {
			name: string;
			screenshot: Picture;
			description: string;
			href: string;
			display: string;
		}[];
	};

	const groups: LinkGroup[] = [
		{
			heading: 'Our products',
			blurb: 'Software we build and run ourselves.',
			links: [
				{
					name: 'JobListing',
					screenshot: JobListing,
					description:
						'Branded job listings, custom application forms, and a hiring dashboard without a bloated ATS.',
					href: `https://joblisting.app/${utm}`,
					display: 'joblisting.app'
				},
				{
					name: 'Book a Meeting Time',
					screenshot: BookAMeetingTime,
					description:
						'One booking link, your real calendar availability, and no back and forth about time zones.',
					href: `https://bookameetingtime.com/${utm}`,
					display: 'bookameetingtime.com'
				},
				{
					name: 'EasyCustomerFeedback',
					screenshot: EasyCustomerFeedback,
					description:
						'Feedback boards and embeddable widgets that route reviews and feature requests into your workflow.',
					href: `https://easycustomerfeedback.com/${utm}`,
					display: 'easycustomerfeedback.com'
				},
				{
					name: 'Office Lunch App',
					screenshot: OfficeLunch,
					description:
						'Opt in, vote on a restaurant, save your usual order, and skip the lunch-day chat thread.',
					href: `https://officelunch.app/${utm}`,
					display: 'officelunch.app'
				}
			]
		},
		{
			heading: 'Michael Bonner',
			blurb: 'The personal side of things.',
			links: [
				{
					name: 'Personal site',
					screenshot: MichaelBonner,
					description:
						"Michael's personal site, where he writes about building things for the web.",
					href: `https://michaelbonner.dev/${utm}`,
					display: 'michaelbonner.dev'
				},
				{
					name: 'GitHub',
					screenshot: GitHub,
					description: 'Open-source projects, experiments, and the code behind a lot of the above.',
					href: 'https://github.com/michaelbonner',
					display: 'github.com/michaelbonner'
				}
			]
		}
	];

	const siteLinks = [
		{ label: 'Our work', href: resolve('/work') },
		{ label: 'Services', href: resolve('/services') },
		{ label: 'Blog', href: resolve('/blog') },
		{ label: 'Contact us', href: resolve('/contact') }
	];
</script>

<Seo
	title="Links | Bootpack Digital"
	description="Every Bootpack Digital product in one place, plus Michael Bonner's personal site."
	canonical="/links"
	ogImageAlt="Links from Bootpack Digital"
/>

<section class="overflow-hidden relative bg-blue-50">
	<TopoHeroBg />
	<div class="relative px-4 pt-14 pb-10 mx-auto max-w-2xl text-center sm:px-6 md:pt-20">
		<h1
			class="text-4xl font-extrabold tracking-tight leading-[1.05] text-navy-700 sm:text-5xl"
		>
			Everything we make, in one place
		</h1>
		<p class="mx-auto mt-5 max-w-xl text-lg leading-8 text-navy-600">
			Our products, our work, and a few places to find us.
		</p>
	</div>
</section>

<div class="px-4 pt-12 pb-20 bg-white sm:px-6 lg:pb-24">
	<div class="grid grid-cols-[minmax(0,1fr)] gap-12 mx-auto max-w-2xl">
		{#each groups as group (group.heading)}
			<section>
				<h2 class="text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					{group.heading}
				</h2>
				<p class="mt-2 text-base leading-7 text-gray-600">{group.blurb}</p>
				<ul class="grid grid-cols-[minmax(0,1fr)] gap-4 mt-6">
					{#each group.links as link (link.href)}
						<li>
							<a
								class={clsx(
									'flex flex-col gap-4 p-5 rounded-xl border border-navy-100 shadow-xs transition group sm:flex-row sm:gap-5 sm:items-start',
									'hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600'
								)}
								href={link.href}
								rel="noopener noreferrer"
							>
								<span
									class="overflow-hidden w-full rounded-md border bg-blue-50 border-navy-100 sm:w-36 sm:shrink-0"
								>
									<enhanced:img
										alt="Screenshot of {link.display}"
										class="object-cover object-top w-full transition-transform duration-500 ease-out aspect-16/10 group-hover:scale-[1.04]"
										loading="lazy"
										sizes="(min-width: 640px) 144px, calc(100vw - 72px)"
										src={link.screenshot}
									/>
								</span>
								<span class="flex-1 min-w-0">
									<span class="flex gap-2 justify-between items-center">
										<span class="min-w-0 text-lg font-bold leading-7 break-words text-navy-700"
											>{link.name}</span>
										<svg
											aria-hidden="true"
											class="shrink-0 text-navy-400 transition-transform size-5 group-hover:translate-x-1 group-hover:text-blue-600"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14m0 0-6-6m6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</span>
									<span class="block mt-1 text-base leading-7 text-gray-600">
										{link.description}
									</span>
									<span class="block mt-2 text-sm font-semibold break-words text-blue-700">
										{link.display}
									</span>
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}

		<section>
			<h2 class="text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
				Around this site
			</h2>
			<ul class="flex flex-wrap gap-3 mt-4">
				{#each siteLinks as link (link.href)}
					<li>
						<a
							class={clsx(
								'inline-block py-2 px-4 text-base font-semibold rounded-full border transition border-navy-200 text-navy-700',
								'hover:bg-navy-100 hover:border-navy-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600'
							)}
							href={link.href}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</section>

		<section class="pt-2 text-center">
			<div class="flex gap-2 justify-center">
				<SocialIcons />
			</div>
		</section>
	</div>
</div>
