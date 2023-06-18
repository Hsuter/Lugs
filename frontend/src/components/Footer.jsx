import React, { useMemo } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { coarms } from "../assets";
import { CircularProgress } from "@mui/material";

const Footer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAoHotEISrHqjAAAeQ78VhcDV-Tm5EgpQ0",
  });
  const center = useMemo(() => ({ lat: 0.6616836, lng: 34.8817256 }), []);
  return (
    <></>
    //<div
    //  className="flex flex-col w-full bg-green items-center gap-4  footertxt"
    //  id="contacts"
    //>
    //  <div className="flex lg:flex-row flex-col bg-greenjustify-around gap-20 ">
    //    <div className="flex flex-col bg-gray-100 opacity-80 text-blackdark font-bold justify-center  items-center gap-2  w-[500px] pt-16">
    //      <h1>OFFICIAL CONTACTS</h1>
    //      <p>
    //        <WhatsAppIcon />
    //        0702600436
    //      </p>
    //      <p>
    //        <LocalPhoneIcon /> 0733608860
    //      </p>
    //      <p>
    //        <EmailIcon />
    //        info@lugariconstituency.go.ke
    //      </p>
    //      <img src={coarms} alt="coart_of_arms" className="w-[300px]" />
    //    </div>
    //    <div className="flex flex-col text-white  items-center list-none gap-3 justify-center">
    //      <h1 className="text-[30px]">Services</h1>
    //      <li className="hover:text-blue-600 cursor-pointer">
    //        <a href="https://lugari.ngcdf.go.ke/downloads/" target="_blank">
    //          Busary Forms
    //        </a>
    //      </li>
    //      <li className="hover:text-blue-600 cursor-pointer">
    //        {" "}
    //        <a href="https://lugari.ngcdf.go.ke/jobs/" target="_blank">
    //          {" "}
    //          Carrers
    //        </a>
    //      </li>
    //      <li className="hover:text-blue-600 cursor-pointer">
    //        <a href="https://lugari.ngcdf.go.ke/downloads/" target="_blank">
    //          {" "}
    //          Tenders & Notices
    //        </a>
    //      </li>
    //      <li className="hover:text-blue-600 cursor-pointer">
    //        Emergency Services
    //      </li>
    //      <li className="hover:text-blue-600 cursor-pointer">
    //        <a href="https://lugari.ngcdf.go.ke/downloads/" target="_blank">
    //          {" "}
    //          Downloads
    //        </a>
    //      </li>
    //      <li className="hover:text-blue-600 cursor-pointer">
    //        FAQs & Help Desks
    //      </li>
    //    </div>
    //    <div className=" flex flex-col justify-center items-center ">
    //      {!isLoaded ? (
    //        <CircularProgress />
    //      ) : (
    //        <GoogleMap
    //          mapContainerClassName="map-container w-[500px] h-[300px]"
    //          center={center}
    //          zoom={10}
    //        >
    //          <MarkerF position={{ lat: 0.6616836, lng: 34.8817256 }} />
    //        </GoogleMap>
    //      )}
    //    </div>
    //  </div>
    //  <p className="text-white">
    //    Copyright © 2023 Constituency of Lugari . All Rights Reserved.
    //  </p>
    //</div>
  );
};

export default Footer;
