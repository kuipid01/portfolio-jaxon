import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 160 }),
  website: varchar("website", { length: 255 }),
  service: varchar("service", { length: 120 }).notNull(),
  description: varchar("description", { length: 2000 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type InsertContactRequest = typeof contactRequests.$inferInsert;
export type SelectContactRequest = typeof contactRequests.$inferSelect;
