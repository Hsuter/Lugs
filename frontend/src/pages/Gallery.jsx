import React from "react";
import { gallery } from "../assets";


const Gallery = () => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-10 items-center  justify-center my-10">
      <h1 className="md:text-[30px] underline-motion text-[25px] font-bold  w-full text-green flex flex-row  pl-10 py-5">
        Constituency images
      </h1>

      {gallery.map((images, i) => (
        <>
          <div key={i} i={i}>
            <img src={images} className="h-[300px]" />
          </div>
        </>
      ))}
    </div>
  );
};

export default Gallery;
