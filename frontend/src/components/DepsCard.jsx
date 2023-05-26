import React from "react";

const DepsCard = ({ dep }) => {
  const { image, name } = dep;

  return (
    <div className="flex flex-col  items-center bg-orange md:w-[400px] w-[300px] h-[450px] ">
      <img
        src={image}
        alt={name}
        className=" w-[400px] h-[350px] depsimages "
      />
      <h2 className="mt-8 text-white text-[20px] font-bold depstext">{name}</h2>
    </div>
  );
};
export default DepsCard;
