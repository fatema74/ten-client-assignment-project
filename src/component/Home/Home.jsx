import { useLoaderData } from "react-router-dom";
import CocaCard from "../cocaCard/CocaCard";


const Home = () => {

  const cocacolas = useLoaderData();


  return (
    <div>
      <h2 className="text-5xl text-center font-bold py-6">
        Cocacola item: {cocacolas.length}
      </h2>

      <div className="grid md:grid-cols-2 px-10 gap-6">
        {cocacolas.map(cocacola => (
          <CocaCard key={cocacola._id} cocacola={cocacola}></CocaCard>
        ))}
      </div>
    </div>
  );
};

export default Home;