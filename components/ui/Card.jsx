import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Card({ title, content, buttonText, slug, className, showButton, tableData, children,
  inputField, inputFieldTitle }) {
  return (
    
      <div className={`border rounded-md p-4 w-95 h-62 ${className || ""}`}>

        {/*Title*/}
        <div className="flex justify-between items-center">
          <h1 className="truncate mb-4">{title}</h1>
        </div>
        
        {/*Content*/}
        {content && <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>}

        {/*Input Field*/}
        {typeof inputField === 'object' ? (
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div  className="grid grid-rows-2">
              <label htmlFor="input-field-1">{inputField.title1}</label>
              <input
                type="text"
                id="input-field-1"
                className="border rounded-md p-2"
              />
            </div>
            <div  className="grid grid-rows-2 ">
              <label htmlFor="input-field-2">{inputField.title2}</label>
              <input
                type="text"
                id="input-field-2"
                className="border rounded-md p-2"
              />
            </div>
          </div>
        ) : inputField ? (
          <div className="grid grid-rows-2 gap-0">
            <label htmlFor="input-field-1">Input Field Title</label>
            <input
              type="text"
              id="input-field-1"
              className="border rounded-md p-2"
            />
          </div>
        ) : null}

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
