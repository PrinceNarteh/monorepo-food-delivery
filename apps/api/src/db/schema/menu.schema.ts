import {
  boolean,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { restaurants } from './restaurant.schema';

export const menuCategories = pgTable('menu_categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  restaurantId: uuid('restaurant_id')
    .notNull()
    .references(() => restaurants.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type MenuCategory = typeof menuCategories.$inferSelect;
export type NewMenuCategory = typeof menuCategories.$inferInsert;

export const menuItem = pgTable('menu_item', {
  id: uuid('id').primaryKey().defaultRandom(),
  categoryId: uuid('category_id')
    .notNull()
    .references(() => menuCategories.id, { onDelete: 'cascade' }),
  restaurantId: uuid('restaurant_id')
    .notNull()
    .references(() => restaurants.id, { onDelete: 'cascade' }),
  name: text('name'),
  description: text('description'),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  imageUrl: text('image_url'),
  isAvailable: boolean('is_available').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type MenuItem = typeof menuItem.$inferSelect;
export type NewMenuItem = typeof menuItem.$inferInsert;
