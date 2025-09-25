<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { RouteId } from '$app/types';
	import { navLinks } from '$lib/nav-links';
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import SocialIcons from './social-icons.svelte';

	// if this element has been in view add bpd-inView to the footer element
	let isInView = $state(false);

	onMount(() => {
		const footer = document.querySelector('footer');
		if (footer) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isInView = true;
					}
				});
			});
			observer.observe(footer);
		}
	});

	const links: { label: string; url: RouteId }[] = [
		...navLinks,
		{ label: 'Policies', url: '/policies' }
	];
</script>

<footer
	class={clsx(
		'justify-between items-center lg:flex lg:py-0 text-navy-100',
		isInView && 'bpd-inView'
	)}
>
	<nav
		class="justify-between items-end px-4 py-8 pb-12 w-full text-sm md:p-8 md:pb-12 lg:flex bg-navy-800/60"
	>
		<div class="block items-center px-4 text-lg lg:flex lg:px-0">
			<p class="mr-12 mb-4 text-sm lg:mb-0">
				&copy; 2019-{new Date().getFullYear()} Bootpack Digital, LLC
			</p>
			<div class="grid grid-cols-2 text-base lg:flex lg:flex-wrap">
				{#each links as link (link.url)}
					<a
						class={clsx(
							'block py-4 font-semibold decoration-2 underline-offset-4 hover:underline hover:decoration-blue-300 lg:px-4 lg:py-2',
							page.url.pathname === link.url && 'underline decoration-blue-600'
						)}
						href={resolve(link.url)}>{link.label}</a
					>
				{/each}
			</div>
		</div>

		<div class="flex justify-start mt-6 lg:justify-end lg:pr-24 lg:mt-0">
			<SocialIcons />
		</div>
	</nav>
</footer>
