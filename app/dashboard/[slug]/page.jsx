import { cardsData } from "@/app/dashboard/(data)/cardsData";
import Banner from "@/components/ui/Banner";
import Card from "@/components/ui/Card";
import workoutHistory from "@/app/dashboard/(data)/WorkoutHistory";
import workoutTypes from "../(data)/WorkoutTypes";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 ">
          <Card
            title="Card 1: Workout App"
            content="This is the first card."
            buttonText="Add Excercise"
            slug="card-1"
            className="!w-full min-h-68"
          />
          <Card
            title="Card 2: Add Workout"
            buttonText="Add Workout"
            slug="card-2"
            className="!w-full grid grid-cols-1 gap-4 min-h-68"
            inputFields={["Workout Name", "Weight (Kg)", "Weight (lb)", "CRP"]}
          />
            
        </div>
      )}

      {slug == "dashboard-content-2" && (
        <div className="mt-4">
          <Card 
            title="Card 3: Workout History"
            className="!w-full"
            showButton={false}
            tableData={workoutHistory}
        />
        </div>

        
      )}

      {slug == "dashboard-content-2" && (
        <div className="mt-4">
          <Card 
            title="Card 4: Workout Types"
            className="!w-full"
            showButton={false}      
            tableData={workoutTypes}    
        />
        </div>
      )}
  </div>
  ); }
