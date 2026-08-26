<script lang="ts">
	import { resolve } from '$app/paths';
	import { Obfuscate } from 'svelte-obfuscate';
	import ContactForm from '../../components/contact-form.svelte';
	import ContentPageHero from '../../components/content-page-hero.svelte';
	import Seo from '../../components/seo.svelte';
</script>

<Seo
	title="Get in Touch with Bootpack Digital"
	description="Do you have a project idea or an existing site that needs to be updated? Do you need an outside consultant? Get in touch!"
	canonical="/contact"
	ogImage="/og-contact.jpg"
	ogImageAlt="Contact Bootpack Digital"
/>

<ContentPageHero
	description="You'll talk to Michael Bonner, the founder, not a salesperson or an intern. We take on custom web design, web development, and app development, and we reply within one business day."
	eyebrow="Get in touch"
	heading="Tell us what you're building and we'll tell you how we'd build it."
	linkHref={resolve('/work')}
	linkText="See the work we've shipped"
/>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">
					Start a conversation
				</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					Two easy ways to reach us
				</h2>
			</div>
			<p class="max-w-md text-base leading-7 text-gray-600 md:text-right">
				Book a call if you would rather talk it through, or send the form if you would rather write it
				out. Both land with the person who will do the work.
			</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
			<div>
				<div class="p-7 bg-blue-50 rounded-2xl border border-blue-200 sm:p-8">
					<svg
						aria-hidden="true"
						class="size-8 text-blue-600"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						viewBox="0 0 512 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
						/>
						<rect height="288" rx="64" ry="64" width="336" x="32" y="112" />
					</svg>
					<h3 class="mt-5 text-2xl font-bold tracking-tight text-navy-700">
						Schedule a 30-minute call
					</h3>
					<p class="mt-3 text-base leading-7 text-gray-600">
						Pick a time that works and we will talk through what you are trying to accomplish. No
						prep required, no pitch deck.
					</p>
					<a
						class="inline-flex gap-2 items-center py-3 px-5 mt-6 text-base font-semibold text-white bg-navy-700 rounded-lg transition-colors hover:bg-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600"
						href="https://savvycal.com/bootpack/30-minute-project-discussion?utm_source=bootpack_website"
						rel="noopener noreferrer"
						target="_blank"
					>
						Book a time
						<span class="sr-only">(opens a new tab)</span>
						<svg aria-hidden="true" class="size-4" fill="none" viewBox="0 0 20 20">
							<path
								d="m7 4 6 6-6 6"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</a>
				</div>

				<dl class="mt-10 border-blue-200 divide-y divide-blue-200 border-y">
					<div class="py-6">
						<dt
							class="flex gap-2 items-center text-xs font-bold tracking-[0.16em] text-orange-700 uppercase"
						>
							<svg
								aria-hidden="true"
								class="size-4"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect height="480" rx="48" ry="48" width="256" x="128" y="16" />
								<path
									d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
								/>
							</svg>
							Phone
						</dt>
						<dd class="mt-2 text-lg font-semibold text-navy-700 hover:underline">
							<Obfuscate telephone="(801) 839-5287" />
						</dd>
					</div>

					<div class="py-6">
						<dt
							class="flex gap-2 items-center text-xs font-bold tracking-[0.16em] text-orange-700 uppercase"
						>
							<svg
								aria-hidden="true"
								class="size-4"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect height="320" rx="40" ry="40" width="416" x="48" y="96" />
								<path d="M112 160l144 112 144-112" />
							</svg>
							Email
						</dt>
						<dd class="mt-2 text-lg font-semibold text-navy-700 hover:underline">
							<Obfuscate email="hey@bootpackdigital.com" />
						</dd>
					</div>

					<div class="py-6">
						<dt
							class="flex gap-2 items-center text-xs font-bold tracking-[0.16em] text-orange-700 uppercase"
						>
							<svg
								aria-hidden="true"
								class="size-4"
								fill="none"
								stroke="currentColor"
								stroke-miterlimit="10"
								stroke-width="32"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z"
									fill="currentColor"
									stroke="none"
								/>
								<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />
							</svg>
							Mailing address
						</dt>
						<dd class="mt-2 text-lg font-semibold text-navy-700">
							PO Box 711235
							<br />
							Salt Lake City, UT 84171
						</dd>
					</div>
				</dl>

				<div class="mt-10 space-y-5">
					<p class="text-base leading-7 text-gray-600">
						Looking for a job? Check out our <a
							class="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
							href="https://joblisting.app/w/66997a29-eadf-42b1-b1da-0dce217cbe19"
							rel="noopener noreferrer"
							target="_blank">available job listings</a
						>.
					</p>
					<p class="text-base leading-7 text-gray-600">
						Run a Salt Lake-area nonprofit or community organization? We give away a free website
						every quarter through <a
							class="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
							href={resolve('/bootpack-for-good')}>Bootpack for Good</a
						>.
					</p>
				</div>
			</div>

			<div class="lg:pl-4">
				<h3 class="text-2xl font-bold tracking-tight text-navy-700">Send us a note</h3>
				<p class="mt-3 text-base leading-7 text-gray-600">
					Tell us what you are trying to accomplish and we will get back to you within one business
					day.
				</p>
				<ContactForm />
			</div>
		</div>
	</div>
</section>
