import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Subscribe to Tubeguruji</h1>
      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
      
      
      <UserButton/>
    </div>
  );
}
