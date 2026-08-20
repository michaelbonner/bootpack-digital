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
			'Office Lunch App replaces lunch-day chat threads with one place to opt in, vote on restaurants, save orders, and automate recurring choices.',
		date: 'May 2, 2026',
		thumbnail: officeLunchThumbnail
	},
	{
		title: 'Introducing JobListing.app',
		slug: 'introducing-joblisting',
		description:
			'JobListing gives growing teams a branded careers page and a focused way to collect applications, manage candidates, and schedule interviews.',
		date: 'March 25, 2026',
		thumbnail: jobListingThumbnail
	},
	{
		title: 'Introducing EasyCustomerFeedback',
		slug: 'introducing-easy-customer-feedback',
		description:
			'EasyCustomerFeedback puts an embeddable feedback form, a shared inbox, and integrations with Linear, GitHub Issues, and Basecamp in one service.',
		date: 'March 9, 2026',
		thumbnail: ecfThumbnail
	},
	{
		title: 'Rapid product iteration with AI',
		slug: 'ai-product-iteration',
		description:
			'How we build working prototypes in isolated sandboxes so clients can test an idea and learn from it before committing to a full build.',
		date: 'February 6, 2026',
		thumbnail: aiThumbnail
	},
	{
		title: 'How we work with you on projects',
		slug: 'how-we-work-with-you',
		description:
			'How we start projects, keep decisions in Basecamp, use focused weekly calls, and solve problems in writing before scheduling another meeting.',
		date: 'February 4, 2026',
		thumbnail: howWeWorkThumbnail
	}
];
