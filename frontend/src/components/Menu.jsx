import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { line } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Menu = ({ setMenu }) => {
  const [depMenu, setDepMenu] = useState(false);
  const [staffMenu, setStaffMenu] = useState(false);
  const [wardMenu, setWardMenu] = useState(false);

  const handleDepMenu = () => {
    if (!depMenu) {
      setDepMenu(true);
      setStaffMenu(false);
      setWardMenu(false);
    } else {
      setDepMenu(false);
    }
  };
  const handleStaffMenu = () => {
    if (!staffMenu) {
      setStaffMenu(true);
      setDepMenu(false);
      setWardMenu(false);
    } else {
      setStaffMenu(false);
    }
  };
  const handleWardMenu = () => {
    if (!wardMenu) {
      setWardMenu(true);
      setDepMenu(false);
      setStaffMenu(false);
    } else {
      setWardMenu(false);
    }
  };
  const handleHome = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-white flex flex-row items-center justify-center w-full lg:px-28 menuTxt lg:h-full h-[100vh] lg:mt-0 mt-[-10px] ">
      <ul className="flex lg:flex-row flex-col lg:gap-10 gap-4  items-center justify-center text-[20px] text-green font-semibold  w-full ">
        <li className="font-bold text-[30px] cursor-pointer">
          <a href="#home" onClick={() => setMenu(false)}>
            Home
          </a>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li className="flex " onClick={() => setMenu(false)}>
          <a href="#about">About</a>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li
          onClick={handleDepMenu}
          className="flex lg:flex-row flex-col gap-2 cursor-pointer w-full  items-center"
        >
          <div className="flex flex-row gap-2 w-full items-center justify-center">
            <a href="#deps" onClick={() => setMenu(false)}>
              Departments
            </a>
            <div className="flex flex-col relative items-center">
              <span className="text-white bg-green rounded-full">
                {depMenu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              </span>
            </div>
          </div>

          <div
            className={`${
              depMenu ? "flex" : "hidden"
            } flex-col items-center justify-center lg:bg-gray-200 relative lg:absolute lg:ml-[-80px] lg:mt-44 lg:w-[500px] w-full`}
          >
            <li className="border-2 w-full p-1 flex justify-center">
              Education, ICT & Public communication
            </li>
            <li className="border-2 w-full p-1 flex justify-center">
              Finance and economic planning
            </li>
            <li className="border-2 w-full p-1 flex justify-center">
              Infrastructure
            </li>
          </div>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li
          onClick={handleWardMenu}
          className="flex :flglex-row flex-col gap-2 cursor-pointer w-full items-center"
        >
          <div className="flex flex-row gap-2 w-full items-center justify-center">
            Wards
            <div className="flex flex-col relative items-center  ">
              <span className="text-white bg-green rounded-full">
                {wardMenu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              </span>
            </div>
          </div>

          <div
            className={`${
              wardMenu ? "flex" : "hidden"
            } flex-col items-center justify-center lg:bg-gray-200 relative lg:absolute lg:mt-10   lg:w-[300px] w-full  `}
          >
            <li className="border-2 w-full  flex justify-center p-1">
              Lumakanda
            </li>
            <li className="border-2 w-full p-1 flex justify-center">
              Lwandeti
            </li>
            <li className="border-2 w-full p-1 flex justify-center">
              Chekalini
            </li>
            <li className="border-2 w-full p-1 flex justify-center">
              Chevaywaand
            </li>
          </div>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li
          onClick={handleStaffMenu}
          className="flex :flglex-row flex-col gap-2 cursor-pointer w-full items-center"
        >
          <div className="flex flex-row gap-2 w-full items-center justify-center">
            Staff
            <div className="flex flex-col relative items-center  ">
              <span className="text-white bg-green rounded-full">
                {staffMenu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              </span>
            </div>
          </div>

          <div
            className={`${
              staffMenu ? "flex" : "hidden"
            } flex-col items-center justify-center lg:bg-gray-200 relative lg:absolute lg:mt-10   lg:w-[300px] w-full `}
          >
            <li className="border-2 w-full  flex justify-center p-1">
              Member of parliament
            </li>
            <li className="border-2 w-full p-1 flex justify-center">
              Communication Director
            </li>
          </div>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>Career</li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>
          <a href="#contacts" onClick={() => setMenu(false)}>
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
