import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Card({ title, content, buttonText, slug }) {
  return (
    <Link href={`/dashboard/${slug}`}>
      <div className="border rounded-md p-4 w-95 h-62">
        <div className="flex justify-between items-center">
          <h1 className="truncate mb-4">{title}</h1>
          
        </div>
        <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>
        <Button>{buttonText}</Button>
      </div>
    </Link>
  );
}
