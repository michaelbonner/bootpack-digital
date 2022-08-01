<script>
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
			class="absolute right-3 top-5 text-orange-500 font-semibold w-6 h-6"
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
			class="flex items-center text-blue-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl mr-0 lg:mr-8"
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
			class="lg:ml-4 mt-2 flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
			href="/contact"
		>
			Request a Quote
		</a>

		<div class="mt-4 flex justify-center">
			<SocialIcons />
		</div>
	</div>
{/if}
