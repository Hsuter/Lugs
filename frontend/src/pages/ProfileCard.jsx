import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { mp, CM, DCM } from "../assets";
import { ScrollContext } from "../ScrollContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ProfileCard = () => {
  const scrolls = useContext(ScrollContext);
  const { profile } = scrolls;
  const [edu, setEdu] = useState(false);
  const [emp, setEmp] = useState(false);

  const handleEdMenu = () => {
    if (!edu) {
      setEdu(true);
      setEmp(false);
    } else {
      setEdu(false);
    }
  };
  const handleEmpMenu = () => {
    if (!emp) {
      setEmp(true);
      setEdu(false);
    } else {
      setEmp(false);
    }
  };

  const mpEduc = [
    {
      from: "1996",
      to: "1997",
      institution: "TUC",
      qualification: "Post Graduate Diploma in Human Resource Management",
    },
    {
      from: "1988",
      to: "1992",
      institution: "Moi University",
      qualification: "Bachelor of Arts, Second Class Honors (Upper Division)",
    },
    {
      from: "2001",
      to: "",
      institution: "ILO Centre- Geneva",
      qualification:
        "Post Graduate in Organization Development and Change Management",
    },
    {
      from: "1986",
      to: "1987",
      institution: "Musingu",
      qualification: "KACE",
    },
    {
      from: "1982",
      to: "1985",
      institution: "Kivaywa",
      qualification: "KCE",
    },
    {
      from: "1974",
      to: "1981",
      institution: "Mugunga Primary School",
      qualification: "Kenya Certificate of Primary Education",
    },
  ];

  const mpEmpHist = [
    {
      from: "2013",
      to: "2017",
      employer: "County Government of Kakamega",
      position: "Chief of Staff/Advisor",
    },
    {
      from: "2020",
      to: "2022",
      employer: "County Government of Kakamega",
      position: "Chief Officer, Livestock and Veterinary Services",
    },
    {
      from: "2020",
      to: "2018",
      employer: "Council of Governors",
      position: "County and Parliamentary Liaison Services",
    },
    {
      from: "2008",
      to: "2012",
      employer: "Kenya Bureau of Standards",
      position: "Consultant",
    },
    {
      from: "2006",
      to: "2008",
      employer: "Insteel Limited",
      position: "Human Resource Manager",
    },
    {
      from: "2005",
      to: "",
      employer: "Delmonte (K) Limited",
      position: "Human Resource Manager",
    },
    {
      from: "2004",
      to: "2005",
      employer: "Coca Cola, Rift Valley",
      position: "Human Resource Manager",
    },
    {
      from: "1999",
      to: "2004",
      employer: "South Nyanza Sugar Company Limited",
      position: "Employee Relations Manager",
    },
    {
      from: "1992",
      to: "1999",
      employer: "Kenya Broadcasting Corporation",
      position: "Personnel Manager",
    },
  ];

  return (
    <div className="flex w-full  items-center  justify-center">
      {profile == "MP" ? (
        <div className="flex flex-col items-center ">
          <div className="flex lg:flex-row flex-col items bg-gray-100  md:w-[800px] my-20 justify-between">
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
                  Honourable Nabwera Daraja Nabii was elected the Memeber of
                  parliament for Lugari Constituency during the Kenyan General
                  Elections on 9th August 2022. He assumed office on 16th August
                  after taking the oath of office. He serves in the Committees
                  of Education and research; and the Public Accounts Committee.
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
          <div className="mx-10 mb-10">
            <h1 className="text-green text-[30px] items-center justify-center underline-motion">
              Welcome Note
            </h1>
            <p className="text-gray-500 flex flex-col gap-2">
              Welcome to Lugari Constituency Website, a platform dedicated to
              fostering engagement, Connectivity, Communication and progress of
              our Constituency and engaging with our community. We are excited
              to share with you the objectives, and goals of this website. First
              and foremost, Lugari Constituency website serves as a vital hub
              for our constituency subjects. It offers a seamless and accessible
              channel for constituents to stay informed about The MP's
              initiatives, programmes, activities, itinerary, progress,
              policies, and development projects. Here, you will find
              comprehensive information about the services we provide and
              progress . Our aim is to empower our subjects with knowledge,
              ensuring transparency and accountability in governance. For our
              partners and stakeholders, Lugari Constituency Website serves as a
              collaborative platform. It enables us to foster stronger
              relationships and promote active engagement in our shared
              objectives. By providing up-to-date information on our strategic
              plans, ongoing projects, and opportunities for collaboration, we
              invite stakeholders to actively participate in shaping the
              development and progress of our constituency. Visitors to our
              website will discover a wealth of information about our
              constituency's unique identity, culture, and heritage. We showcase
              the natural beauty, historical landmarks, and local businesses
              that make our community special. Through engaging content and
              multimedia, we aim to promote tourism, attract investment, and
              cultivate a sense of pride among our residents and visitors alike.
              Job seekers will find Lugari Constituency Website to be an
              invaluable resource. We feature a dedicated section where
              employment opportunities within our constituency are regularly
              updated. By connecting job seekers with local and external
              employers, we contribute to the economic growth and prosperity of
              our community. We believe in providing meaningful employment
              opportunities that can positively impact the lives of our
              constituents. Lastly, Lugari Constituency Website serves as a
              bridge between our constituency and the county government,
              national government, and the world. It allows us to communicate
              our needs, concerns, and aspirations to the appropriate
              authorities. By showcasing our achievements and challenges, we
              seek support and resources to address pressing issues and enhance
              the overall well-being of our constituents. Furthermore, we invite
              the global community to learn about our constituency, fostering
              international collaboration and exchange of ideas. The website
              will have a live portal on specified days when on notice basis, I
              will interact with the citizens personally to ensure that I get it
              first hand. My people in the new dawn I am your Mr. Fix it. The 4G
              Network processor will be a 24,hour effective communication
              supremo. In conclusion, Lugari Constituency Website plays a
              pivotal role in connecting our constituents, partners,
              stakeholders, visitors, job seekers, employees, the County
              Government, National Government, and the world. By fulfilling its
              objectives of transparency, collaboration, community empowerment,
              economic growth, and global outreach, this website serves as a
              catalyst for positive change and progress. We invite you to
              explore and engage with us on this platform, as together, we
              strive towards a brighter future for our constituency.{" "}
              <span className="text-green">
                Hon Nabwera Daraja Nabii, BGJ, MP Communications Director.
              </span>
            </p>
          </div>
          <div className="w-[300px] lg:w-[800px] md:ml-0 ml-[-20px] cursor-pointer flex flex-col my-2 ">
            <div className="flex flex-col md:text-[15px] text-[12px] ">
              <h1
                className=" text-green hover:border-green py-5 border-2 px-2 "
                onClick={handleEdMenu}
              >
                Education Background{" "}
                <span className="flex float-right">
                  {edu ? <RemoveIcon /> : <AddIcon />}
                </span>
              </h1>
              <table
                className={`${
                  edu ? "flex  flex-col " : "hidden"
                }  divide-y divide-gray-200 `}
              >
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-100">From</th>
                    <th className="py-2 px-4 bg-gray-100">To</th>
                    <th className="py-2 px-4 bg-gray-100">Institution</th>
                    <th className="py-2 px-4 bg-gray-100">Qualification</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {mpEduc.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4">{item.from}</td>
                      <td className="py-2 px-4">{item.to}</td>
                      <td className="py-2 px-4">{item.institution}</td>
                      <td className="py-2 px-4">{item.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col md:text-[15px] text-[12px] ">
              <h1
                className=" text-green hover:border-green   w-full py-5 border-2 px-2"
                onClick={handleEmpMenu}
              >
                Employment History{" "}
                <span className="flex float-right">
                  {emp ? <RemoveIcon /> : <AddIcon />}
                </span>
              </h1>
              <table
                className={`${
                  emp ? "flex flex-col flex-wrap" : "hidden"
                }  divide-y divide-gray-200`}
              >
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-100">From</th>
                    <th className="py-2 px-4 bg-gray-100">To</th>
                    <th className="py-2 px-4 bg-gray-100">Employer</th>
                    <th className="py-2 px-4 bg-gray-100">Position Held</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mpEmpHist.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4">{item.from}</td>
                      <td className="py-2 px-4">{item.to}</td>
                      <td className="py-2 px-4">{item.employer}</td>
                      <td className="py-2 px-4">{item.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
      ) : profile == "DCM" ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProfileCard;
