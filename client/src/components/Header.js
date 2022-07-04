import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-white flex items-center font-sans justify-between px-4 sm:justify-start sm:divide-x-2 select-none">
      <img
        onClick={() => {
          navigate("/");
        }}
        src="http://www.iiitm.ac.in/templates/shaper_educon/images/presets/preset1/logo@2x.png"
        alt="logo"
        className="p-1 h-16 cursor-pointer"
      />
      <h1 className=" text-3xl text-gray-600 font-light sm:pl-4">{title}</h1>
    </div>
  );
};

export default Header;
