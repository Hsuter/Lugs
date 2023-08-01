import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { productsCreate } from "../features/productSlice";
import { Link } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

const AddImages = () => {
  const auth = useSelector((state) => state.auth);

  const images = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        caption,
        image,
      })
    );
  };

  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <AdminHeader />
      <div className="w-full">
        {auth.isAdmin ? (
          <div className="w-full flex flex-col items-center">
            <p className="font-bold m-10 underline ">Admin Panel</p>

            <div className="flex md:flex-row flex-col items-center  justify-around  w-full  ">
              <div className="flex flex-col   sm:w-96 w-72">
                <div className="flex flex-col">
                  <label htmlFor="description">Caption</label>
                  <textarea
                    name="description"
                    id="description"
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    onChange={(e) => {
                      setCaption(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="image">Image</label>

                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="image"
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    onChange={handleProductImageUpload}
                  />
                </div>
              </div>
              <div>
                <div className="flex border-black border-4 md:w-[20em] w-[15em]  justify-center items-center ">
                  {image ? (
                    <>
                      <img src={image} className=""></img>
                    </>
                  ) : (
                    <p className="min-h-[250px] justify-center items-center flex ">
                      No image to preview
                    </p>
                  )}
                </div>
                <div></div>
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-5"
              onClick={handleSubmit}
            >
              {images?.createStatus === "pending" ? (
                <p>Submitting</p>
              ) : images?.createStatus === "rejected" ? (
                <p>Try again</p>
              ) : images?.createStatus === "success" ? (
                <p>Submit</p>
              ) : images?.createStatus === null ? (
                <p>Submit</p>
              ) : (
                <p>Submit</p>
              )}
            </button>

            <Link to="/admin" className="absolute right-0 bottom-0">
              <button className="bg-green px-4 h-10 rounded-lg  m-2 cursor-pointer  text-white ">
                View All
              </button>
            </Link>
          </div>
        ) : (
          <div>
            Please contact the support team to get the administarive privillages
            !!{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddImages;
