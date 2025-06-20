import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// // cspell:disable-next-line
	const policyKey = 'YTFveWIwNTZiMUZVYjFab1ZHYzlQUT09';
	const termageddonUrl = new URL(`https://policies.termageddon.com/api/policy/${policyKey}`);
	const res = await fetch(termageddonUrl.toString());

	return {
		policyBody:
			(await res.text()) ?? `Please visit https://policies.termageddon.com/api/policy/${policyKey}`
	};
};
