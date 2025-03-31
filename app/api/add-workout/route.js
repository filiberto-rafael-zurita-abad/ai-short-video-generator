import { NextResponse } from 'next/server';
import * as fs from 'fs/promises';

export async function POST(request) {
  try {
    const { workout } = await request.json();
    const workoutTypesPath = "app/dashboard/(data)/WorkoutTypes.jsx";

    // Read the content of WorkoutTypes.jsx
    const workoutTypesModule = await import(`@/app/dashboard/(data)/WorkoutTypes`);
    let workoutTypes = workoutTypesModule.default;

    workoutTypes.rows.push([
      workout.Id,
      workout.User,
      workout.DateTime,
      workout.Name,
      workout.WeightKg,
      workout.WeightLb,
      workout.CRP,
    ]);

    // Convert the updated workoutTypes object back to a string
    const updatedWorkoutTypesString = `let workoutTypes = ${JSON.stringify(workoutTypes, null, 2)};\n\nexport default workoutTypes;`;

    // Write the updated content back to WorkoutTypes.jsx
    await fs.writeFile(workoutTypesPath, updatedWorkoutTypesString);

    return NextResponse.json({ message: 'Workout added successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error adding workout:', error);
    return NextResponse.json({ message: 'Error adding workout' }, { status: 500 });
  }
}
