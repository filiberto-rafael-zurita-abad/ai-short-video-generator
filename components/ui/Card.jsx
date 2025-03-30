"use client"

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  QuantitySelector,
  ValueAdjuster,
  CalendarUI,
  TimeSelector,
} from "@/components/ui/input-fields";
import WorkoutTable from "@/components/WorkoutTable";
import { useState } from "react";

export default function Card({ title, content, buttonText, slug, className, showButton, tableData, children,
  inputFields }) {
  // State variables for weight conversion
  const [weightKg, setWeightKg] = useState("0");
  const [weightLb, setWeightLb] = useState("0");
 

  // Conversion functions
  const kgToLb = (kg) => {
    if (kg === "") return "";
    return (kg * 2.20462).toFixed(2);
  };
 

  const lbToKg = (lb) => {
    if (lb === "") return "";
    return (lb * 0.453592).toFixed(2);
  };
 

  return (
    
      <div className={`flex flex-col justify-between border rounded-md p-4 w-95  ${className || ""}`}>

        {/*Title*/}
        <div className="flex justify-between items-center">
          <h1 className="truncate">{title}</h1>
        </div>
        
        {/*Content*/}
        {content && <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>}

        {/*Input Fields*/}
        {inputFields && (
          <div className="flex flex-wrap gap-4">
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
                  let inputValue = "";
                  let onChangeHandler = null;
 

                  if (title === "Weight (Kg)") {
                    inputValue = weightKg;
                  } else if (title === "Weight (lb)") {
                    inputValue = weightLb;
                  }
 

                  onChangeHandler = (e) => {
                    if (title === "Weight (Kg)") {
                      const newWeightKg = e.target.value;
                      setWeightKg(newWeightKg);
                      setWeightLb(kgToLb(newWeightKg));
                    } else if (title === "Weight (lb)") {
                      const newWeightLb = e.target.value;
                      setWeightLb(newWeightLb);
                      setWeightKg(lbToKg(newWeightLb));
                    }
                  };
 

                  inputField = (
                    <div>
                      <label htmlFor={`input-field-${index}`}>{title}</label>
                      <input
                        type="text"
                        id={`input-field-${index}`}
                        className="border rounded-md p-2 w-full"
                        value={inputValue}
                        onChange={onChangeHandler}
                      />
                    </div>
                  );
              }

              return (
                <div key={index} className="w-full md:w-70">
                  {inputField}
                </div>
              );
            })}
          </div>
        )}

        {/*Table*/}
        {tableData && (
          <WorkoutTable headers={tableData.headers} rows={tableData.rows} />
        )}

        {children}

        {/*Button*/}
        
        <Link href={`/dashboard/${slug}`}>
          {showButton !== false && <Button>{buttonText}</Button>}
        </Link>
      </div>
   
  );
}
