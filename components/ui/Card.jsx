"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Table from "./Table";
import InputFieldsBox from "./InputFieldsBox";
import { useState, useEffect } from 'react';
import { getWorkoutHistory } from "@/app/dashboard/(data)/WorkoutHistoryData";

export default function Card({ title, content, buttonText, slug, className, showButton,
  tableData, children, inputfields }) {
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    if (tableData) {
      getWorkoutHistory(setWorkoutData);
    }
  }, [tableData]);

  return (

    <div className={`border rounded-md p-4 ${className || ""}`}>

      {/*Title*/}
      <div className="flex justify-between items-center">
        <h1 className="truncate mb-2">{title}</h1>
      </div>

      {/*Content*/}
      {content && <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>}

      {/*Input Fields*/}
      <InputFieldsBox inputfields={inputfields} />

      {/*Table*/}
      {workoutData && <Table rows={workoutData.rows} headers={workoutData.headers} setWorkoutData={getWorkoutHistory} />}

      {children}


      {/*Button*/}
      <div className="mt-4">
      <Link href={`/dashboard/${slug}`}>
        {showButton !== false && <Button>{buttonText}</Button>}
      </Link>
      </div>
    </div>

  );
}
