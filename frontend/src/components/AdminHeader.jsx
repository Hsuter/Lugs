import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { productsDelete } from "../features/productSlice";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const AdminHeader = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <div className="flex flex-row items-center bg-orange w-full justify-center">
      <Link to="/admin">
        <HomeIcon className="w-[70px] absolute top-20 left-0 mx-2" />
      </Link>

      <h1 className="font-bold md:text-[50px] text-[20px] m-12">
        Welcome {auth.name}
      </h1>
      <button
        className="bg-green md:px-4 px-2 h-10 rounded-lg absolute right-0 m-2 cursor-pointer  text-white "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminHeader;
