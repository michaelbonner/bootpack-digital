<script lang="ts">
	interface Props {
		title: string;
		height: number;
		logo: string;
		width: number;
	}

	let {
		title,
		height,
		logo,
		width
	}: Props = $props();
</script>

<div class="py-3 px-4">
	<img alt={title} {height} loading="lazy" src={logo} {width} />
</div>
