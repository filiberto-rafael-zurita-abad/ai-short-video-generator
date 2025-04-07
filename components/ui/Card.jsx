"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Table from "./Table";
import { useState, useEffect, useCallback } from 'react';
import { getWorkoutHistory } from "@/app/dashboard/(data)/WorkoutHistoryData";

export default function Card({ title, content, buttonText, slug, className, showButton,
  tableData, children }) {
  const [workoutData, setWorkoutData] = useState(null);

  const fetchData = useCallback(async () => {
    if (tableData) {
      const data = await getWorkoutHistory();
      if (data) {
        setWorkoutData({
          headers: ["Id", "User", "Datetime", "Type", "Weight", "Series", "Reps", "CPR", "Calories"],
          rows: data.map(item => [
            item.id,
            item.userId,
            item.datetime,
            item.type,
            item.weight,
            item.series,
            item.reps,
            item.cpr,
            item.calories
          ])
        });
      }
    }
  }, [tableData]);

  useEffect(() => {
    fetchData();
  }, [fetchData, tableData]);

  return (

    <div className={`border rounded-md p-4 ${className || ""}`}>

      {/*Title*/}
      <div className="flex justify-between items-center">
        <h1 className="truncate mb-4">{title}</h1>
      </div>

      {/*Content*/}
      {content && <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>}

      {/*Input Fields*/}

      {/*Table*/}
      {tableData && workoutData && <Table rows={workoutData.rows} headers={workoutData.headers} setWorkoutData={fetchData} />}

      {children}


      {/*Button*/}
      <Link href={`/dashboard/${slug}`}>
        {showButton !== false && <Button>{buttonText}</Button>}
      </Link>
    </div>

  );
}
