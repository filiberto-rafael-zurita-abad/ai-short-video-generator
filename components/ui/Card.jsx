import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Card({ title, content, buttonText }) {
  return (
    <div className="border rounded-md p-4">
      <h1>{title}</h1>
      <p>{content}</p>
      <Button>{buttonText}</Button>
      <UserButton />
    </div>
  );
}
