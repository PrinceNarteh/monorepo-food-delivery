import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from './helpers.schema';
import { orders } from './order.schema';
import { restaurants } from './restaurant.schema';
import { users } from './user.schema';

export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id')
    .notNull()
    .references(() => users.id),
  restaurantId: uuid('restaurant_id')
    .notNull()
    .references(() => restaurants.id),
  orderId: uuid('order_id')
    .notNull()
    .references(() => orders.id),
  driverId: uuid('driver_id').references(() => users.id),
  restaurantRating: integer('restaurant_rating').notNull(),
  driverRating: integer('driver_rating').notNull(),
  comments: text('comments'),
  ...timestamps,
});

export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
