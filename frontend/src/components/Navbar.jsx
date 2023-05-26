import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "../components/Menu";

const Navbar = ({ profile, setProfile }) => {
  const [menu, setMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  // Replace with your desired longitude

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="bg-green w-full items-center flex flex-col justify-center"
      id="home"
    >
      <div className="py-2 w-full flex flex-col items-center ">
        <div
          className="bg-white absolute left-0 ml-1 rounded-full lg:hidden z-20"
          onClick={handleMenu}
        >
          {menu ? (
            <CloseIcon className=" text-black " />
          ) : (
            <MenuIcon className=" text-black " />
          )}
        </div>

        <div className={`w-full   ${menu ? "flex" : "lg:flex hidden"}`}>
          <Menu setMenu={setMenu} profile={profile} setProfile={setProfile} />
        </div>

        <h1 className="text-white md:text-[30px]">
          Welcome to Lugari Constituency
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
