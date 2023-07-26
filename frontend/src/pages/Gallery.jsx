import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Gallery = () => {
  const images = useSelector((state) => state.products);
  return (
    <div className="w-full flex flex-row flex-wrap gap-10 items-center justify-center my-10">
      <h1 className="md:text-[30px] underline-motion text-[25px] font-bold w-full text-green flex flex-row pl-10 py-5">
        Constituency images
      </h1>
      {images.status === "pending" ? (
        <>
          <p>Loading</p>
          <CircularProgress />
        </>
      ) : images.status === "rejected" ? (
        <>Reload the page and check your internet connection</>
      ) : (
        <>
          {images.items.map((item, i) => (
            <div
              key={i}
              className="items-center justify-center flex flex-col text-gray-500   md:w-[800px]"
            >
              <img src={item.image.url} className="" alt={item.caption} />
              <p className="text-center">{item.caption}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Gallery;
