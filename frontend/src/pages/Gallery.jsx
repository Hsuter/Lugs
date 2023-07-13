import React from "react";
import { gallery } from "../assets";

const Gallery = () => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-10 items-center justify-center my-10">
      <h1 className="md:text-[30px] underline-motion text-[25px] font-bold w-full text-green flex flex-row pl-10 py-5">
        Constituency images
      </h1>

      {gallery.map((item, i) => (
        <div
          key={i}
          className=" items-center justify-center flex flex-col text-gray-500"
        >
          <img src={item.image} className="h-[300px]" alt={item.caption} />
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
