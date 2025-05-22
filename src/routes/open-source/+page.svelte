<script lang="ts">
	import clsx from 'clsx';
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';

	const projects = [
		{
			name: 'PageSpeed Score Tracker',
			emoji: '⚡',
			description: `Keep track of your PageSpeed insights scores. Just add your URLs to the config and deploy
					the code. Then you'll see a simple view of your PageSpeed scores. <a
						class="underline"
						href="https://pagespeed.bootpack.dev/">Here's what it looks like for this site</a>`,
			link: 'https://github.com/michaelbonner/pagespeed'
		},
		{
			name: 'Screenshot Maker',
			emoji: '🌌',
			description:
				'Easy way to generate screenshots of websites. Just add the URL and it will generate a screenshot.',
			link: 'https://github.com/michaelbonner/screenshot-maker'
		},
		{
			name: 'Redirects Wizard',
			emoji: '⏭️',
			description:
				"Sometimes when you're migrating a site you have a lot of links you need to redirect somewhere else. Redirects Wizard allows you to do that task, but much quicker.",
			link: 'https://github.com/michaelbonner/redirects-wizard'
		},
		{
			name: 'GitHub Repositories Viewer',
			emoji: '📑',
			description:
				"GitHub doesn't make it easy to find who has access to what repos. This tool allows you to view all of your repos in a simple, easy to read format. It also helps you find open pull requests.",
			link: 'https://github.com/michaelbonner/github-repositories-viewer'
		}
	];
</script>

<Seo
	title="Open Source Projects from Bootpack Digital"
	description="Open source is important to the modern web. We are committed to sharing tools we think will strengthen the web development community."
	canonical="/open-source"
/>

<div class="px-4 pt-16 pb-20 bg-white sm:px-6 lg:px-8 lg:pb-28">
	<div class="mx-auto max-w-7xl">
		<div class="text-gray-600">
			<div class="prose prose-lg text-gray-600">
				<h1 class="tracking-tight text-navy-600">Open Source Projects</h1>
				<div>
					<p>
						Most of the web is built on open-source projects. Since open source projects are such a
						valuable resource, we are committed to sharing tools we think will strengthen the web
						development community.
					</p>
				</div>
			</div>

			<div>
				<a
					class={clsx(
						'flex gap-2 items-center bg-white rounded-lg transition-colors group underline',
						'hover:text-navy-800'
					)}
					href="https://github.com/michaelbonner?tab=repositories&q=&type=source&language=&sort=&utm_source=bootpackdigital.com/open-source"
				>
					<svg
						class="h-5 text-gray-600 transition-all scale-90 fill-current group-hover:text-blue-600 group-hover:scale-100"
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Github</title>
						<path
							d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
						/>
					</svg>
					<p class="mt-2 mb-2">See all of our public projects on GitHub</p>
				</a>
			</div>
		</div>
		<div class={clsx('grid gap-8 mt-6', 'md:grid-cols-2', 'lg:mt-10 lg:gap-12', 'xl:gap-x-24')}>
			{#each projects as project (project.name)}
				<div class="prose text-gray-600">
					<a class="no-underline hover:underline" href={project.link}>
						<h2 class="text-xl lg:text-2xl text-navy-600">
							{project.name}
							{project.emoji}
						</h2>
					</a>
					<p>
						<!-- eslint-disable svelte/no-at-html-tags -->
						{@html project.description}
						<!-- eslint-enable svelte/no-at-html-tags -->
					</p>
					<p>
						<a
							class={clsx(
								'text-base font-semibold leading-6 text-orange-700 transition duration-150 ease-in-out',
								'hover:text-orange-500 hover:underline'
							)}
							href={project.link}
						>
							See {project.name} Code on GitHub
						</a>
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<ContactBanner
	textLine1="Ready to build something together?"
	textLine2="Send us a message so we can chat."
	bgColor="bg-navy-100"
/>
