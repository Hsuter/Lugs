import React, { useState, useEffect, useContext } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { line } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ScrollContext } from "../ScrollContext";

const Menu = ({ setMenu }) => {
  const scrolls = useContext(ScrollContext);

  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
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

  const handleDepMenuEnter = () => {
    setDepMenu(true);
    setStaffMenu(false);
    setWardMenu(false);
  };

  const handleDepMenuLeave = () => {
    setTimeout(() => {
      setDepMenu(false);
    }, 3000);
  };

  const handleStaffMenuEnter = () => {
    setStaffMenu(true);
    setDepMenu(false);
    setWardMenu(false);
  };

  const handleStaffMenuLeave = () => {
    // Delay hiding the menu to allow moving the cursor to the sub-menu
    setTimeout(() => {
      setStaffMenu(false);
    }, 3000);
  };

  const handleWardMenuEnter = () => {
    setWardMenu(true);
    setDepMenu(false);
    setStaffMenu(false);
  };

  const handleWardMenuLeave = () => {
    setTimeout(() => {
      setWardMenu(false);
    }, 3000);
  };

  useEffect(() => {
    if (profile == "") {
      null;
    } else {
      navigate("/staff_profile", { state: { profile } });
      setMenu(false);
    }
  }, [profile]);
  return (
    <div className="bg-white flex flex-row items-center justify-center w-full lg:px-28 menuTxt lg:h-full h-[100vh] lg:mt-0 mt-[-10px] ">
      <ul className="flex lg:flex-row flex-col lg:gap-10 gap-4  items-center justify-center text-[20px] text-green font-semibold   py-2 ">
        <Link to="/">
          <li className="font-bold  cursor-pointer">
            <a
              href="#homee"
              onClick={() => {
                setMenu(false);
                handleHome();
              }}
            >
              Home
            </a>
          </li>
        </Link>

        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li
          onClick={handleStaffMenu}
          onMouseEnter={handleStaffMenuEnter}
          onMouseLeave={handleStaffMenuLeave}
          className={`flex :flglex-row flex-col gap-2 cursor-pointer w-full items-center hover:${handleStaffMenu}`}
        >
          <div
            className={`flex  w-[150px] flex-row gap-2  items-center justify-center`}
          >
            <a
              href="#about"
              onClick={() => {
                setMenu(false);
                handleHome();
              }}
            >
              About LC
            </a>
            <div className="flex flex-col relative items-center  ">
              <span className="text-green">
                {staffMenu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              </span>
            </div>
          </div>

          <div
            className={`${
              staffMenu ? "flex" : "hidden"
            } flex-col items-center justify-center lg:bg-gray-200 relative lg:absolute lg:mt-10   lg:w-[300px] w-full `}
          >
            <li
              className="border-b-2 border-green w-full  flex justify-center p-1"
              onClick={() => {
                setProfile("MP");
              }}
            >
              Member of parliament
            </li>
            <li
              className="border-b-2 border-green w-full p-1 flex justify-center"
              onClick={() => {
                setProfile("COM");
              }}
            >
              Constituency Office Manager
            </li>
            <li
              className="border-b-2 border-green w-full p-1 flex justify-center"
              onClick={() => {
                setProfile("DCM");
              }}
            >
              Deputy Constituency Manager
            </li>
            <li
              className="border-b-2 border-green w-full p-1 flex justify-center"
              onClick={() => {
                setProfile("DCM");
              }}
            >
              History of LC
            </li>
          </div>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li
          onClick={handleDepMenu}
          onMouseEnter={handleDepMenuEnter}
          onMouseLeave={handleDepMenuLeave}
          className="flex lg:flex-row flex-col gap-2 cursor-pointer w-full  items-center"
        >
          <div className="flex flex-row gap-2 w-full items-center justify-center">
            <a href="#deps" onClick={() => setMenu(false)}>
              Departments
            </a>
            <div className="flex flex-col relative items-center">
              <span className="text-green ">
                {depMenu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              </span>
            </div>
          </div>

          <div
            className={`${
              depMenu ? "flex" : "hidden"
            } flex-col items-center justify-center lg:bg-gray-200 relative lg:absolute lg:ml-[-80px] lg:mt-44 lg:w-[500px] w-full`}
          >
            <li className="border-b-2 border-green w-full p-1 flex justify-center">
              Education, ICT & Public communication
            </li>
            <li className="border-b-2 border-green  w-full p-1 flex justify-center">
              Finance and economic planning
            </li>
            <li className="border-b-2 border-green w-full p-1 flex justify-center">
              Infrastructure
            </li>
          </div>
        </li>
        <span className="lg:rotate-0 rotate-90">
          <img src={line} className="w-[2px] h-[30px]" />
        </span>
        <li
          onClick={handleWardMenu}
          onMouseEnter={handleWardMenuEnter}
          onMouseLeave={handleWardMenuLeave}
          className="flex :flglex-row flex-col gap-2 cursor-pointer w-full items-center"
        >
          <div className="flex flex-row gap-2 w-full items-center justify-center">
            Wards
            <div className="flex flex-col relative items-center  ">
              <span className="text-green">
                {wardMenu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              </span>
            </div>
          </div>

          <div
            className={`${
              wardMenu ? "flex" : "hidden"
            } flex-col items-center justify-center lg:bg-gray-200 relative lg:absolute lg:mt-10   lg:w-[300px] w-full  `}
          >
            <li className="border-b-2 border-green w-full  flex justify-center p-1">
              Lumakanda
            </li>
            <li className="border-b-2 border-green w-full p-1 flex justify-center">
              Lwandeti
            </li>
            <li className="border-b-2 border-green w-full p-1 flex justify-center">
              Chekalini
            </li>
            <li className="border-b-2 border-green w-full p-1 flex justify-center">
              Chevaywaand
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
