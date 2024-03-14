import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";




const SignIn = () => {
  const { singInUser, googleLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
      .then(res => console.log(res))
    .catch(error=>console.log(error))
  }

  const location = useLocation()
  console.log(location);

  const navigate = useNavigate()

  const handleSingin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singInUser(email, password)
      .then(result => {
        console.log(result.user);

        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime
        }

        
        fetch('http://localhost:5000/user', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
      .then(data => {
      console.log(data);
      })
        navigate(location?.state ? location.state : "/");
      })
    .catch(error =>{console.error(error);})
  }



  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">LoginIn Now!</h1>
      <div className="mx-auto shrink-0 lg:w-1/2 md:w-3/4 shadow-2xl bg-base-100">
        <form onSubmit={handleSingin} className="card-body">
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
            <button className="btn btn-primary">Sing In</button>
          </div>

          <div className="">
            <span className="divider font-bold my-6">Continue With</span>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => handleSocialLogin(googleLogin)}
              className="btn"
            >
              Google Loing
            </button>
            <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;