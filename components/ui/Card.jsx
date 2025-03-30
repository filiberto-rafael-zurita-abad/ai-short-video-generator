"use client"

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
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

  return (
    <div>
      <label htmlFor={`value-${title}`}>{title}</label>
      <input
        type="range"
        id={`value-${title}`}
        className="w-full"
        value={value}
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

export default function Card({ title, content, buttonText, slug, className, showButton, tableData, children,
  inputFields }) {
  return (
    
      <div className={`border rounded-md p-4 w-95 h-62 ${className || ""}`}>

        {/*Title*/}
        <div className="flex justify-between items-center">
          <h1 className="truncate mb-4">{title}</h1>
        </div>
        
        {/*Content*/}
        {content && <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>}

        {/*Input Fields*/}
        {inputFields && (
          <div className="flex flex-wrap">
            {inputFields.map((inputFieldTitle, index) => {
              const type = inputFieldTitle.split('-')[0];
              const title = inputFieldTitle.split('-')[1] || inputFieldTitle;

              let inputField;

              switch (type) {
                case "QS":
                  inputField = <QuantitySelector title={title} />;
                  break;
                case "VA":
                  inputField = <ValueAdjuster title={title} />;
                  break;
                case "CUI":
                  inputField = <CalendarUI title={title} />;
                  break;
                case "TS":
                  inputField = <TimeSelector title={title} />;
                  break;
                default:
                  inputField = (
                    <div>
                      <label htmlFor={`input-field-${index}`}>{title}</label>
                      <input
                        type="text"
                        id={`input-field-${index}`}
                        className="border rounded-md p-2 w-full"
                      />
                    </div>
                  );
              }

              return (
                <div key={index} className="w-full md:w-1/2">
                  {inputField}
                </div>
              );
            })}
          </div>
        )}

        {/*Table*/}
        {tableData && (
          <table>
            <thead>
              <tr>
                {tableData.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {children}

        {/*Button*/}
        <Link href={`/dashboard/${slug}`}>
          {showButton !== false && <Button>{buttonText}</Button>}
        </Link>
      </div>
   
  );
}
