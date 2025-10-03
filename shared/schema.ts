import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const tasks = pgTable("tasks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  category: text("category").notNull(),
  deadline: timestamp("deadline").notNull(),
  completed: boolean("completed").notNull().default(false),
  description: text("description"),
});

export const insertTaskSchema = createInsertSchema(tasks).omit({
  id: true,
});

export type InsertTask = z.infer<typeof insertTaskSchema>;
export type Task = typeof tasks.$inferSelect;

export const categories = [
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'labs', label: 'Labs' },
  { id: 'projects', label: 'Projects' },
  { id: 'semester', label: 'Current Sem' },
  { id: 'learning', label: 'Learning Paths' },
] as const;

export type CategoryId = typeof categories[number]['id'];
