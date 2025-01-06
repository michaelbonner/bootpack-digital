<script lang="ts">
	import { page } from '$app/stores';
	import { clsx } from 'clsx';
	import BootpackHorizontal from '../images/bootpack-horizontal.svg';
	import MobileNav from './mobile-nav.svelte';

	const mainLinks = [
		{
			label: 'Home',
			url: '/'
		},
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
		},
		{
			label: 'Contact',
			url: '/contact'
		}
	];
</script>

<header class="sticky top-0 z-20 py-2 px-6 mx-auto w-full bg-white shadow-md lg:shadow-none">
	<div class="flex justify-between items-center w-full 2xl:px-4">
		<div class="flex justify-between items-center w-full">
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
						class="py-2 h-14 lg:py-2 lg:h-18"
						height="45"
						width="218"
						src={BootpackHorizontal}
					/></a
				>
			</object>

			<div class="hidden items-center lg:flex">
				{#each mainLinks as link}
					<a
						class={`px-3 text-lg font-semibold text-navy-500 hover:underline hover:decoration-blue-400 ${
							$page.url.pathname === link.url &&
							'underline decoration-blue-200 hover:decoration-blue-400'
						}`}
						href={link.url}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>

		<MobileNav />
	</div>
</header>
