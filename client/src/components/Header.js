import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="p-4 bg-white cursor-pointer flex items-center font-sans justify-between px-4 sm:justify-start sm:divide-x-2 select-none"
    >
      <img
        src="http://www.iiitm.ac.in/templates/shaper_educon/images/presets/preset1/logo@2x.png"
        alt="logo"
        className="p-1 h-16"
      />
      <h1
        className=" text-3xl text-gray-600 font-light sm:pl-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Careers
      </h1>
    </div>
  );
};

export default Header;
