import { getTermageddonPolicyContent } from '../../../functions/getTermageddonPolicyContent';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// cspell:disable-next-line
	const policyBody = await getTermageddonPolicyContent('TUVWa1VHNWxaRGhWWTFnMWVIYzlQUT09', fetch);

	return {
		policyBody
	};
};
