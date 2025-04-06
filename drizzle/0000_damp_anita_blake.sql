CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"image_uel" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "workouts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"date_time" varchar(255),
	"name" varchar(255),
	"weight_kg" double precision,
	"weight_lb" double precision,
	"cpr" integer
);
