"use client";

import React from 'react';

const InputFieldsBox = ({ inputfields }) => {
  let gridClass = "grid gap-4 ";

  if (!inputfields) {
    return null;
  }

  if (inputfields.length === 1) {
    gridClass += " grid-cols-1";
  } else if (inputfields.length === 2) {
    gridClass += " lg:grid-cols-2 sm:grid-cols-1";
  } else if (inputfields.length >= 3) {
    gridClass += "  lg:grid-cols-2 sm:grid-cols-1";
  }

  return (
    <div className={gridClass}>
      {inputfields && inputfields.map((field, index) => {
        const [title, type, name] = field.split(" - ");
        return (
          <div key={index}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{title}</label>
            <input
              type={type === "number" ? "number" : "text"}
              name={name}
              id={name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-lg p-2"
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputFieldsBox;
