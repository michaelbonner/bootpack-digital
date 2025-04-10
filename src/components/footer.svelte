<script lang="ts">
	import { page } from '$app/state';
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import SocialIcons from './social-icons.svelte';

	// if this element has been in view add bpd-inView to the footer element
	let isInView = false;

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

	const links = [
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
		},
		{
			label: 'Policies',
			url: '/policies'
		}
	];
</script>

<footer
	class={clsx(
		'justify-between items-center py-8 lg:flex lg:py-0 text-navy-100',
		isInView && 'bpd-inView'
	)}
>
	<nav class="justify-between items-end p-4 pb-12 w-full text-sm md:p-8 md:pb-36 lg:flex">
		<div class="block items-center px-4 text-lg lg:flex lg:px-0">
			<p class="mr-12 mb-4 text-sm lg:mb-0">
				&copy; 2019-{new Date().getFullYear()} Bootpack Digital, LLC
			</p>
			<div class="grid grid-cols-2 text-base lg:flex lg:flex-wrap">
				{#each links as link}
					<a
						class={clsx(
							'block py-4 font-semibold decoration-2 transition-all hover:underline hover:decoration-blue-300 lg:px-4 lg:py-2',
							page.url.pathname === link.url && 'underline decoration-blue-600'
						)}
						href={link.url}>{link.label}</a
					>
				{/each}
			</div>
		</div>

		<div class="flex justify-start mt-6 lg:justify-end lg:pr-24 lg:mt-0">
			<SocialIcons />
		</div>
	</nav>
</footer>
