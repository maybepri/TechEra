import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { products } from "./schema";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").notNull().references(() => products.id),
  customerEmail: text("customer_email").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertOrderSchema = createInsertSchema(orders).omit({ id: true, createdAt: true });

export type Order = typeof orders.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
