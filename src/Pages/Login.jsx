import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Login = () => {
  const { signInWithPass, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const login = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithPass(email, password)
      .then((result) => navigate(from))
      .catch((er) => {
        toast.error(er.message);
      });
  };
  const useGoogle = () => {
    googleLogin()
      .then((result) => navigate(from))
      .catch((er) => {
        toast.error(er.message);
      });
  };
  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <div className="border px-5 py-8 box-content shadow-md rounded-md bg-slate-50 shadow-rose-500">
        <h1 className="text-2xl font-bold  text-center mb-7 text-rose-500">
          Login Now!
        </h1>
        <form onSubmit={login} action="">
          <div className="my-3 font-bold text-blue-500 ">
            <label className="ml-1 mb-2 block" htmlFor="">
              Email :
            </label>
            <input
              className="placeholder:font-normal py-2 px-5 border-amber-500 border-2 rounded-lg"
              type="email"
              name="email"
              id=""
              placeholder="enter your email"
            />
          </div>
          <div className="my-3  font-bold text-blue-500 ">
            <label className="ml-1 mb-2 block" htmlFor="">
              Password :
            </label>
            <input
              className="placeholder:font-normal py-2 px-5 border-amber-500 border-2 rounded-lg"
              type="password"
              name="password"
              id=""
              placeholder="enter your password"
            />
          </div>
          <p className="text-sm italic ml-1 text-blue-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold underline ">
              Register Now!
            </Link>
          </p>
          <button
            className="mt-5 w-full py-2 bg-rose-500 rounded-lg text-white font-bold"
            type="submit"
          >
            Login
          </button>
          <p className="text-lg text-center mt-2 font-bold italic text-amber-500">
            OR
          </p>
        </form>
        <button
          onClick={useGoogle}
          className="w-full border-2 border-amber-500 bg-gray-200 py-2 font-bold text-rose-500 my-2 rounded-full"
        >
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
