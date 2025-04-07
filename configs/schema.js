import { boolean, pgTable, serial, varchar, integer, date, time, decimal, text } from "drizzle-orm/pg-core";

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
    date: date('date'),
    time: time('time'),
    type: varchar('type', { length: 255 }),
    weight: decimal('weight'),
    reps: integer('reps'),
    calories: decimal('calories'),
    startTime: time('start_time'),
    endTime: time('end_time'),
    totalTime: time('total_time'),
    note: text('note'),
});
