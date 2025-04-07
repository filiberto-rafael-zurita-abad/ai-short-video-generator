"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Table from "./Table";
import { useState } from 'react';
import WorkoutHistoryData from "@/app/dashboard/(data)/WorkoutHistoryData";

export default function Card({ title, content, buttonText, slug, className, showButton, 
  tableData, children }) {
    const [workoutData, setWorkoutData] = useState(tableData);

  return (
    
      <div className={`border rounded-md p-4 ${className || ""}`}>

        {/*Title*/}
        <div className="flex justify-between items-center">
          <h1 className="truncate mb-4">{title}</h1>
        </div>
        
        {/*Content*/}
        {content && <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>}

        {/*Table*/}
        {workoutData && <Table rows={workoutData.rows} headers={workoutData.headers} setWorkoutData={setWorkoutData} />}

        {children}


        {/*Button*/}
        <Link href={`/dashboard/${slug}`}>
          {showButton !== false && <Button>{buttonText}</Button>}
        </Link>
      </div>
   
  );
}
