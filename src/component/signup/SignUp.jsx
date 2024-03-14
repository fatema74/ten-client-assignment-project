import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";


const SignUp = () => {
  const { creatUser } = useContext(AuthContext);

  const handleSingup = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);


    creatUser(email, password)
      .then(result =>
      {
        console.log(result.user)

        const createdAt = result.user?.metadata?.creationTime;


        const user = { email, createdAt: createdAt };
        fetch('http://localhost:5000/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
            console.log('user added to a datab?.');
          }
        })
      })
    .catch(err=>{console.log(err)})


  }
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">SignUp Now!</h1>
      <div className="mx-auto shrink-0 lg:w-1/2 md:w-3/4 shadow-2xl bg-base-100">
        <form onSubmit={handleSingup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sing Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;