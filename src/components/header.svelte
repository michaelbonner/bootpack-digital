<script lang="ts">
	import { page } from '$app/stores';
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

<div class="bg-white z-20 w-full mx-auto px-6 py-2 sticky top-0 shadow-md lg:shadow-none">
	<div class="w-full flex items-center justify-between">
		<div class="w-full justify-between flex items-center">
			<a
				class="flex items-center text-blue-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl mr-0 lg:mr-8"
				href="/"
			>
				<img
					alt="Bootpack Digital"
					class="h-20"
					height="90"
					loading="lazy"
					src={BootpackHorizontal}
					width="298"
				/>
			</a>

			<div class="hidden lg:flex items-center">
				{#each mainLinks as link}
					<a
						class={`text-navy-400 hover:underline underline-offset-2 hover:decoration-blue-400 font-semibold text-xl px-4 ${
							$page.url.pathname === link.url &&
							'underline decoration-blue-200 hover:decoration-blue-400'
						}`}
						href={link.url}
					>
						{link.label}
					</a>
				{/each}
				<a
					class="lg:ml-4 flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
					href="/contact"
				>
					Request a Quote
				</a>
			</div>
		</div>

		<MobileNav />
	</div>
</div>
