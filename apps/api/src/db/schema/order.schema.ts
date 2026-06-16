import { numeric, pgEnum, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from './helpers.schema';
import { menuItem } from './menu.schema';
import { restaurants } from './restaurant.schema';
import { users } from './user.schema';

export const orderStatusEnum = pgEnum('orderStatusEnum', [
  'PENDING', // placed, waiting for payment
  'CONFIRMED', // payment confirm by stripe webhook
  'PREPARING', // restaurant accepted and is cooking
  'READY', // ready for driver pickup
  'PICKED_UP', // driver has picked up the item
  'DELIVERED', // order delivered to the customer
  'CANCELLED', // order cancelled at any stage
]);

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id')
    .notNull()
    .references(() => users.id),
  restaurantId: uuid('restaurant_id')
    .notNull()
    .references(() => restaurants.id),
  driverId: uuid('driver_id').references(() => users.id),
  status: orderStatusEnum('status').notNull().default('PENDING'),
  totalAmount: numeric('total_amount', { precision: 10, scale: 2 }).notNull(),
  deliveryAddress: text('delivery_address').notNull(),
  stipePaymentIntentId: text('stripe_payment_intent_id'),
  ...timestamps,
});

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;

export const orderItems = pgTable('order_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id')
    .notNull()
    .references(() => orders.id, { onDelete: 'cascade' }),
  menuItemId: uuid('menu_item_id')
    .notNull()
    .references(() => menuItem.id, { onDelete: 'cascade' }),
  quantity: numeric('quantity').notNull(),
  unitPrice: numeric('unit_price', { precision: 10, scale: 2 }).notNull(),
  ...timestamps,
});

export type OrderItem = typeof orderItems.$inferSelect;
export type NewOrderItem = typeof orderItems.$inferInsert;
