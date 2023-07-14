import React from "react";

const Elimu = () => {
  return (
    <div className="h-[100vh] flex">
      <ul className="flex flex-col gap-10 font-bold  list-decimal mx-10 cursor-pointer mt-10">
        <li className="hover:text-blue-600">
          {" "}
          <a
            href="https://drive.google.com/file/d/1-XO0g-4moaKxAc0WxEIkz4Kn9FB47zM3/view?usp=sharing"
            target="_blank"
          >
            {" "}
            Top students per subject
          </a>
        </li>{" "}
        <li className="hover:text-blue-600">
          {" "}
          <a
            href="https://docs.google.com/spreadsheets/d/131g_wvGFZFmcOyngUuxKebSuSH5xu51N/edit?usp=sharing&ouid=101835176511103095902&rtpof=true&sd=true"
            target="_blank"
          >
            {" "}
            Form 4 Lugari joint examination results
          </a>
        </li>
        <li className="hover:text-blue-600">
          {" "}
          <a
            href="https://drive.google.com/file/d/1fXt0C-iefRKXXCj51hU-6T42kxey6zwE/view?usp=sharing"
            target="_blank"
          >
            {" "}
            Merit list Form 4 Lugari joint examination results
          </a>
        </li>
        <li className="hover:text-blue-600">
          {" "}
          <a
            href="https://drive.google.com/file/d/17EY6covPH2jGYeJeKQNue9AcL_MMhamn/view?usp=sharing"
            target="_blank"
          >
            {" "}
            Subjects statistics
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Elimu;
