import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { mp, CM, DCM } from "../assets";
import { ScrollContext } from "../ScrollContext";

const ProfileCard = () => {
  const scrolls = useContext(ScrollContext);
  const { profile } = scrolls;

  return (
    <div className="flex w-full  items-center justify-center">
      {profile == "MP" ? (
        <div className="flex lg:flex-row flex-col items bg-gray-100  w-[800px] my-20 justify-between">
          <div className="flex  items center justify-center ">
            <img
              src={mp}
              alt="member_of_parliarment_lugari"
              className="w-[500px]"
            />
          </div>
          <div className="flex flex-col items-center  w-full justify-center ">
            <div className="flex flex-col gap-6 mx-10">
              <h1 className="font-bold mt-10 text-[25px]   ">
                HON. Nabwera Daraja Nabii
              </h1>
              <p className="w-full text-green">Member of parliament</p>
              <p>
                His excellency Nabwera Daraja Nabii was elected the Memeber of
                Lugari Constituency during the Kenyan General Elections on 9th
                August 2022. He assumed office on 25th August after taking the
                oath of office.
              </p>

              <p className="font-bold">
                Nabweri Daraja Nabii{" "}
                <span className="font-light text-[14px]">
                  M.P - Lugari constituency
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : profile == "COM" ? (
        <div className="flex lg:flex-row flex-col items bg-gray-100  w-[800px] my-20 justify-between">
          <div className="flex  items center justify-center ">
            <img
              src={CM}
              alt="member_of_parliarment_lugari"
              className="w-[850px]"
            />
          </div>
          <div className="flex flex-col items-center  w-full justify-center ">
            <div className="flex flex-col gap-6 mx-10">
              <h1 className="font-bold mt-10 text-[25px]   ">
                Mr. Rajab Atako Mukolwe
              </h1>
              <p className="w-full text-green">Constituency Office Manager</p>
              <p>
                His excellency Nabwera Daraja Nabii was elected the Memeber of
                Lugari Constituency during the Kenyan General Elections on 9th
                August 2022. He assumed office on 25th August after taking the
                oath of office.
              </p>

              <p className="font-bold">
                Rajab Atako Mukolwe{" "}
                <span className="font-light text-[14px]">
                  COM - Lugari constituency
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col items bg-gray-100  w-[800px] my-20 justify-between">
          <div className="flex  items center justify-center ">
            <img
              src={DCM}
              alt="member_of_parliarment_lugari"
              className="md:w-[850px]"
            />
          </div>
          <div className="flex flex-col items-center  w-full justify-center ">
            <div className="flex flex-col gap-6 mx-10">
              <h1 className="font-bold mt-10 text-[25px]   ">
                Mrs. Marrystella Nyukuri
              </h1>
              <p className="w-full text-green">Deputy Constituency Manager</p>
              <p>
                His excellency Nabwera Daraja Nabii was elected the Memeber of
                Lugari Constituency during the Kenyan General Elections on 9th
                August 2022. He assumed office on 25th August after taking the
                oath of office.
              </p>

              <p className="font-bold ">
                Marrystella Nyukuri{" "}
                <span className="font-light text-[14px]">
                  DCM - Lugari constituency
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
