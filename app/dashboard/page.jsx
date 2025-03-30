import Card from "@/components/ui/Card";
import { cardsData } from "./(data)/cardsData";

export default function Home() {
  return (
    <div className="flex flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} slug={card.slug} />
      ))}
    </div>
  );
}
