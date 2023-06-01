import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Events = () => {
  const location = useLocation();
  const news = location.state?.allnews;

  if (!news) {
    return <div>No event selected</div>;
  }

  return (
    <div className="flex flex-col gap-10 my-8 ">
      <h1 className="text-green text-[20px]  underline-motion">{news.title}</h1>
      <div className="flex flex-col items-center mx-4 gap-4">
        <img src={news.image} />
        <h1 className="font-bold">{news.speechTitle}</h1>
        <p>{news.speech}</p>
      </div>
    </div>
  );
};

export default Events;
