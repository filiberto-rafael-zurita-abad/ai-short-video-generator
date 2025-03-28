import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Card({ title, content, buttonText }) {
  return (
    <div className="border rounded-md p-4 w-80 h-56">
      <h1 className="truncate mb-4">{title}</h1>
      <p className="overflow-hidden text-ellipsis whitespace-normal h-26">{content}</p>
      <Button>{buttonText}</Button>
      <UserButton />
    </div>
  );
}
