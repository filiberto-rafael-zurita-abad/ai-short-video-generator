async function seedDatabase() {
  try {
    const { db } = await import('@/configs/db');
    const { Workouts } = await import('@/configs/schema');
    const workoutHistory = (await import('@/app/dashboard/(data)/WorkoutHistory')).default;

    for (const workout of workoutHistory.rows) {
      await db.insert(Workouts).values({
        userId: 1, // Replace with the actual user ID
        workoutType: workout[4],
        dateTime: workout[3],
        weight: workout[5],
        reps: workout[6],
        calories: workout[7],
        startTime: workout[8],
        endTime: workout[9],
        totalTime: workout[10],
        note: workout[11],
      });
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();
