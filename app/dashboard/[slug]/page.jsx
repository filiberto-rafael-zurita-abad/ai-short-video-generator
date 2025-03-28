import { cardsData } from "@/app/dashboard/(data)/cardsData";

export default function CardPage({ params }) {
  const { slug } = params;
  const card = cardsData.find((card) => card.slug === slug);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.content}</p>
    </div>
  );
}
