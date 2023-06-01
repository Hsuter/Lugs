import React from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ allnews }) => {
  const navigate = useNavigate();

  const { image, title, location, date } = allnews;
  const handleEventClick = () => {
    navigate("/events", { state: { allnews } });
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="flex flex-col  items-center bg-orange md:w-[400px] w-[300px] h-[380px] relative txtalign"
      onClick={handleEventClick}
    >
      <img src={image} alt={title} className=" w-[400px]  depsimages" />
      <div className="flex flex-col absolute bottom-0">
        <div className="flex flex-col items-center justify-center px-2 depstext ">
          <h2 className="mt-8 text-white text-[20px] font-bold ">{title}</h2>
          <p className="font-bold"> {location}</p>
          <p className="font-bold">{date}</p>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
