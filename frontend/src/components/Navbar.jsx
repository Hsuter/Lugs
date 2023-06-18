import React, { useEffect, useState, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "../components/Menu";
import { ScrollContext } from "../ScrollContext";

const Navbar = () => {
  const scrolls = useContext(ScrollContext);
  const { scrollDirection, scrollPosition } = scrolls;

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  // Replace with your desired longitude

  return (
    <></>
    //<div
    //  className={`bg-green w-full items-center flex flex-col justify-center  top-0 z-20`}
    //  id="home"
    //>
    //  <div className="py-2 w-full flex flex-col items-center ">
    //    <div
    //      className="bg-white absolute left-0 ml-1 rounded-full lg:hidden z-20"
    //      onClick={handleMenu}
    //    >
    //      {menu ? (
    //        <CloseIcon className=" text-black " />
    //      ) : (
    //        <MenuIcon className=" text-black " />
    //      )}
    //    </div>
    //
    //    <div className={`w-full    ${menu ? "flex" : "lg:flex hidden"}`}>
    //      <Menu setMenu={setMenu} />
    //    </div>
    //
    //    <h1 className="text-white md:text-[30px]">
    //      Welcome to Lugari Constituency
    //    </h1>
    //  </div>
    //</div>
  );
};

export default Navbar;
