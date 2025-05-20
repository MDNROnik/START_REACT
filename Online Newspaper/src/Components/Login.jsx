import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };
  return (
    <div className="flex justify-center p-6 items-center ">
      <div className="card bg-gray-500 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body form-control">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label text-white">Email</label>
            <input
              name="email"
              type="email"
              className="input text-white"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label text-white">Password</label>
            <input
              name="password"
              type="password"
              className="input text-white"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover text-white">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-white" to="/auth/signup">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
