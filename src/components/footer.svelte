<script>
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

<footer class="lg:flex justify-between items-center text-navy-100 py-8 lg:py-0">
	<nav class="w-full lg:flex justify-between items-end p-4 md:p-8 text-sm">
		<div class="block lg:flex items-center px-4 lg:px-0 text-lg">
			<p class="mr-12 text-sm mb-4 lg:mb-0">
				&copy; {new Date().getFullYear()} Bootpack Digital, LLC
			</p>
			<div class="grid grid-cols-2 lg:flex text-base">
				{#each links as link}
					<a
						class={`block font-semibold py-4 lg:py-2 lg:px-4 hover:underline decoration-2 underline-offset-4 hover:decoration-blue-300 transition-all
						${$page.url.pathname === link.url && 'underline decoration-blue-600'}
						`}
						href={link.url}>{link.label}</a
					>
				{/each}
			</div>
		</div>

		<div class="flex justify-start lg:justify-end mt-6 lg:mt-0">
			<SocialIcons />
		</div>
	</nav>
</footer>
