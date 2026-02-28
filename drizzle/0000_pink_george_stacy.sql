CREATE TABLE "contact_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(120) NOT NULL,
	"email" varchar(255) NOT NULL,
	"company" varchar(160),
	"website" varchar(255),
	"service" varchar(120) NOT NULL,
	"description" varchar(2000) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
