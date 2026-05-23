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

interface Window {
	turnstile?: {
		reset: (widgetId?: string) => void;
		render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
		remove: (widgetId: string) => void;
	};
}
