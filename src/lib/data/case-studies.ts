import WasatchFabrication from '../../images/work/wasatch-fabrication.jpg?enhanced';
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
        imageAlt?: string;
    }[];
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'wasatch-fabrication',
		title: 'Wasatch Fabrication',
		description: 'From concept to launch in under 6 weeks. We partnered with Wasatch Fabrication to build a custom platform that manages their entire workflow.',
		image: WasatchFabrication,
		link: 'https://wasatchfabrication.com',
		features: [
			{
				title: 'Rapid Development',
				description: "We went from the initial idea to a fully launched product in under 6 weeks, proving that quality software doesn't have to take years to build.",
                icon: 'lightning'
			},
			{
				title: 'Admin & Customer Portals',
				description: 'A powerful admin section for communication, invoicing, and payments, paired with a customer dashboard for tracking quote requests and progress.',
                icon: 'users'
			}
		],
        sections: [
            {
                title: 'Rapid Development',
                content: [
                    'Speed was of the essence for Wasatch Fabrication. They needed to get their business operations digitalized quickly to handle an influx of orders. We adopted an agile approach, prioritizing core features that delivered immediate value.',
                    'By keeping the feedback loop tight and iterating daily, we were able to go from a napkim sketch to a fully functional production application in under 6 weeks. This included database design, API development, and the front-end user interfaces for both administrators and customers.'
                ]
            },
            {
                title: 'Customer Portal',
                content: [
                    'The customer portal is designed to provide transparency and ease of use for Wasatch Fabrication clients. Instead of relying on scattered emails, customers can log in to a centralized dashboard.',
                    'From this dashboard, they can submit new quote requests, track the status of existing jobs, and communicate directly with the fabrication team. This self-service model reduces administrative overhead and improves customer satisfaction by providing real-time updates.'
                ]
            },
            {
                title: 'Admin Dashboard',
                content: [
                    'Behind the scenes, the admin portal serves as the command center for the business. We built custom workflows to manage the entire lifecycle of a job, from initial inquiry to final delivery.',
                    'Admins can quickly generate PDF invoices, collect payments via Stripe integration, and manage production schedules. The system also consolidates all communication, ensuring that no customer request falls through the cracks.'
                ]
            }
        ]
	}
];
