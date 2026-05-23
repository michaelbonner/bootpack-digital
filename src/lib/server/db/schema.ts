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
