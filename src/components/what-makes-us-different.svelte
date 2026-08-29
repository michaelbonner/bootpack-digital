<script lang="ts">
	type Pillar = {
		title: string;
		body: string;
		path: string;
		pageSpeedLink?: boolean;
	};

	const pillars: Pillar[] = [
		{
			title: '18+ years of experience',
			body: "Experience matters when it comes to building quality software and websites. Working at agencies, in-house, and freelance has given us a breadth of understanding that's hard to come by any other way. We've built large-scale production applications and will bring that knowledge to any project, no matter how big or small.",
			path: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
		},
		{
			title: 'Business knowledge',
			body: "We are a business-minded development group. We don't just think about the code. Helping businesses grow has given us an understanding of ROI that allows us to help clients shape their ideas into something customers actually love. Go-to-market strategies can make or break your product. We can help guide you down a path that works for you.",
			path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0h2m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
		},
		{
			title: 'The latest tech',
			body: 'Blazing fast performance improves conversions. Period. We build on the latest tech to make the customer experience as smooth and reliable as possible. You get a faster, more reliable product; your customers get an experience that keeps them coming back.',
			path: 'M13 10V3L4 14h7v7l9-11h-7z',
			pageSpeedLink: true
		}
	];
</script>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">Why Bootpack</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					What we bring to the table
				</h2>
			</div>
			<p class="max-w-md text-base leading-7 text-gray-600 md:text-right">
				We are your go-to experts in design and development, fully invested in your success. Our
				mission is to help your business grow and keep your customers delighted.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3 lg:gap-8">
			{#each pillars as pillar (pillar.title)}
				<div class="p-7 bg-blue-50 rounded-2xl border border-blue-200 sm:p-8">
					<svg
						aria-hidden="true"
						class="size-8 text-blue-600"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d={pillar.path} />
					</svg>
					<h3 class="mt-5 text-2xl font-bold tracking-tight text-navy-700">
						{pillar.title}
					</h3>
					<p class="mt-3 text-base leading-7 text-gray-600">
						{pillar.body}
					</p>

					{#if pillar.pageSpeedLink}
						<a
							class="inline-flex gap-2 items-center mt-6 text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors group hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
							href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fbootpackdigital.com%2F&form_factor=desktop"
							rel="noopener nofollow noreferrer"
							target="_blank"
						>
							<svg
								aria-hidden="true"
								class="transition-transform size-5 group-hover:scale-110"
								viewBox="0 0 512 520.331"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fill-rule="evenodd">
									<path d="M0 106.667h512v320H0z" fill="#def" />
									<path
										d="M512 106.667H0V42.56C0 19.055 19.137 0 42.772 0h426.456C492.85 0 512 19.032 512 42.56z"
										fill="#bdf"
									/>
									<path
										d="M128 74.667c-11.782 0-21.333-9.552-21.333-21.334S116.217 32 128 32s21.333 9.551 21.333 21.333c0 11.782-9.55 21.334-21.333 21.334zm-74.667 0C41.551 74.667 32 65.115 32 53.333S41.551 32 53.333 32c11.782 0 21.334 9.551 21.334 21.333 0 11.782-9.552 21.334-21.334 21.334z"
										fill="#fff"
									/>
									<path
										d="M85.333 426.667H0c0-65.516 24.994-131.033 74.98-181.02 99.975-99.974 262.065-99.974 362.04 0l-60.34 60.34C345.795 275.103 303.128 256 256 256c-94.257 0-170.667 76.41-170.667 170.667z"
										fill="#06f"
									/>
									<path
										d="M426.667 426.667H512c0-65.516-24.994-131.033-74.98-181.02l-60.34 60.34c30.884 30.885 49.987 73.551 49.987 120.68z"
										fill="#c6f"
									/>
									<path
										d="M195.66 487.006c-33.325-33.324-33.325-87.354 0-120.68 33.325-33.324 218.732-98.051 218.732-98.051s-64.727 185.407-98.052 218.731c-33.325 33.325-87.355 33.325-120.68 0z"
										fill="#6cf"
									/>
									<path
										d="M256 469.333c-23.564 0-42.667-19.102-42.667-42.666C213.333 403.103 232.436 384 256 384s42.667 19.103 42.667 42.667-19.103 42.666-42.667 42.666z"
										fill="#06f"
									/>
								</g>
							</svg>
							Check out our Google PageSpeed score
							<span class="sr-only"> (opens a new tab)</span>
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
