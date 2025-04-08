"use client";

import React, { useState, useEffect } from 'react';

const InputFieldsBox = ({ inputfields, cardId }) => {
  let gridClass = "grid gap-4 ";

  if (!inputfields) {
    return null;
  }

  const [workoutName, setWorkoutName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [caloriesPerRep, setCaloriesPerRep] = useState('');
  const [totalCalories, setTotalCalories] = useState('');

  if (inputfields.length === 1) {
    gridClass += " grid-cols-1";
  } else if (inputfields.length === 2) {
    gridClass += " lg:grid-cols-2 sm:grid-cols-1";
  } else if (inputfields.length >= 3) {
    gridClass += "  lg:grid-cols-2 sm:grid-cols-1";
  }

  useEffect(() => {
    if (cardId === 'workout-app') {
      const calculateTotalCalories = () => {
        const setsValue = parseFloat(sets) || 0;
        const repsValue = parseFloat(reps) || 0;
        const caloriesPerRepValue = parseFloat(caloriesPerRep) || 0;
        const total = setsValue * repsValue * caloriesPerRepValue;
        setTotalCalories(total.toFixed(2));
      };

      calculateTotalCalories();
    }
  }, [sets, reps, caloriesPerRep, cardId]);

  return (
    <div className={gridClass}>
      {inputfields && inputfields.map((field, index) => {
        const [title, type] = field.split(" - ");
        // Generate a unique name/id
        const name = title.toLowerCase().replace(/[^a-z0-9]/g, '');
        let inputProps = {
          type: type === "number" ? "number" : "text",
          name: name,
          id: name,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-lg p-2",
          onChange: (e) => {
            let value = e.target.value;
            if (type === "number") {
              value = value.replace(/[^0-9.]/g, ''); // Allow only numbers and decimals
            }
            if (name === 'workoutname') {
              setWorkoutName(value);
            } else if (name === 'sets') {
              setSets(value);
            } else if (name === 'repsperset') {
              setReps(value);
            } else if (name === 'weightkg') {
              setWeight(value);
            } else if (name === 'caloriesperrep') {
              setCaloriesPerRep(value);
            } else if (name === 'totalcalories') {
              setTotalCalories(value);
            }
          },
          value: name === 'workoutname' ? workoutName : name === 'sets' ? sets : name === 'repsperset' ? reps : name === 'weightkg' ? weight : name === 'caloriesperrep' ? caloriesPerRep : name === 'totalcalories' ? totalCalories.toString() : '',
          readOnly: name === 'totalcalories',
        };

        return (
          <div key={index}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{title}</label>
            <input {...inputProps} />
          </div>
        );
      })}
    </div>
  );
};

export default InputFieldsBox;
