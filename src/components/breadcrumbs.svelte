<script lang="ts">
	import { resolve } from '$app/paths';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface Props {
		items: BreadcrumbItem[];
		className?: string;
	}

	let { items = [], className = '' }: Props = $props();
</script>

<nav class="flex mt-4 lg:mt-0 {className}" aria-label="Breadcrumb">
	<ol role="list" class="flex list-none items-center space-x-2 pl-0">
		<li>
			<div>
				<a
					href={resolve('/') as string}
					class="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
				>
					<span>Home</span>
				</a>
			</div>
		</li>

		{#each items as item}
			<li>
				<div class="flex items-center">
					<svg
						class="h-5 w-5 flex-shrink-0 text-gray-300"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
					</svg>
					{#if item.href}
						<a
							href={resolve(item.href as any)}
							class="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
						>
							{item.label}
						</a>
					{:else}
						<span class="ml-2 text-sm font-medium text-gray-500" aria-current="page">
							{item.label}
						</span>
					{/if}
				</div>
			</li>
		{/each}
	</ol>
</nav>
