import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h1>Subscribe to Tubeguruji</h1>
      <Button>Hello</Button>
      
      <UserButton/>
    </div>
  );
}
