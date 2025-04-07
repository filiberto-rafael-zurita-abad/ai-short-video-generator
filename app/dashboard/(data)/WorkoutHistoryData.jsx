import { db } from '@/configs/db';
import { WorkoutHistory } from '@/configs/schema';
import { eq } from 'drizzle-orm';

export const getWorkoutHistory = async (setDataCallback) => {
  try {
    const data = await db.select({
      id: WorkoutHistory.id,
      userId: WorkoutHistory.userId,
      datetime: WorkoutHistory.datetime,
      type: WorkoutHistory.type,
      weight: WorkoutHistory.weight,
      series: WorkoutHistory.series,
      reps: WorkoutHistory.reps,
      cpr: WorkoutHistory.cpr,
      calories: WorkoutHistory.calories,
    }).from(WorkoutHistory);
    if (data) {
      const rows = data.map(item => [
        item.id,
        item.userId,
        item.datetime,
        item.type,
        item.weight,
        item.series,
        item.reps,
        item.cpr,
        item.calories
      ]);
      setDataCallback({
        headers: ["Id", "User", "Datetime", "Type", "Weight", "Series", "Reps", "CPR", "Calories"],
        rows: rows
      });
    }
  } catch (error) {
    console.error("Error fetching workout history:", error);
  }
};

export const deleteRow = async (id) => {
  try {
    await db.delete(WorkoutHistory).where(eq(WorkoutHistory.id, id));
    const result = await db.select({
      id: WorkoutHistory.id,
      userId: WorkoutHistory.userId,
      datetime: WorkoutHistory.datetime,
      type: WorkoutHistory.type,
      weight: WorkoutHistory.weight,
      series: WorkoutHistory.series,
      reps: WorkoutHistory.reps,
      cpr: WorkoutHistory.cpr,
      calories: WorkoutHistory.calories,
    }).from(WorkoutHistory);
    return result;
  } catch (error) {
    console.error("Error deleting workout history:", error);
    return null;
  }
};
