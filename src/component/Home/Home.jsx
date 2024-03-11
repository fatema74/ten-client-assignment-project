import { useLoaderData } from "react-router-dom";
import CocaCard from "../cocaCard/CocaCard";
import { useState } from "react";


const Home = () => {

  const loadedCocacolas = useLoaderData();

  const [cocacolas, setCocacolas] = useState(loadedCocacolas)


  return (
    <div>
      <h2 className="text-5xl text-center font-bold pb-16">Coca-Cola Brand</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {cocacolas.map(cocacola => (
          <CocaCard
            key={cocacola._id}
            cocacola={cocacola}
            cocacolas={cocacolas}
            setCocacolas={setCocacolas}
          ></CocaCard>
        ))}
      </div>
    </div>
  );
};

export default Home;