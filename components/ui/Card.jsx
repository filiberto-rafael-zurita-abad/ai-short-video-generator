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
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import workoutTypes from "@/app/dashboard/(data)/WorkoutTypes";
import { toast } from 'react-toastify';

export default function Card({ title, content, buttonText, slug, showButton, tableData, children,
  inputFields, className = "" }) {
  // State variables for weight conversion
  const [weightKg, setWeightKg] = useState("");
  const [weightLb, setWeightLb] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  const [CRP, setCRP] = useState("");

  const { user } = useUser();
 

  // Conversion functions
  const kgToLb = (kg) => {
    if (kg === "") return "";
    return (kg * 2.20462).toFixed(2);
  };
 

  const lbToKg = (lb) => {
    if (lb === "") return "";
    return (lb * 0.453592).toFixed(2);
  };

  const handleAddWorkout = async () => {
    if (isNaN(Number(weightKg)) || isNaN(Number(weightLb)) || isNaN(Number(CRP))) {
      toast.error("Weight (Kg), Weight (lb), and CRP must be numeric values.");
      return;
    }

    try {
      const newWorkout = {
        Id: workoutTypes.rows.length + 1,
        User: user?.primaryEmailAddress?.emailAddress || "unknown",
        DateTime: new Date().toLocaleString(),
        Name: workoutName,
        WeightKg: weightKg,
        WeightLb: weightLb,
        CRP: CRP,
      };

      const response = await fetch('/api/add-workout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ workout: newWorkout }),
      });

      if (response.ok) {
        toast.success('Workout added successfully!');
        setWorkoutName("");
        setWeightKg("");
        setWeightLb("");
        setCRP("");
      } else {
        toast.error(`Error adding workout: ${response.statusText}`);
      }
    } catch (error) {
      toast.error(`Error adding workout: ${error}`);
    }
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

                  if (title === "Workout Name") {
                    inputValue = workoutName;
                    onChangeHandler = (e) => {
                      setWorkoutName(e.target.value);
                    };
                  } else if (title === "Weight (Kg)") {
                    inputValue = weightKg;
                    onChangeHandler = (e) => {
                      const newWeightKg = e.target.value;
                      setWeightKg(newWeightKg);
                      setWeightLb(kgToLb(newWeightKg));
                    };
                  } else if (title === "Weight (lb)") {
                    inputValue = weightLb;
                    onChangeHandler = (e) => {
                      const newWeightLb = e.target.value;
                      setWeightLb(newWeightLb);
                      setWeightKg(lbToKg(newWeightLb));
                    };
                  } else if (title === "CRP") {
                    inputValue = CRP;
                    onChangeHandler = (e) => {
                      setCRP(e.target.value);
                    };
                  }

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
        
        <div className={className} style={{display: "inline-block", alignSelf: "flex-start"}}>
          <Link href={`/dashboard/${slug}`}>
            {showButton !== false && <Button onClick={handleAddWorkout}>{buttonText}</Button>}
          </Link>
        </div>
      </div>
   
  );
}
