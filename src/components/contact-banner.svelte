<script lang="ts">
	interface Props {
		textLine1?: string;
		textLine2?: string;
		buttonText?: string;
		bgColor?: string;
	}

	let {
		textLine1 = '',
		textLine2 = '',
		buttonText = 'Get in touch',
		bgColor = 'bg-blue-50'
	}: Props = $props();
</script>

<div class={bgColor}>
	<div
		class="py-12 px-4 mx-auto max-w-(--breakpoint-xl) sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-24 lg:px-8 prose prose-xl"
	>
		<h2 class="font-extrabold tracking-tight text-navy-900">
			<span class="block">{textLine1}</span>
			<span class="block text-blue-600">{textLine2}</span>
		</h2>
		<div class="flex mt-8 lg:shrink-0 lg:mt-0">
			<div class="inline-flex rounded-md shadow-sm">
				<a
					class="inline-flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-white bg-blue-600 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-blue-500 no-underline hover:underline"
					href="/contact"
				>
					{buttonText}
				</a>
			</div>
		</div>
	</div>
</div>
