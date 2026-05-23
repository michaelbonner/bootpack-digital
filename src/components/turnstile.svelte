<script lang="ts">
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { onMount } from 'svelte';

	let { theme = 'light' }: { theme?: 'light' | 'dark' | 'auto' } = $props();

	let container: HTMLDivElement;

	// Render explicitly on mount rather than relying on Turnstile's implicit
	// auto-render. The api.js script only auto-renders `.cf-turnstile` elements
	// once when it first executes, and SvelteKit dedupes the `<svelte:head>`
	// script across pages — so on client-side navigation the widget on the
	// second page would never render. Explicit rendering ties the widget to
	// this component's lifecycle, so it works on every visit.
	onMount(() => {
		let widgetId: string | undefined;
		let pollId: ReturnType<typeof setInterval> | undefined;

		const render = () => {
			if (!window.turnstile || !container) return;
			widgetId = window.turnstile.render(container, {
				sitekey: PUBLIC_TURNSTILE_SITE_KEY,
				theme
			});
		};

		if (window.turnstile) {
			render();
		} else {
			// api.js loads async; wait for it to be ready before rendering.
			pollId = setInterval(() => {
				if (window.turnstile) {
					clearInterval(pollId);
					pollId = undefined;
					render();
				}
			}, 100);
		}

		return () => {
			if (pollId) clearInterval(pollId);
			if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
		};
	});
</script>

<svelte:head>
	<script
		src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
		async
		defer
	></script>
</svelte:head>

<div bind:this={container}></div>
