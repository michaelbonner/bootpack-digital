// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
	// interface Session {}
	// interface Stuff {}
}

// Fontsource packages export only CSS (no type declarations), so TS can't
// resolve the side-effect import on its own.
declare module '@fontsource-variable/figtree';

// @sveltejs/enhanced-img only declares bare `?enhanced` imports. Responsive
// width directives use `&enhanced` and return the same Picture object.
declare module '*&enhanced' {
	import type { Picture } from 'vite-imagetools';

	const value: Picture;
	export default value;
}

interface Window {
	turnstile?: {
		reset: (widgetId?: string) => void;
		render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
		remove: (widgetId: string) => void;
	};
}
