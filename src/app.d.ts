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

interface Window {
	turnstile?: {
		reset: (widgetId?: string) => void;
		render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
		remove: (widgetId: string) => void;
	};
}
