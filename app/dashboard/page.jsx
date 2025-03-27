import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Dashboard Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        urna id volutpat tincidunt, nisi elit aliquet nisl, nec ultrices nisi
        elit id justo. Sed euismod, urna id volutpat tincidunt.
      </p>
      <Button>Click me</Button>
      <UserButton />
    </div>
  );
}
