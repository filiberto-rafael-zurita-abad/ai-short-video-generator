import workoutTypes from "@/app/dashboard/(data)/WorkoutTypes";

export const addWorkoutType = (newWorkout) => {
  workoutTypes.rows.push([
    newWorkout.Id,
    newWorkout.User,
    newWorkout.DateTime,
    newWorkout.Name,
    newWorkout.WeightKg,
    newWorkout.WeightLb,
    newWorkout.CRP,
  ]);
};
