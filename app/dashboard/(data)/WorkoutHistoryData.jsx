import { db } from '@/configs/db';
import { WorkoutHistory } from '@/configs/schema';
import { eq } from 'drizzle-orm';

export const getWorkoutHistory = async () => {
  try {
    const result = await db.select().from(WorkoutHistory);
    return result;
  } catch (error) {
    console.error("Error fetching workout history:", error);
    return [];
  }
};

export const deleteRow = async (id) => {
  try {
    await db.delete(WorkoutHistory).where(eq(WorkoutHistory.id, id));
    const result = await db.select().from(WorkoutHistory);
    return result;
  } catch (error) {
    console.error("Error deleting workout history:", error);
    return null;
  }
};

const WorkoutHistoryData = {
    headers: ["Id","User", "Date", "Time", "Type","Weight", "Reps","Calories", "Start Time", "End Time", "Total Time", "Note"],
    rows: []
  };
  
  export default WorkoutHistoryData;
