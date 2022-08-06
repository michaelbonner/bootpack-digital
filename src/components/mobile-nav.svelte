<script lang="ts">
	import { navigating, page } from '$app/stores';
	import BootpackDigital from '../images/bootpack-digital.svg';
	import SocialIcons from './social-icons.svelte';

	let mobileNavOpen = false;

	$: if ($navigating) {
		mobileNavOpen = false;
	}
</script>

<button class="block lg:hidden" on:click={() => (mobileNavOpen = !mobileNavOpen)}>
	<svg
		class="w-8 stroke-current text-navy-400"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Menu</title>
		<path
			d="M4 6h16M4 12h16m-7 6h7"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width={2}
		/>
	</svg>
</button>
{#if mobileNavOpen}
	<div
		class={`absolute text-center z-50 top-4 left-4 right-4 bg-white shadow-lg border border-gray-100 py-4 px-6 rounded-md`}
	>
		<button
			class="absolute right-3 top-5 h-6 w-6 font-semibold text-orange-500"
			on:click={() => (mobileNavOpen = !mobileNavOpen)}
		>
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width={2}
				/>
			</svg>
		</button>

		<a
			class="mr-0 flex items-center text-2xl font-bold text-blue-400 no-underline hover:no-underline lg:mr-8 lg:text-4xl"
			href="/"
		>
			<img alt="Bootpack Digital" class="w-full" loading="lazy" src={BootpackDigital} />
		</a>
		<a
			class={`block text-navy-400 font-semibold text-xl py-2 px-4 rounded-lg ${
				$page.url.pathname === '/' && 'bg-navy-100'
			}`}
			href="/">Home</a
		>
		<a
			class={`block text-navy-400 font-semibold text-xl py-2 px-4 rounded-lg ${
				$page.url.pathname === '/work' && 'bg-navy-100'
			}`}
			href="/work">Work</a
		>
		<a
			class={`block text-navy-400 font-semibold text-xl py-2 px-4 rounded-lg ${
				$page.url.pathname === '/about' && 'bg-navy-100'
			}`}
			href="/about">About</a
		>
		<a
			class={`block text-navy-400 font-semibold text-xl py-2 px-4 rounded-lg ${
				$page.url.pathname === '/open-source' && 'bg-navy-100'
			}`}
			href="/open-source"
		>
			Open Source
		</a>
		<a
			class="focus:shadow-outline mt-2 flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-500 focus:outline-none lg:ml-4"
			href="/contact"
		>
			Request a Quote
		</a>

		<div class="mt-4 flex justify-center">
			<SocialIcons />
		</div>
	</div>
{/if}
