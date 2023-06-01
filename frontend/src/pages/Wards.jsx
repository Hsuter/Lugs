import React from "react";

const Wards = () => {
  return (
    <div className="flex flex-col gap-8  my-8">
      <h1 className="text-green text-[30px] underline-motion ">
        Lugari Constituency Wards
      </h1>

      <div className="items-center flex flex-col mx-8 ">
        <h1 className="text-green text-[15px] font-bold">Mautuma ward</h1>
        <p>
          Mautuma County assembly ward is an electoral ward in Kenya. It is one
          of the wards in Lugari constituency in Kakamega county. . It has
          Registered voters per polling station by electoral area/ward and
          constitutes of an approximate population of 25,082 .
          <p>
            Community Areas; <li>IVONA</li> <li> MAKONGENI</li> <li>SIPANDE</li>{" "}
            <li>MILIMANI</li> <li>SINOKO</li> <li>KEWA</li>
          </p>
        </p>
      </div>

      <div className="items-center flex flex-col mx-8 ">
        <h1 className="text-green text-[15px] font-bold">CHEKALINI ward</h1>
        <p className="flex flex-col w-full">
          Chekalini Ward is one of the six wards within Kakamega county, Lugari
          Constituency.
          <br /> Lugari Sub-county, it is devided into the following community
          areas:<li>ITUMBU</li>
          <li>MILIMANI</li>
          <li>KABURENGU</li>
          <li>MBAJO</li>
          <li>MUKHUYU</li>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-green text-[15px] font-bold">Lugari ward</h1>
      </div>
    </div>
  );
};

export default Wards;
