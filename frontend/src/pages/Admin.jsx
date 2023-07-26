import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { productsDelete } from "../features/productSlice";

const Admin = () => {
  const auth = useSelector((state) => state.auth);

  const images = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const handleAddImages = () => {
    navigate("/addimages");
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(productsDelete({ id }));
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row items-center bg-orange w-full justify-center">
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

      {auth.isAdmin ? (
        <div className="">
          <div>
            <button
              className="bg-green px-4 h-10 rounded-lg absolute right-0 m-2 cursor-pointer  text-white "
              onClick={handleAddImages}
            >
              Add images
            </button>
          </div>

          <div className="flex flex-row flex-wrap gap-10 items-center justify-center mt-20 ">
            {images.items.map((images) => (
              <div className="flex flex-col items-center text-gray-600  max-w-[250px]">
                <img src={images.image.url} className="" />
                <p className="text-center">{images.caption}</p>

                <button
                  className="bg-green px-4 h-10 rounded-lg  m-2 cursor-pointer  text-white "
                  onClick={() => handleDelete(images._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          Please contact the support team to get the administarive privillages
          !!{" "}
        </div>
      )}
    </div>
  );
};

export default Admin;
