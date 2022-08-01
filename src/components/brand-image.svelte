<script lang="ts">
	export let title: string;
	export let height: number;
	export let logo: string;
	export let width: number;
</script>

<div class="py-3 px-4">
	<img alt={title} {height} src={logo} {width} />
</div>
