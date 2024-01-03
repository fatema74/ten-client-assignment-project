
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CocaCard = ({ cocacola, cocacolas, setCocacolas }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    cocacola;

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
          <div className="card-actions justify-end ">
            <button className="btn bg-red-300">View</button>
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