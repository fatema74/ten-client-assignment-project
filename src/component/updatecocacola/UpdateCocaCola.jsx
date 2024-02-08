import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCocaCola = () => {
  const cocacola = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } = cocacola;
  
  const handleUpdateCocacola = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCocacola = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCocacola);

    fetch(
      `https://ten-assignment-project-61qhs5ztk-kanis-fatemas-projects.vercel.app/cocacola/${_id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateCocacola),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'success!',
            text: 'Cocacola Updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };
  
  return (
    <div className="bg-red-50">
      <h2 className="text-5xl text-center font-bold pt-5">Update Cocacola</h2>
      <form onSubmit={handleUpdateCocacola} className="px-32 py-10">
        {/* one row */}
        <div className="md:flex gap-10 pt-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Cocacola Name</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="cocacola name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* two row */}
        <div className="md:flex gap-10 pt-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="cocacola supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* three row */}
        <div className="md:flex gap-10 pt-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Cocacola Category</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="cocacola category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Cocacola Details</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="cocacola details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="form-control pt-6">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label htmlFor="" className="input-group">
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="photo url"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="pt-10">
          <input
            type="submit"
            value="Update Cocacola"
            className="btn btn-block bg-white input-bordered"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCocaCola;