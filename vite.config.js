import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils';
import { enhancedImages } from '@sveltejs/enhanced-img';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		enhancedImages(),
		partytownVite({
			// `dest` specifies where files are copied to in production
			dest: join(process.cwd(), 'static', '~partytown')
		})
	]
};

export default config;
