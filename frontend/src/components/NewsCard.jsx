import React from "react";

const NewsCard = ({ allnews }) => {
  const { image, title, location, date } = allnews;

  return (
    <div className="flex flex-col  items-center bg-orange md:w-[400px] w-[300px] h-[450px] ">
      <div className="flex flex-col">
        <img
          src={image}
          alt={title}
          className=" w-[400px]  depsimages"
        />
        <div className="flex flex-col items-center justify-center px-2 depstext ">
          <h2 className="mt-8 text-white text-[20px] font-bold ">{title}</h2>
          <p> {location}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
