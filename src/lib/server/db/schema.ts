import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const contactSubmissions = pgTable('contact_submissions', {
	id: serial('id').primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text('email').notNull(),
	company: text('company'),
	phone: text('phone'),
	message: text('message').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;

export const freeWebsiteApplications = pgTable('free_website_applications', {
	id: serial('id').primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text('email').notNull(),
	phone: text('phone'),
	organizationName: text('organization_name').notNull(),
	organizationType: text('organization_type'),
	website: text('website'),
	city: text('city').notNull(),
	mission: text('mission').notNull(),
	goals: text('goals').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

export type FreeWebsiteApplication = typeof freeWebsiteApplications.$inferSelect;
export type NewFreeWebsiteApplication = typeof freeWebsiteApplications.$inferInsert;
