

const CocaCard = ({ cocacola }) => {
  
  const { name, quantity, supplier, taste, category, details, photo, } = cocacola;
  

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" className="h-96 w-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <div className="text-xl">
            <p className="pb-3">
              <span className="font-semibold">Quantity:</span> {quantity}
            </p>
            <p className="pb-3">
              <span className="font-semibold">Supplier</span> Md: {supplier}
            </p>
            <p className="pb-3">
              <span className="font-semibold">Taste:</span> {taste}
            </p>
            <p className="pb-3">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="pb-3">
              <span className="font-semibold">Details:</span> {details}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical">
              <button className="btn btn-active">Info</button>
              <button className="btn">Success</button>
              <button className="btn">Warning</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocaCard;