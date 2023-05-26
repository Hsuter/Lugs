import React from "react";
import { useLocation } from "react-router-dom";
import { mp } from "../assets";

const ProfileCard = () => {
  const location = useLocation();
  const profile = location.state?.profile;

  return (
    <div className="flex w-full lg:pt-20 items-center justify-center">
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
                HON. Nabweri Daraja Nabii
              </h1>
              <p className="w-full text-green">Member of parliament</p>
              <p>
                His excellency Nabweri Daraja Nabii was elected the Memeber of
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
        <div>
          <h1 className="text-black">Constituency Office Manager</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-black"> Deputy Constituency Manager</h1>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
