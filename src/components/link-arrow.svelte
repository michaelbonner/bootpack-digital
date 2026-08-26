<script lang="ts">
	import clsx from 'clsx';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<svg aria-hidden="true" class={clsx('size-4', className)} fill="none" viewBox="0 0 20 20">
	<path
		d="m7 4 6 6-6 6"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
	/>
</svg>
