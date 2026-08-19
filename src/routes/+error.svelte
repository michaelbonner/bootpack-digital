<script module lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import posthog from 'posthog-js';
	import Illustration404 from '../images/404-illustration.svg';
	import { PUBLIC_POSTHOG_ENABLED } from '$env/static/public';
	import { browser } from '$app/environment';

	if (PUBLIC_POSTHOG_ENABLED !== 'false') {
		if (browser) {
			posthog.capture(page.status === 404 ? 'not_found' : 'unknown_error', {
				distinctId: 'unknown',
				properties: {
					message: page.error?.message,
					...page
				}
			});
		}
	}

	const trailLinks = [
		{
			label: 'See our work',
			description: 'Explore websites, apps, and software we have helped bring to life.',
			href: '/work' as const,
			number: '01'
		},
		{
			label: 'Meet Bootpack',
			description: 'Learn about our small, experienced team and how we work.',
			href: '/about' as const,
			number: '02'
		},
		{
			label: 'Start a conversation',
			description: 'Tell us what you are building and where you want to go next.',
			href: '/contact' as const,
			number: '03'
		}
	];
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Page not found' : page.error?.message} | Bootpack Digital</title>
</svelte:head>

<div class="overflow-hidden relative bg-blue-50">
	<div
		class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-300 to-transparent"
	></div>

	<section class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-12 items-center lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.8fr)] lg:gap-16">
			<div class="relative z-10 max-w-2xl">
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					Trail marker {page.status}
				</p>
				<h1
					class="max-w-2xl text-4xl font-extrabold tracking-tight leading-[1.08] text-navy-700 sm:text-5xl lg:text-6xl"
				>
					{page.status === 404 ? "This trail doesn't go any farther." : 'We hit a rough patch.'}
				</h1>
				<p class="mt-6 max-w-xl text-lg leading-8 text-navy-600 sm:text-xl">
					{page.status === 404
						? 'The page may have moved, or the path may be out of date. No worries, there are plenty of good routes from here.'
						: 'Something went wrong while loading this page. Head back to familiar ground and try another route.'}
				</p>

				<div class="flex flex-col gap-3 mt-9 sm:flex-row sm:items-center">
					<a
						class="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-white bg-orange-700 rounded-md shadow-sm transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
						href={resolve('/')}
					>
						Back to the trailhead
					</a>
					<a
						class="inline-flex justify-center items-center px-6 py-3 text-base font-semibold rounded-md border text-navy-700 border-navy-300 transition-colors hover:bg-navy-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
						href={resolve('/work')}
					>
						Explore our work
						<svg aria-hidden="true" class="ml-2 size-4" fill="none" viewBox="0 0 20 20">
							<path
								d="m7 4 6 6-6 6"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</a>
				</div>
			</div>

			<div class="relative mx-auto w-full max-w-lg lg:max-w-none">
				<div
					aria-hidden="true"
					class="absolute top-[12%] right-[2%] size-24 rounded-full border border-blue-300 sm:size-32"
				></div>
				<div
					aria-hidden="true"
					class="absolute top-[17%] right-[7%] size-14 rounded-full border border-blue-300 sm:size-20"
				></div>
				<img
					alt="A folded trail map with a winding route and location marker"
					class="relative mx-auto w-full max-w-md drop-shadow-[0_22px_24px_rgba(0,42,64,0.12)]"
					height="520"
					src={Illustration404}
					width="520"
				/>
			</div>
		</div>
	</section>

	<section class="relative border-t border-blue-200 bg-white">
		<div class="px-4 py-14 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-18">
			<div class="grid gap-8 lg:grid-cols-[0.7fr_2fr] lg:gap-16">
				<div>
					<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Pick a route</p>
					<h2 class="mt-3 text-2xl font-bold tracking-tight text-navy-700 sm:text-3xl">
						Keep moving forward
					</h2>
				</div>

				<nav aria-label="Helpful pages" class="divide-y divide-blue-200 border-y border-blue-200">
					{#each trailLinks as link}
						<a
							class="group grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
							href={resolve(link.href)}
						>
							<span class="text-sm font-bold text-blue-600">{link.number}</span>
							<span>
								<span class="block text-lg font-bold text-navy-700 group-hover:underline">
									{link.label}
								</span>
								<span class="block mt-1 max-w-2xl text-base leading-6 text-gray-600">
									{link.description}
								</span>
							</span>
							<svg
								aria-hidden="true"
								class="hidden size-5 text-orange-700 transition-transform group-hover:translate-x-1 sm:block"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									d="m7 4 6 6-6 6"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>
						</a>
					{/each}
				</nav>
			</div>
		</div>
	</section>
</div>
