<script lang="ts">
	export let textLine1 = '';
	export let textLine2 = '';
	export let buttonText = 'Get in touch';
	export let bgColor = 'bg-blue-50';
</script>

<div class={bgColor}>
	<div
		class="py-12 px-4 mx-auto max-w-screen-xl sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-24 lg:px-8"
	>
		<h2
			class="text-3xl font-extrabold tracking-tight leading-9 text-gray-900 md:text-4xl md:leading-10"
		>
			<span class="block">{textLine1}</span>
			<span class="block text-blue-600">{textLine2}</span>
		</h2>
		<div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
			<div class="inline-flex rounded-md shadow">
				<a
					class="inline-flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-white bg-blue-600 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-blue-500"
					href="/contact"
				>
					{buttonText}
				</a>
			</div>
		</div>
	</div>
</div>
