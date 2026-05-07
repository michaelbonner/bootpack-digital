import type { Picture } from 'vite-imagetools';
import officeLunchThumbnail from '../../images/officelunch-screenshots/homepage-hero.jpg?enhanced';
import jobListingThumbnail from '../../images/joblisting-app-screenshots/homepage.jpg?enhanced';
import ecfThumbnail from '../../images/easycustomerfeedback-screenshots/homepage-hero.jpg?enhanced';
import aiThumbnail from '../../images/rapid-iteration-with-ai.jpg?enhanced';
import howWeWorkThumbnail from '../../images/how-we-work-with-you.jpg?enhanced';

export type BlogPost = {
	title: string;
	slug: string;
	description: string;
	date: string;
	thumbnail: Picture;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Introducing Office Lunch App',
		slug: 'introducing-officelunch',
		description:
			'Office Lunch App is a new Bootpack Digital product that takes the daily back-and-forth out of group lunch ordering with voting, opt-ins, restaurant management, and an API for automation.',
		date: 'May 2, 2026',
		thumbnail: officeLunchThumbnail
	},
	{
		title: 'Introducing JobListing.app',
		slug: 'introducing-joblisting',
		description:
			'JobListing is a new Bootpack Digital product for creating branded job pages, collecting applications, and managing candidates without a bloated ATS.',
		date: 'March 25, 2026',
		thumbnail: jobListingThumbnail
	},
	{
		title: 'Introducing EasyCustomerFeedback',
		slug: 'introducing-easy-customer-feedback',
		description:
			'EasyCustomerFeedback is a new service from Bootpack Digital that makes it simple to collect, organize, and act on feedback from your customers.',
		date: 'March 9, 2026',
		thumbnail: ecfThumbnail
	},
	{
		title: 'Rapid product iteration with AI',
		slug: 'ai-product-iteration',
		description:
			'How we use AI to build interactive prototypes, deploy them to sandboxes for testing, and leverage years of experience to help clients explore new opportunities.',
		date: 'February 6, 2026',
		thumbnail: aiThumbnail
	},
	{
		title: 'How we work with you on projects',
		slug: 'how-we-work-with-you',
		description:
			'Learn about our onboarding process, how we collaborate in Basecamp, and our offline-first approach to problem solving.',
		date: 'February 4, 2026',
		thumbnail: howWeWorkThumbnail
	}
];
