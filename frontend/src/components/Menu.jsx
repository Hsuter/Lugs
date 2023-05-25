import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { line } from "../assets";

const Menu = () => {
  return (
    <div className="bg-white flex flex-row w-full items-center justify-center ">
      <ul className="flex lg:flex-row flex-col gap-10 items-center justify-center text-[20px] text-green font-semibold ">
        <li className="font-bold text-[30px]">HOME</li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>About LC</li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>
          Departmets
          <span>
            <ArrowDropDownIcon />
          </span>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>
          Wards
          <span>
            <ArrowDropDownIcon />
          </span>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>
          Staff
          <span className="md:rotate-0 rotate-90">
            <ArrowDropDownIcon />
          </span>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>Career</li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Menu;
