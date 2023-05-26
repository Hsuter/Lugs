import React, { useMemo } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { coarms } from "../assets";

const Footer = () => {
  const { isLoaded } = useLoadScript({
    useGoogleMap: "AIzaSyCmlJ5mK0A4AB3mCCI12k-YSGVHdkanznA",
  });

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <div
      className="flex flex-col w-full bg-green items-center footertxt"
      id="contacts"
    >
      <div className="flex lg:flex-row flex-col bg-green gap-8  justify-around items-center ">
        <div className="flex flex-col bg-gray-500 text-blackdark font-bold justify-center  items-center gap-2 pt-4 ">
          <h1>OFFICIAL CONTACTS</h1>
          <p>
            <WhatsAppIcon />
            0702600436
          </p>
          <p>
            <LocalPhoneIcon /> 0733608860
          </p>
          <p>
            <EmailIcon />
            info@lugariconstituency.go.ke
          </p>
          <img src={coarms} alt="coart_of_arms" className="w-[300px]" />
        </div>
        <div className="flex flex-col text-white  items-center list-none w-full ">
          <h1 className="text-[30px]">Services</h1>
          <li className="hover:text-blue-600 cursor-pointer">Busary Forms</li>
          <li className="hover:text-blue-600 cursor-pointer">Careers</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Tenders & Notices
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Emergency Services
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Downloads</li>
          <li className="hover:text-blue-600 cursor-pointer">
            FAQs & Help Desks
          </li>
        </div>
        <div>
          {isLoaded ? (
            <div>
              <GoogleMap
                zoom={10}
                center={center}
                key="AIzaSyCmlJ5mK0A4AB3mCCI12k-YSGVHdkanznA"
                mapContainerClassName="map-container"
              >
                <MarkerF position={center} />
              </GoogleMap>
            </div>
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
      <p>Copyright © 2023 Constituency of Lugari . All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
