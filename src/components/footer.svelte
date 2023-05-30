<script lang="ts">
	import { page } from '$app/stores';
	import SocialIcons from './social-icons.svelte';

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

<footer class="items-center justify-between py-8 text-navy-100 lg:flex lg:py-0">
	<nav class="w-full items-end justify-between p-4 pb-12 text-sm md:p-8 md:pb-24 lg:flex">
		<div class="block items-center px-4 text-lg lg:flex lg:px-0">
			<p class="mb-4 mr-12 text-sm lg:mb-0">
				&copy; {new Date().getFullYear()} Bootpack Digital, LLC
			</p>
			<div class="grid grid-cols-2 text-base lg:flex">
				{#each links as link}
					<a
						class={`block py-4 font-semibold decoration-2 transition-all hover:underline hover:decoration-blue-300 lg:px-4 lg:py-2
						${$page.url.pathname === link.url && 'underline decoration-blue-600'}
						`}
						href={link.url}>{link.label}</a
					>
				{/each}
			</div>
		</div>

		<div class="mt-6 flex justify-start lg:mt-0 lg:justify-end lg:pr-24">
			<SocialIcons />
		</div>
	</nav>
</footer>
