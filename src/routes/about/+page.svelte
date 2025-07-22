<script lang="ts">
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';
	import MichaelBonner from '../../images/michael-bonner.jpg?enhanced';
</script>

<Seo
	title="About Bootpack Digital, a Utah Based Web and App Development Agency"
	description="Bootpack Digital: Utah-based web and app development agency helping businesses grow with quality solutions and a passion for collaboration."
	canonical="/about"
/>

<div class="overflow-hidden relative py-16 text-lg leading-8 bg-white">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-6 max-w-3xl text-lg">
			<h1
				class="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-navy-600"
			>
				<span
					class="block text-base font-semibold tracking-wide leading-6 text-orange-700 uppercase"
				>
					Introducing
				</span>
				Bootpack Digital
			</h1>
		</div>

		<div class="mx-auto max-w-3xl text-gray-500 prose lg:prose-lg">
			<p class="text-gray-500">
				We are a small group of passionate creators trying to make a difference. We value quality
				deliverables and human interaction. We are purpose built to fit into your business and
				contribute on day one. We have a proven track record of success and a team that is ready to
				help you grow.
			</p>
		</div>
		<div class="mx-auto mt-20 max-w-3xl text-gray-500 prose lg:prose-lg">
			<h2 class="text-navy-600">Who are we?</h2>
		</div>
		<div class="mx-auto mt-8 max-w-3xl">
			<div class="items-start sm:grid sm:gap-6 lg:flex lg:gap-8">
				<enhanced:img
					class="object-cover object-top bg-gray-100 aspect-[24/30] max-w-2/3 md:max-w-[340px] w-full rounded-xl shadow-md"
					alt="Michael Bonner"
					loading="lazy"
					src={MichaelBonner}
				/>

				<div class="flex flex-col justify-between mt-4 lg:mt-0">
					<div class="gap-y-4 prose">
						<div>
							<p class="font-semibold text-orange-700 uppercase mt-0 mb-0">Founder</p>
							<h3 class="text-navy-600 mt-0">Michael Bonner</h3>
						</div>
						<p class="text-gray-500">
							Michael started Bootpack Digital in 2019 as the next generation of a freelance
							business he started in 2006. Michael has been building websites since he was 16. What
							started out as a fun thing to do became a livelihood. Michael has worked at several
							different companies, including managing a development team for 5 years.
						</p>
					</div>
					<div class="flex gap-2 mt-4">
						<a
							class="size-10 inline-flex justify-center items-center transition-all hover:rotate-6 hover:scale-110"
							href="https://www.linkedin.com/in/michaelbonner/"
							title="LinkedIn"
						>
							<svg
								class="w-8 h-8 text-blue-600 transition-all ease-in-out fill-current hover:text-blue-800"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>LinkedIn</title>
								<path
									d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
								/>
							</svg>
						</a>
						<a
							class="size-10 inline-flex justify-center items-center transition-all hover:rotate-6 hover:scale-110"
							href="https://www.instagram.com/michael__bonner/"
							title="Instagram"
						>
							<svg
								class="w-8 h-8 text-blue-600 transition-all ease-in-out fill-current hover:text-blue-800"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Instagram</title>
								<path
									d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
								/>
								<path
									d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
								/>
							</svg>
						</a>
						<a
							class="size-10 inline-flex justify-center items-center transition-all hover:rotate-6 hover:scale-110"
							href="https://github.com/michaelbonner"
							title="GitHub"
						>
							<svg
								class="w-8 h-8 text-blue-600 transition-all ease-in-out fill-current hover:text-blue-800"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Github</title>
								<path
									d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
								/>
							</svg>
						</a>
						<a
							class="size-10 inline-flex justify-center items-center transition-all hover:rotate-6 hover:scale-110"
							href="https://michaelbonner.dev/"
							title="Personal Website"
						>
							<svg
								class="w-8 h-8 text-blue-600 transition-all ease-in-out fill-current hover:text-blue-800"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Personal Site</title>
								<path
									d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="36"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="overflow-hidden relative bg-white">
	<enhanced:img
		class="object-cover object-right absolute inset-0 w-full h-full lg:object-bottom"
		alt="Bootpack in snow"
		loading="lazy"
		src="../../images/bootpack-in-snow.jpg"
	/>
	<div class="relative pb-64 mx-auto max-w-6xl">
		<div
			class="px-4 pt-12 mx-auto max-w-3xl text-gray-500 prose lg:prose-lg bg-white/50 backdrop-blur-lg py-8 rounded-2xl"
		>
			<h2 class="text-navy-600">Why the name "Bootpack"?</h2>
			<p>
				We're from Utah and we love skiing. Sometimes when you are skiing you need to unclip and
				hike your way to find the best snow. To get there you can follow a boot pack, which is where
				other hikers have hiked a section too steep to skin up. The boot pack helps make the journey
				easier. That's where we come in; our goal is to help you, and your business, get to the next
				level. We've spent years laying a solid boot pack of experience, now we want to help you and
				your product reach new heights.
			</p>
		</div>
	</div>
</div>

<ContactBanner
	textLine1="Ready to build something together?"
	textLine2="Send us a message so we can chat."
/>
