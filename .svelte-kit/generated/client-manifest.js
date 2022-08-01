export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/open-source.svelte"),
	() => import("../../src/routes/policies.svelte"),
	() => import("../../src/routes/work.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"about": [[0, 2], [1]],
	"contact": [[0, 3], [1]],
	"open-source": [[0, 5], [1]],
	"policies": [[0, 6], [1]],
	"work": [[0, 7], [1]]
};