import Swal from 'sweetalert2';

const AddCocaCola = () => {
  const handleAddCocacola = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const massege = form.massege.value;
    const photo = form.photo.value;
    const newCocacola = {
      name,
      brand,
      type,
      price,
      rating,
      massege,
      photo,
    };
    console.log(newCocacola);

    fetch('https://git-remote-rm-origin-et2f.onrender.com/cocacola', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCocacola),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Cocacola added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="bg-red-50">
      <h2 className="text-5xl text-center font-bold pt-5">
        Add Coca-Cola Brand
      </h2>
      <form onSubmit={handleAddCocacola} className="px-32 py-10">
        {/* one row */}
        <div className="md:flex gap-10 pt-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* two row */}
        <div className="md:flex gap-10 pt-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* three row */}
        <div className="md:flex gap-10 pt-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label htmlFor="" className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label htmlFor="" className="input-group">
              <textarea
                placeholder="Short description"
                name="massege"
                className="textarea textarea-bordered textarea-xs w-full"
              ></textarea>
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
              placeholder="photo url"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="pt-10">
          <input
            type="submit"
            value="Add Bottun"
            className="btn btn-block bg-white input-bordered"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCocaCola;
