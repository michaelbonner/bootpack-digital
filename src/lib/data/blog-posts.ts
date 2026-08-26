import type { Picture } from 'vite-imagetools';
import officeLunchThumbnail from '../../images/officelunch-screenshots/homepage-hero.jpg?w=320;480;640;800;960;1200&enhanced';
import jobListingThumbnail from '../../images/joblisting-app-screenshots/homepage.jpg?w=320;480;640;800;960;1200&enhanced';
import ecfThumbnail from '../../images/easycustomerfeedback-screenshots/homepage-hero.jpg?w=320;480;640;800;960;1200&enhanced';
import aiThumbnail from '../../images/rapid-iteration-with-ai.jpg?w=320;480;640;800;960;1200&enhanced';
import howWeWorkThumbnail from '../../images/how-we-work-with-you.jpg?w=320;480;640;800;960;1200&enhanced';

export type BlogPost = {
	title: string;
	slug: string;
	description: string;
	publishedAt: `${number}-${number}-${number}`;
	thumbnail: Picture;
};

const blogPostDateFormatter = new Intl.DateTimeFormat('en-US', {
	day: 'numeric',
	month: 'long',
	timeZone: 'UTC',
	year: 'numeric'
});

export const formatBlogPostDate = (publishedAt: BlogPost['publishedAt']) =>
	blogPostDateFormatter.format(new Date(`${publishedAt}T00:00:00Z`));

export const blogPosts = [
	{
		title: 'Introducing Office Lunch App',
		slug: 'introducing-officelunch',
		description:
			'Office Lunch App replaces lunch-day chat threads with one place to opt in, vote on restaurants, save orders, and automate recurring choices.',
		publishedAt: '2026-05-02',
		thumbnail: officeLunchThumbnail
	},
	{
		title: 'Introducing JobListing.app',
		slug: 'introducing-joblisting',
		description:
			'JobListing gives growing teams a branded careers page and a focused way to collect applications, manage candidates, and schedule interviews.',
		publishedAt: '2026-03-25',
		thumbnail: jobListingThumbnail
	},
	{
		title: 'Introducing EasyCustomerFeedback',
		slug: 'introducing-easy-customer-feedback',
		description:
			'EasyCustomerFeedback puts an embeddable feedback form, a shared inbox, and integrations with Linear, GitHub Issues, and Basecamp in one service.',
		publishedAt: '2026-03-09',
		thumbnail: ecfThumbnail
	},
	{
		title: 'Rapid product iteration with AI',
		slug: 'ai-product-iteration',
		description:
			'How we build working prototypes in isolated sandboxes so clients can test an idea and learn from it before committing to a full build.',
		publishedAt: '2026-02-06',
		thumbnail: aiThumbnail
	},
	{
		title: 'How we work with you on projects',
		slug: 'how-we-work-with-you',
		description:
			'How we start projects, keep decisions in Basecamp, use focused weekly calls, and solve problems in writing before scheduling another meeting.',
		publishedAt: '2026-02-04',
		thumbnail: howWeWorkThumbnail
	}
] satisfies [BlogPost, ...BlogPost[]];
