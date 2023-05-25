import React from "react";

const NewsCard = ({ allnews }) => {
  const { image, title } = allnews;

  return (
    <div className="flex flex-col  items-center bg-orange w-[400px] h-[450px]  ">
      <img
        src={image}
        alt={title}
        className=" w-[400px] h-[350px] depsimages"
      />
      <h2 className="mt-8 text-white text-[20px] font-bold depstext ">{title}</h2>
    </div>
  );
};
export default NewsCard;
