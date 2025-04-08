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
          <div key={index} className="relative">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{title}</label>
            <input {...inputProps} style={{ paddingRight: '25px' }} />
            {name === 'caloriesperrep' && (
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="absolute right-2 top-1/2 transform translate-y-2 h-4 w-4 text-gray-500"
              >
                <g clipPath="url(#a)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1"
                    fill="#666"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default InputFieldsBox;
