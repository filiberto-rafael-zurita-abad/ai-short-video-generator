import { cardsData } from "@/app/dashboard/(data)/cardsData";
import Banner from "@/components/ui/Banner";
import Card from "@/components/ui/Card";
import tableData from "@/app/dashboard/(data)/TableCard"; 

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
            title="Card 1: Workout App"
            content="This is the first card."
            buttonText="Click me"
            slug="card-1"
            className="!w-full"
          />
          <Card
            title="Card 2: Add Workout"
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
            title="Card 3: Workout History"
            className="!w-full"
            showButton={false}
            tableData={tableData}
        />
        </div>
      )}

      {slug == "dashboard-content-2" && (
        <div className="mt-4">
          <Card 
            title="Card 4: Workout Types"
            className="!w-full"
            showButton={false}          
        />
        </div>
      )}
  </div>
  ); }
