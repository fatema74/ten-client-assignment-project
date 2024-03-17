import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CocaCard = ({ cocacola, cocacolas, setCocacolas }) => {
  const { _id, name, brand, type, price, rating, massege, photo } = cocacola;

  const handleDelete = _id => {
    console.log(_id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cocacola/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your cocacola has been deleted.',
                icon: 'success',
              });
              const remaining = cocacolas.filter(coca => coca._id !== _id);
              setCocacolas(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
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
                <span className="font-semibold">Short Massege: </span>
                {massege}
              </p>
            </div>
          </div>
          <div className="card-actions justify-center">
            <Link to={`details/${_id}`}>
              <button className="btn bg-red-300">View</button>
            </Link>
            <Link to={`updatecocacola/${_id}`}>
              <button className="btn bg-orange-400">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocaCard;
