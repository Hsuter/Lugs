import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (auth._id) {
      navigate("/admin");
    }
  }, [auth._id, navigate]);

  const verify = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center   ">
      <div className="flex flex-col items-center justify-center gap-10  lg:w-[50vw] lg:p-20 p-2 ">
        <h1 className="lg:font-bold font-semibold lg:text-[50px] text-[35px] ">
          WELCOME
        </h1>
        <p className="text-txtgray ">Please enter your details</p>
        <form className="flex flex-col gap-4 w-full">
          <p className="w-full flex font-bold">Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-2 p-4 border-gray rounded-xl "
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <p className="w-full flex font-bold">Password</p>
          <input
            type="password"
            placeholder="**********"
            className="border-2 p-4 border-gray rounded-xl"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </form>

        <div className="flex flex-row w-full justify-between font-semibold">
          <div className="flex flex-row gap-2">
            <input type="checkbox" /> <p>Remember me</p>
          </div>
          <p>Forgot password ? </p>
        </div>

        <div className="w-full ">
          <button
            className="bg-green  text-white rounded-lg px-4 py-2 w-full"
            onClick={verify}
          >
            {auth.loginStatus == "pending" ? <p>Loading</p> : <p>Sign In</p>}
          </button>
        </div>

        <div>
          <p>
            Dont have an account ?{" "}
            <Link className="text-darkblue font-semibold" to="/signup">
              Sign up !
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
