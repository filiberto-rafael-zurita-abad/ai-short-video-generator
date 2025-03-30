"use client"

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const QuantitySelector = ({ title }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <label htmlFor={`quantity-${title}`}>{title}</label>
      <div className="flex items-center">
        <button onClick={decrement} className="bg-gray-200 px-2 py-1 rounded">-</button>
        <input
          type="number"
          id={`quantity-${title}`}
          className="border rounded-md p-2 w-16 text-center"
          value={quantity}
          readOnly
        />
        <button onClick={increment} className="bg-gray-200 px-2 py-1 rounded">+</button>
      </div>
    </div>
  );
};

const ValueAdjuster = ({ title }) => {
  const [value, setValue] = useState(50);
  const parts = title.split('-');
  const max = parts.length > 1 ? parseInt(parts[1]) : 100;
  const displayTitle = parts.length > 2 ? parts[2] : title;
  const percentage = Math.round((value / max) * 100);

  return (
    <div>
      <label htmlFor={`value-${displayTitle}`}>{displayTitle} - {percentage}% out of {max}%</label>
      <input
        type="range"
        id={`value-${displayTitle}`}
        className="w-full"
        value={value}
        max={max}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const CalendarUI = ({ title }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <label htmlFor={`calendar-${title}`}>{title}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="border rounded-md p-2 w-full"
      />
    </div>
  );
};

const TimeSelector = ({ title }) => {
  return (
    <div>
      <label htmlFor={`time-${title}`}>{title}</label>
      <input type="time" id={`time-${title}`} className="border rounded-md p-2 w-full" />
    </div>
  );
};

export { QuantitySelector, ValueAdjuster, CalendarUI, TimeSelector };
