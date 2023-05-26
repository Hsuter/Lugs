import React, { useState } from "react";
import {
  harvest,
  coarms,
  bunnerText,
  line,
  mp,
  whiteline,
  deps,
  news,
  harvest2,
} from "../assets";
import { Link } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import DepsCard from "../components/DepsCard";
import { useEffect } from "react";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <div className="bg-white items-center flex flex-col" id="home">
      <div className="flex flex-col items-center relative bg-black ">
        <img
          src={harvest}
          alt="bunner"
          className={`w-full ${screenWidth > 750 ? "flex" : "hidden"}`}
        />
        <img
          src={harvest2}
          alt="bunner"
          className={`w-full ${screenWidth < 750 ? "flex" : "hidden"}`}
        />
        <img
          src={bunnerText}
          alt="LugariConstituencyBunnerText"
          className="z-10 w-[300px] md:w-[500px] lg:w-[800px] absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={coarms}
          alt="LugariConstituencyBunnerText"
          className="z-10  w-[400px] md:w-[400px] lg:w-[500px] absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/*About*/}
      <div
        className="flex flex-col w-full bg-white gap-2 md:gap-10 mt-2 md:mt-28"
        id="about"
      >
        <div className="flex flex-row gap-2 w-full ">
          <h1 className="bg-green w-full with-slanted-edge-right p-1 md:p-6 flex items-center justify-center md:text-[30px] text-white font-bold">
            About Constituency
          </h1>
          <span className="bg-orange w-full with-slanted-edge-left"></span>
        </div>
        <p className="about px-2 md:px-14 font-bold">
          Lugari Constituency is an electoral constituency among the 290
          constituencies in Kenya . It is one of the 12 constituencies of
          Kakamega County. It comprises of 6 County Assembly wards namely:{" "}
          <span className="text-blue-600">
            <Link>Lumakanda,</Link>
            <Link> Lwandeti,</Link>
            <Link> Chekalini,</Link>
            <Link> Chevaywaand.</Link>
          </span>
          The entire constituency is located within the Lumakanda County Council
          area. The constituency has an area of 367.1 km². It was retained its
          name when Likuyani constituency was hived from the larger Lugari
          Constituecny. Lugari constituency borders Uisingishu County an Turbo
          constituency. Other bodering constituencies in Western region are
          Malava Costituency, Likuyani constituency, and Webuye West
          constituency. It's a cosmopolitan constituency hosting more than ten
          tribes of Kenyans who are primary farmers. Due to its advantage of
          rains it's a hurb of more food crops ie maize, beans, sugarcane and
          sweet potatoes.
        </p>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="w-full bg-green h-[5px] md:h-[10px]"></div>
          <div className="w-full bg-green h-[5px] md:h-[10px]"></div>
        </div>
        <div className="flex md:flex-row flex-col mx-2  md:mx-10 gap-10">
          <div className="flex flex-col">
            <h1 className="text-green font-bold text-[30px]">Mantra</h1>
            <p className="font-bold">
              Lugari Constituency, a centre of excellence under 4G network.
            </p>
            <h1 className="text-green font-bold text-[30px]">Mission</h1>
            <p className="font-bold">
              To serve as a comprehensive online platform that fosters
              communication, accessibility, and community engagement. We aim to
              provide a centralized hub that bridges the gap the leadership and
              the people, promoting inclusivity and empowering individuals with
              the knowledge and tools they need to actively participate in the
              development and progress of our constituency.
            </p>
          </div>
          <span className="w-full items-center flex justify-center">
            <img
              src={line}
              alt="greenline"
              className="md:rotate-0 rotate-90 md:w-null w-2 md:my-null my-[-150px] "
            />
          </span>
          <div className="flex flex-col">
            <h1 className="text-green font-bold text-[30px]">Vision</h1>
            <p className="font-bold">
              To establish a dynamic virtual space that transcends geographical
              boundaries, enabling seamless communication and collaboration thus
              creating an environment where citizens can easily access vital
              information about Lugari constituency, its initiatives, and public
              services, polices, development Projects and through direct
              Engagement with the Super 4G network, Hon. Nabwera Daraja Nabii.
              By offering comprehensive resources, we aim to attract visitors
              and foreigners, providing them with a glimpse into the rich
              cultural heritage and opportunities our constituency has to offer.
              Moreover, our website will serve as a platform to connect with
              potential partners, fostering collaborations that will drive
              sustainable development and growth. Additionally, we seek to
              connect with job and service seekers by providing a centralized
              platform where they can explore employment opportunities and
              access various public services.
            </p>
          </div>
        </div>
      </div>

      {/*Mp*/}
      <div className="flex flex-col w-full">
        <div className="flex md:flex-row flex-col  gap-10 md:mt-20  ">
          <div className="flex flex-col items-center  md:max-w-[60vw]">
            <div className="flex flex-col items-center">
              <h1 className="text-green font-bold  text-[30px] mt-20">
                Mp's Welcome Note
              </h1>
              <div className="flex flex-row w-full gap-1">
                <div className="bg-green h-[10px] w-full"></div>
                <div className="bg-orange h-[10px] w-full"></div>
              </div>
            </div>

            <p className="font-bold mx-2 md:mx-10 md:mt-20 mt-4">
              Welcome to Lugari Constituency Website, a platform dedicated to
              fostering engagement, Connectivity, Communication and progress of
              our Constituency and engaging with our community. We are excited
              to share with you the objectives, and goals of this website. First
              and foremost, Lugari Constituency website serves as a vital hub
              for our constituency subjects. It offers a seamless and accessible
              channel for constituents to stay informed about The MP's
              initiatives, programmes, activities, itinerary, progress,
              policies, and development projects. Here, you will and
              comprehensive information about the services we provide and
              progress . Our aim is to empower our subjects with knowledge,
              ensuring transparency and accountability in governance...
            </p>
            <button className="font-bold bg-green text-white flex flex-row gap-5 justify-center items-center rounded-lg w-[200px] mt-10">
              <VisibilityIcon />
              <img src={whiteline} className="w-[1px] py-[4px]" />
              ABOUT MP
            </button>
          </div>
          <div className="flex flex-col items-center justify-center mx-6 mpname">
            <div className=" flex flex-col items-center">
              <img
                src={mp}
                alt="Mp lugari"
                className="rounded-3xl border-2 border-green w-[300px]"
              />
              <p className="font-bold mt-10 text-[25px] text-green">
                HON. Nabweri Daraja Nabii, BGJ,MP
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange w-full h-[40px] my-20"></div>
      </div>

      {/*Departments*/}
      <div className="flex flex-col w-full" id="deps">
        <div className="flex flex-row  w-full">
          <h1 className="md:text-[30px] font-bold bg-green w-full text-white flex flex-row items-center justify-center  md:py-5">
            Constituency Services / Departments
          </h1>
          <div className="bg-orange w-full"></div>
        </div>
        <div className="flex flex-row flex-wrap mt-8 items-center justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center mx-20 gap-10 ">
            {deps.map((dep, i) => {
              const [key, value] = Object.entries(dep)[0];
              return <DepsCard dep={value} key={key} i={i} />;
            })}
          </div>
        </div>
      </div>

      {/*News and speeches*/}
      <div className="flex flex-col w-full mt-10 " id="speeches">
        <div className="flex md:flex-row  w-full">
          <h1 className="md:text-[30px] font-bold bg-green w-full text-white flex flex-row items-center justify-center py-5">
            News $ Speeches
          </h1>
          <div className="bg-orange w-full"></div>
        </div>
        <div className="flex flex-row flex-wrap mt-8 items-center justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center mx-20 gap-10 ">
            {news.map((allnews, i) => {
              const [key, value] = Object.entries(allnews)[0];
              return <NewsCard allnews={value} key={key} i={i} />;
            })}
          </div>
        </div>
        <div className="flex flex-col my-8">
          <div className="bg-green w-full"></div>
          <div className="bg-orange w-full h-[20px]"></div>
        </div>
      </div>

      {/* Contacts*/}
    </div>
  );
};

export default Home;
