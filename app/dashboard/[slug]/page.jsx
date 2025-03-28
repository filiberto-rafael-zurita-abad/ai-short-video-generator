import { cardsData } from "@/app/dashboard/(data)/cardsData";
import Banner from "@/components/ui/Banner";
import Card from "@/components/ui/Card";

export default async function CardPage({ params }) {
  const { slug } = await params;
  const card = cardsData.find((card) => card.slug === slug);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <Banner title={card.title} content={card.content} />
      {slug === "dashboard-content-2" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <Card
            title="Card 1"
            content="This is the first card."
            buttonText="Click me"
            slug="card-1"
            className="!w-full"
          />
          <Card
            title="Card 2"
            content="This is the second card."
            buttonText="Click me"
            slug="card-2"
            className="!w-full"
          />
        </div>
      )}

      {slug == "dashboard-content-2" && (
        <div className="mt-4">
          <Card 
            title="Card 3"
            className="!w-full"
            showButton={false}
            tableData={{
              headers: ["hello", "world"],
              rows: [
                [1, 6],
                [2, 7],
                [3, 8],
                [4, 9],
                [5, 10],
              ],
            }}
        />
        </div>
      )}

      {slug == "dashboard-content-2" && (
        <div className="mt-4">
          <Card 
            title="Card 4"
            className="!w-full"
            showButton={false}          
        />
        </div>
      )}
  </div>
  ); }