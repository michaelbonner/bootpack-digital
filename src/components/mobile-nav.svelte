<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import BootpackDigital from '../images/bootpack-digital.svg';
	import SocialIcons from './social-icons.svelte';

	let mobileNavOpen = $state(false);

	beforeNavigate(() => {
		mobileNavOpen = false;
	});

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

<button class="block pb-1 lg:hidden" onclick={() => (mobileNavOpen = !mobileNavOpen)}>
	<svg
		class="w-8 stroke-current text-navy-500"
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
		in:fade|global={{ duration: 200 }}
		out:fade|global={{ duration: 200 }}
		class={`grid gap-2 absolute text-center z-50 top-4 left-4 right-4 bg-white shadow-md border border-gray-100 py-4 px-6 rounded-md`}
	>
		<button
			class="absolute right-3 top-5 w-6 h-6 font-semibold text-orange-500"
			onclick={() => (mobileNavOpen = !mobileNavOpen)}
		>
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<title>Toggle menu</title>
				<path
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width={2}
				/>
			</svg>
		</button>

		<a
			class="flex items-center mr-0 text-2xl font-bold text-blue-400 no-underline lg:mr-8 lg:text-4xl hover:no-underline"
			href="/"
		>
			<img
				alt="Bootpack Digital"
				class="mx-auto w-full max-w-72"
				loading="lazy"
				src={BootpackDigital}
				height="652"
				width="1002"
			/>
		</a>

		{#each mainLinks as link}
			<a
				class={`block text-navy-500 font-semibold text-xl py-2 px-4 rounded-lg ${
					page.url.pathname === link.url && 'bg-navy-100'
				}`}
				href={link.url}
			>
				{link.label}
			</a>
		{/each}

		<div class="flex justify-center py-4 px-6 -mx-6 mt-4 -mb-4 bg-gray-100 rounded-b-md">
			<SocialIcons />
		</div>
	</div>
{/if}
