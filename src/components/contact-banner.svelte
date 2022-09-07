<script lang="ts">
	export let textLine1 = '';
	export let textLine2 = '';
	export let buttonText = 'Get in touch';
	export let bgColor = 'bg-blue-50';
</script>

<div class={bgColor}>
	<div
		class="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8"
	>
		<h2
			class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10"
		>
			<span class="block">{textLine1}</span>
			<span class="block text-blue-600">{textLine2}</span>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow">
				<a
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500"
					href="/contact"
				>
					{buttonText}
				</a>
			</div>
		</div>
	</div>
</div>
