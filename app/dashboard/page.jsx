import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <h1>Dashboard Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, urna id volutpat tincidunt, nisi elit aliquet nisl, nec
            ultrices nisi elit id justo. Sed euismod, urna id volutpat
            tincidunt.
          </p>
          <Button>Click me</Button>
          <UserButton />
        </main>
      </div>
    </div>
  );
}
