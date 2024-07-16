<script lang="ts">
	import { page } from '$app/stores';
	import { clsx } from 'clsx';
	import BootpackHorizontal from '../images/bootpack-horizontal.svg';
	import MobileNav from './mobile-nav.svelte';

	const mainLinks = [
		{
			label: 'Work',
			url: '/work'
		},
		{
			label: 'About',
			url: '/about'
		},
		{
			label: 'Open Source',
			url: '/open-source'
		}
	];
</script>

<header class="sticky top-0 z-20 mx-auto w-full bg-white px-6 py-2 shadow-md lg:shadow-none">
	<div class="flex w-full items-center justify-between 2xl:px-4">
		<div class="flex w-full items-center justify-between">
			<object
				class={clsx('cursor-pointer h-16 -ml-4', 'lg:h-[80px] lg:py-0 lg:-my-2 lg:-ml-4')}
				data="/images/bootpack-horizontal-animated.svg"
				title="Bootpack Digital logo"
				type="image/svg+xml"
			>
				<a
					class={clsx('block -my-2', 'lg:mt-2 lg:mx-4')}
					href="/"
					title="Bootpack Digital home page"
				>
					<img
						alt="Bootpack Digital"
						class="lg:h-18 h-14 py-2 lg:py-2"
						height="45"
						width="218"
						src={BootpackHorizontal}
					/></a
				>
			</object>

			<div class="hidden items-center lg:flex">
				{#each mainLinks as link}
					<a
						class={`px-4 text-xl font-semibold text-navy-500 hover:underline hover:decoration-blue-400 ${
							$page.url.pathname === link.url &&
							'underline decoration-blue-200 hover:decoration-blue-400'
						}`}
						href={link.url}
					>
						{link.label}
					</a>
				{/each}
				<a
					class="focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-orange-700 px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none lg:ml-4"
					href="/contact"
				>
					Request a Quote
				</a>
			</div>
		</div>

		<MobileNav />
	</div>
</header>
