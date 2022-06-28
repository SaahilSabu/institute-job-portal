import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/outline";
const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#020493] p-4 text-gray-300 select-none text-xs sm:text-sm font-sans">
      <li className="list-none flex justify-center sm:justify-end mx-6 py-1 divide-x-2 divide-gray-300 items-center">
        <ul className="hover:text-white px-3 sm:px-5 cursor-pointer">Why IIITM ?</ul>
        <ul
          onClick={() => navigate("/login")}
          className="hover:text-white flex items-center px-3 sm:px-5 cursor-pointer"
        >
          <UserIcon className="h-3 sm:h-4 px-1" />
          Login
        </ul>
      </li>
    </nav>
  );
};

export default Nav;
