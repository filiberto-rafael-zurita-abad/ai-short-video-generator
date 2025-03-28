import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Card({ title, content, buttonText, slug }) {
  return (
    <Link href={`/dashboard/${slug}`}>
      <div className="border rounded-md p-4 w-80 h-64">
        <h1 className="truncate">{title}</h1>
        <p className="overflow-hidden text-ellipsis whitespace-normal h-32">{content}</p>
        <Button>{buttonText}</Button>
        <UserButton />
      </div>
    </Link>
  );
}
