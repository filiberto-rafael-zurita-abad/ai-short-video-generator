import { boolean, pgTable, serial, varchar, integer, date, time, decimal, text, timestamp } from "drizzle-orm/pg-core";

export const Users=pgTable('users', {
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl'),
    subscription:boolean('subscription').default(false)
});

export const WorkoutHistory = pgTable('workout_history', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => Users.id),
    datetime: timestamp('datetime'),
    type: varchar('type', { length: 255 }),
    weight: decimal('weight'),
    series: integer('series'),
    reps: integer('reps'),
    cpr: integer('cpr'),
    calories: decimal('calories'),
});
