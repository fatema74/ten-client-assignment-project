import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
  const { id } = useParams();
  // console.log(id);
  
  const details = useLoaderData();
  // console.log(details._id);

  const cardDetails = details.find((data) => data._id === id);
  // console.log(cardDetails);





  const {  name, brand, type, price, rating, massege, photo } = cardDetails;


  return (
    <div>
      <h2 className="text-5xl font-bold mb-6">details: {details.length}</h2>

      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" className="h-96 w-full" />
        </figure>
        <div className="card-body">
          <div className="">
            <div className="py-3">
              <h2 className="text-3xl font-semibold">Brand Name: {brand}</h2>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Name: {name}</h4>
            </div>
            <div className="py-3 text-xl font-semibold">
              <p>Type: {type}</p>
            </div>
            <div className="flex justify-between text-xl font-semibold text-red-400">
              <p>Price: {price}</p>
              <p>Rating: {rating}</p>
            </div>
            <div className="text-xl">
              <p className="py-3">
                <span className="font-bold text-xl">Short Massege: </span>
                {massege}In 2022, we continued to build a portfolio of loved
                beverage brands while building a more sustainable future for our
                business, communities and planet. We have an opportunity to use
                our scale to address global challenges and create a force for
                good. Our Business & Sustainability Report aims to provide a
                transparent look at our actions, progress and learnings.
              </p>
              <p>
                <span className="text-xl font-bold">Communities: </span>
                We also began mapping priority communities, based on their lack
                of access to water, sanitation and hygiene (WASH) and resilience
                to waterrelated impacts of climate change (e.g., floods and
                droughts), with a focus on communities close to our facilities,
                and/or in urban growth centers where we sell our products, and/
                or in rural farming communities where we source ingredients. By
                mapping and overlaying our priority facilities, watersheds and
                communities, we have developed a framework of prioritization and
                a deeper understanding of risks, which will help us develop
                holistic, integrated and context-based approaches to help
                increase water security where it matters the most in our
                business, operations and supply chains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;