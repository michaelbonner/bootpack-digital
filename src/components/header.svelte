<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import BootpackHorizontal from '../images/bootpack-horizontal.svg';
	import MobileNav from './mobile-nav.svelte';

	import { navLinks } from '../lib/nav-links';
</script>

<header class="sticky top-0 z-20 py-2 px-6 mx-auto w-full bg-white shadow-md lg:shadow-none">
	<div class="flex gap-2 justify-between items-center w-full 2xl:px-4">
		<div class="flex justify-between items-center w-full">
			<a class="py-2" href={`${base}/`} title="Bootpack Digital home page">
				<img alt="Bootpack Digital" height="45" width="218" src={BootpackHorizontal} /></a
			>

			<div class="hidden items-center lg:flex">
				{#each navLinks as link (link.url)}
					<a
						class={`px-3 text-lg font-semibold text-navy-500 hover:underline hover:decoration-blue-400 ${
							page.url.pathname === link.url &&
							'underline decoration-blue-200 hover:decoration-blue-400'
						}`}
						href={`${base}${link.url}`}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>

		<MobileNav />
	</div>
</header>
