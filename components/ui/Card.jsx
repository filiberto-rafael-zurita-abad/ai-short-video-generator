import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

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
            {inputFields.map((inputFieldTitle, index) => (
              <div key={index} className="w-full md:w-1/2">
                <label htmlFor={`input-field-${index}`}>{inputFieldTitle}</label>
                <input
                  type="text"
                  id={`input-field-${index}`}
                  className="border rounded-md p-2 w-full"
                />
              </div>
            ))}
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
