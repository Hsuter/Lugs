import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const dispatch = useDispatch();

  const [isMatching, setIsmatching] = useState(false);

  const auth = useSelector((state) => state.auth);

  const confirmPass = () => {
    if (user.password === user.confirmPass && user.password.length > 3) {
      setIsmatching(true);
    } else {
      setIsmatching(false);
    }
    console.log(isMatching);
  };

  useEffect(() => {
    if (auth._id) {
      navigate("/admin");
    }
    confirmPass();
  }, [confirmPass, auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    console.log(auth);
  };

  return (
    <div className="flex lg:flex-row flex-col  justify-center items-center h-[100vh]">
      <div className="flex flex-col lg:w-[50%] gap-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="flex  fon-bold text-[30px] font-bold w-full">
            Create Account
          </h1>
        </div>
        <div className="flex flex-col w-full gap-10 px-20 ">
          <form className="flex flex-col w-full gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className=" bg-transparent border-b-[1px] pb-3  border-txtgray"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />

            <input
              type="text"
              placeholder="Email Adress"
              className=" bg-transparent border-b-[1px] pb-3 border-txtgray"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />

            <input
              type="password"
              placeholder="Password"
              className=" bg-transparent border-b-[1px] pb-3 border-txtgray"
              onChange={(e) => {
                confirmPass();
                setUser({ ...user, password: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className=" bg-transparent border-b-[1px] pb-3 border-txtgray"
              onChange={(e) => {
                confirmPass();
                setUser({ ...user, confirmPass: e.target.value });
              }}
            />
          </form>

          {isMatching ? (
            <p className="text-style: italic mb-4 font-bold text-green">
              It's a match, proceed.
            </p>
          ) : !isMatching && user.confirmPass.length < 3 ? null : (
            <p className="text-style: italic mb-4 font-bold text-red-800">
              password doesn't match.
            </p>
          )}

          <div>
            <button
              className="bg-green  text-white rounded-lg px-4 py-2 w-full"
              onClick={handleSubmit}
            >
              {auth.registerStatus == "pending" ? (
                <p>Loading</p>
              ) : (
                <p> Create Account</p>
              )}
            </button>
          </div>
          <div className="flex">
            <p className="text-txtgray">
              Already have an account?
              <Link className="text-darkblue" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
