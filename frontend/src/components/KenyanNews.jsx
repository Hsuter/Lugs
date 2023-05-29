import React from "react";
import { useSelector } from "react-redux";

const KenyanNews = () => {
  const { items } = useSelector((state) => state.news);

  // Check if items exist and filter results based on country: ["kenya"]
  const kenyanResults =
    items && items.results ? items.results.filter((item) => item) : [];

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      {kenyanResults.map((result) => (
        <div
          key={result.id}
          className="flex flex-col items-center justify-center w-full itms"
        >
          <h2>{result.name}</h2>
          <p>{result.description}</p>
          <a href={result.url}>Read More</a>
        </div>
      ))}
    </div>
  );
};

export default KenyanNews;
