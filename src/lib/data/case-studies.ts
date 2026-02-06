import WasatchFabrication from '../../images/work/wasatch-fabrication.jpg?enhanced';
import AdminDashboard from '../../images/case-study/wasatch-fabrication/admin-dashboard.jpg?enhanced';
import AdminQuote from '../../images/case-study/wasatch-fabrication/admin-quote.jpg?enhanced';
import DashboardHome from '../../images/case-study/wasatch-fabrication/dashboard-home.jpg?enhanced';
import DashboardInvoices from '../../images/case-study/wasatch-fabrication/dashboard-invoices.jpg?enhanced';
import DashboardPayInvoice from '../../images/case-study/wasatch-fabrication/dashboard-pay-invoice.jpg?enhanced';
import DashboardProfile from '../../images/case-study/wasatch-fabrication/dashboard-profile.jpg?enhanced';
import DashboardQuotes from '../../images/case-study/wasatch-fabrication/dashboard-quotes.jpg?enhanced';
import MarketingHome from '../../images/case-study/wasatch-fabrication/marketing-home.jpg?enhanced';
import MarketingService from '../../images/case-study/wasatch-fabrication/marketing-service.jpg?enhanced';

import EnergySafeKidsHome from '../../images/case-study/energysafekids/general-home.jpg?enhanced';
import EnergySafeKidsAbout from '../../images/case-study/energysafekids/general-about.jpg?enhanced';
import EnergySafeKidsTeachers from '../../images/case-study/energysafekids/general-teachers.jpg?enhanced';
import RockyMountainPowerHome from '../../images/case-study/energysafekids/rmp-home.jpg?enhanced';
import RockyMountainPowerAbout from '../../images/case-study/energysafekids/rmp-about.jpg?enhanced';
import EnergySafeLeadersHome from '../../images/case-study/energysafekids/esl-home.jpg?enhanced';
import EnergySafeLeadersStudentResources from '../../images/case-study/energysafekids/esl-student-resources.jpg?enhanced';
import type { Picture } from 'vite-imagetools';

export interface CaseStudy {
	slug: string;
	title: string;
	description: string;
	image: Picture;
	link: string;
	features: {
		title: string;
		description: string;
		icon?: string;
	}[];
	htmlContent?: string;
	sections?: {
		title: string;
		content: string[]; // Array of paragraphs
		image?: Picture;
		images?: Picture[];
		imageAlt?: string;
	}[];
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'energy-safe-kids',
		title: 'Energy Safe Kids',
		description:
			'A scalable, multi-tenant platform for the National Energy Foundation. One simplified CMS powers distinct, branded educational websites for utility partners across the country.',
		image: EnergySafeKidsHome,
		link: 'https://energysafekids.org',
		features: [
			{
				title: 'Multi-Tenant Architecture',
				description:
					'A single codebase and CMS instance manage dozens of unique educational sites. Updates to the core platform benefit every partner instantly.',
				icon: 'lightning' // Using lightning as a metaphor for power/energy
			},
			{
				title: 'White-Label Branding',
				description:
					'Each utility partner receives a unique website that automatically adapts to their brand guidelines, logos, and specific messaging requirements.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'Unified Management',
				content: [
					'The National Energy Foundation (NEF) needed a way to manage educational content for numerous utility partners without duplicating effort. We built a centralized Content Management System (CMS) that acts as the single source of truth.',
					'NEF administrators can publish safety resources, lesson plans, and games once, and then distribute them to all partner sites or target specific regions. This dramatically reduces administrative overhead and ensures consistent messaging across the board.'
				],
				images: [EnergySafeKidsAbout, EnergySafeKidsTeachers]
			},
			{
				title: 'Vendor Customization',
				content: [
					"While the content is centrally managed, the user experience feels bespoke for each partner. For example, Rocky Mountain Power's site is automatically themed with their specific brand colors, logo, and localized information.",
					'The system identifies the visitor context and seamlessly serves the correct branded experience, making it easy for NEF to onboard new utility partners without needing to build new websites from scratch.'
				],
				images: [RockyMountainPowerHome, RockyMountainPowerAbout]
			},
			{
				title: 'Targeting High Schoolers',
				content: [
					"Education needs to evolve with the audience. We expanded the platform to include 'Energy Safe Leaders,' a dedicated experience geared towards high school students.",
					'Leveraging the same underlying technology, this site provides a more mature interface and age-appropriate content, proving the platform\'s flexibility to handle diverse target demographics within a single ecosystem.'
				],
				images: [EnergySafeLeadersHome, EnergySafeLeadersStudentResources]
			}
		]
	},
	{
		slug: 'wasatch-fabrication',
		title: 'Wasatch Fabrication',
		description:
			'From concept to launch in under 6 weeks. We partnered with Wasatch Fabrication to build a custom platform that manages their entire workflow.',
		image: WasatchFabrication,
		link: 'https://wasatchfabrication.com',
		features: [
			{
				title: 'Rapid Development',
				description:
					"We went from the initial idea to a fully launched product in under 6 weeks, proving that quality software doesn't have to take years to build.",
				icon: 'lightning'
			},
			{
				title: 'Admin & Customer Portals',
				description:
					'A powerful admin section for communication, invoicing, and payments, paired with a customer dashboard for tracking quote requests and progress.',
				icon: 'users'
			}
		],
		sections: [
			{
				title: 'Rapid Development',
				content: [
					'Speed was of the essence for Wasatch Fabrication. They needed to get their business operations up and running quickly to handle an influx of orders. We adopted an agile approach, prioritizing core features that delivered immediate value.',
					'By keeping the feedback loop tight and iterating daily, we were able to go from an idea to a fully functional production application in under 6 weeks. This included database design, API development, and the front-end user interfaces for both administrators and customers.'
				],
				images: [MarketingHome, MarketingService]
			},
			{
				title: 'Customer Portal',
				content: [
					'The customer portal is designed to provide transparency and ease of use for Wasatch Fabrication clients. Instead of relying on scattered emails, customers can log in to a centralized dashboard.',
					'From this dashboard, they can submit new quote requests, track the status of existing jobs, and communicate directly with the fabrication team. This self-service model reduces administrative overhead and improves customer satisfaction by providing real-time updates.'
				],
				images: [
					DashboardHome,
					DashboardQuotes,
					DashboardInvoices,
					DashboardPayInvoice,
					DashboardProfile
				]
			},
			{
				title: 'Admin Dashboard',
				content: [
					'Behind the scenes, the admin portal serves as the command center for the business. We built custom workflows to manage the entire lifecycle of a job, from initial inquiry to final delivery.',
					'Admins can quickly generate PDF invoices, collect payments via Stripe integration, and manage production schedules. The system also consolidates all communication, ensuring that no customer request falls through the cracks.'
				],
				images: [AdminDashboard, AdminQuote]

			}
		]
	}
];
