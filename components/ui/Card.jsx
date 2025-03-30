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



export default function Card({ title, content, buttonText, slug, className, showButton, tableData, children,
  inputFields }) {
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
                <div key={index} className="w-full md:w-70">
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
