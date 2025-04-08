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
            title="Card 1: Workout App"
            buttonText="Click me"
            slug="card-1"
            className="!w-full"
            inputfields={[
              "Workout Name - Text",
              "Sets - number",
              "Reps per Set - number",
              "Weight (Kg) - number",
              "Calories per Rep - number",
              "Total Calories - number",
            ]}
            cardId="workout-app"
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
            tableData={{}}
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
