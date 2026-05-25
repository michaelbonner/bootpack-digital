<script lang="ts">
	import { Obfuscate } from 'svelte-obfuscate';
	import ContactForm from '../../components/contact-form.svelte';
	import Seo from '../../components/seo.svelte';
	import clsx from 'clsx';
</script>

<Seo
	title="Get in Touch with Bootpack Digital"
	description="Do you have a project idea or an existing site that needs to be updated? Do you need an outside consultant? Get in touch!"
	canonical="/contact"
/>

<div class="px-4 pt-16 pb-20 bg-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="text-gray-700 xl:flex xl:gap-16 xl:px-8 2xl:px-0">
			<div class="max-w-3xl mx-auto">
				<div class="prose lg:prose-lg text-gray-600">
					<h1 class="text-navy-600">Get in touch</h1>
					<p>
						Set up some time to talk to Michael Bonner, the founder, not a salesperson or an intern.
					</p>
					<p>
						We love meeting new people and hearing ideas. Our goal is to help you build your
						website, mobile app, or web app. We'll work with you to understand what you need, and
						we'll make it happen.
					</p>
					<p>
						Do you have a project idea or an existing site that needs to be updated? Do you need an
						outside consultant? Fill out this form and we'll get back to you within one business day. We
						specialize in custom
						web design, web development, and app development.
					</p>
					<p>
						Looking for a job? Check out our <a
							href="https://joblisting.app/w/66997a29-eadf-42b1-b1da-0dce217cbe19"
							target="_blank"
							rel="noopener noreferrer">available job listings</a
						>.
					</p>
					<p>
						Run a Salt Lake-area nonprofit or community organization? We give away a free
						website every quarter through <a href="/bootpack-for-good">Bootpack for Good</a>.
					</p>
					<div>
						<a
							class="inline-flex py-3 px-5 text-base font-medium leading-6 text-white bg-blue-600 rounded-md border border-transparent transition duration-150 ease-in-out lg:w-auto hover:bg-blue-500 focus:outline-hidden focus:shadow-outline"
							href="https://savvycal.com/bootpack/30-minute-project-discussion?utm_source=bootpack_website"
							rel="noopener noreferrer"
							target="_blank"
						>
							<span class="flex gap-2 items-center mx-2 text-white">
								<svg
									aria-hidden="true"
									class="w-6 h-6 text-white"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="32"
									/>
									<rect
										fill="none"
										height="288"
										rx="64"
										ry="64"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="32"
										width="336"
										x="32"
										y="112"
									/>
								</svg>
								Schedule a 30-minute video call
								<span class="sr-only"> (opens a new tab)</span>
							</span>
						</a>
					</div>
				</div>
				<div class="pt-4 w-full">
					<div class="flex flex-wrap justify-between items-end">
						<div>
							<div class="flex items-center mt-4">
								<svg
									class="w-6 h-5 text-blue-600 fill-current"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Phone</title>
									<rect
										fill="none"
										height="480"
										rx="48"
										ry="48"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="32"
										width="256"
										x="128"
										y="16"
									/>
									<path
										d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="32"
									/>
								</svg>
								<p class="ml-2 hover:underline">
									<Obfuscate telephone="(801) 839-5287" />
								</p>
							</div>
							<div class="flex items-center mt-4">
								<svg
									class="w-6 h-5 text-blue-600 fill-current"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Mail</title>
									<rect
										fill="none"
										height="320"
										rx="40"
										ry="40"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="32"
										width="416"
										x="48"
										y="96"
									/>
									<path
										d="M112 160l144 112 144-112"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="32"
									/>
								</svg>
								<p class="ml-2 hover:underline">
									<Obfuscate email="hey@bootpackdigital.com" />
								</p>
							</div>
							<div class="flex items-center mt-4">
								<svg
									class="w-6 h-5 text-blue-600 fill-current"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Address</title>
									<path
										d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z"
									/>
									<path
										d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
										fill="none"
										stroke="currentColor"
										stroke-miterlimit="10"
										stroke-width="32"
									/>
								</svg>
								<p class="ml-2">
									PO Box 711235
									<br />
									Salt Lake City, UT 84171
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section
				class={clsx(
					'pt-6 pb-24 mx-auto mt-8 w-full max-w-3xl border-t',
					'lg:pt-8 lg:mt-12',
					'xl:mt-0 xl:border-t-0 xl:border-l xl:pl-16 xl:max-w-lg xl:pt-0'
				)}
			>
				<ContactForm />
			</section>
		</div>
	</div>
</div>
