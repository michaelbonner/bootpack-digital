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

<div class="sticky top-0 z-20 mx-auto w-full bg-white px-6 py-2 shadow-md lg:shadow-none">
	<div class="flex w-full items-center justify-between">
		<div class="flex w-full items-center justify-between">
			<a
				class="mr-auto flex items-center text-2xl font-bold text-blue-400 no-underline hover:no-underline lg:mr-8 lg:text-4xl"
				href="/"
				title="Bootpack Digital home page"
			>
				<img
					alt="Bootpack Digital"
					class="lg:h-18 h-14 py-2 lg:py-2"
					height="45"
					width="218"
					src={BootpackHorizontal}
				/>
			</a>

			<div class="hidden items-center lg:flex">
				{#each mainLinks as link}
					<a
						class={`text-navy-500 hover:underline hover:decoration-blue-400 font-semibold text-xl px-4 ${
							$page.url.pathname === link.url &&
							'underline decoration-blue-200 hover:decoration-blue-400'
						}`}
						href={link.url}
					>
						{link.label}
					</a>
				{/each}
				<a
					class="focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-500 focus:outline-none lg:ml-4"
					href="/contact"
				>
					Request a Quote
				</a>
			</div>
		</div>

		<MobileNav />
	</div>
</div>
