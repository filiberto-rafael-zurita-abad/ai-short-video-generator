import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Card from "@/components/ui/Card";
import { cardsData } from "./(data)/cardsData";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card {...cardsData} />
      <Card {...cardsData} />
      <Card {...cardsData} />
    </div>
  );
}
