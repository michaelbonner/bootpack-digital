CREATE TABLE "free_website_applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"organization_name" text NOT NULL,
	"organization_type" text,
	"website" text,
	"city" text NOT NULL,
	"mission" text NOT NULL,
	"goals" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
