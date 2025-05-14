<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let isVisible = false;

	onMount(() => {
		// see if the query string has ?fictiveweb
		if (window.location.search.includes('?fictiveweb')) {
			isVisible = true;
		}
	});
</script>

{#if isVisible}
	<div
		class="relative z-20"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
		in:fade={{ duration: 500 }}
		out:fade={{ duration: 300 }}
	>
		<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div
				class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
				in:fly={{ y: 40 }}
				out:fly={{ y: -40 }}
			>
				<div
					class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
				>
					<div>
						<div
							class="mx-auto flex size-24 items-center justify-center rounded-full bg-[#0283C1] p-4"
						>
							<img
								src="/images/fictiveweb-logo.png"
								alt="Fictive Web Logo"
								width="600"
								height="335"
							/>
						</div>
						<div class="mt-3 text-center sm:mt-5">
							<h3 class="text-base font-semibold text-gray-900" id="modal-title">
								Fictive Web &rarr; Bootpack Digital
							</h3>
							<div class="mt-2 text-sm text-gray-500 prose">
								<p>
									We decided to change the name of our company to Bootpack Digital in 2018. Still
									the same us, just a more polished and focused experience.
								</p>
								<p>
									<a href="/about" class="underline">Learn more about us</a>
								</p>
							</div>
						</div>
					</div>
					<div class="mt-5 sm:mt-6">
						<button
							type="button"
							class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							onclick={() => {
								isVisible = false;
								window.history.replaceState({}, '', window.location.pathname);
							}}
						>
							Got it, thanks!
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
