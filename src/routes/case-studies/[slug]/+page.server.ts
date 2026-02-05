import { error } from '@sveltejs/kit';
import { caseStudies } from '$lib/data/case-studies';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const props = caseStudies.find((study) => study.slug === params.slug);

	if (!props) {
		throw error(404, 'Case study not found');
	}

	return {
		caseStudy: props
	};
};
