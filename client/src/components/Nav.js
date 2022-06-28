import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice.js";
const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username.value);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-[#020493] p-4 text-gray-300 select-none text-xs sm:text-sm font-sans">
      <li className="list-none flex justify-center sm:justify-end mx-6 py-1 divide-x-2 divide-gray-300 items-center">
        <ul className="hover:text-white px-3 sm:px-5 cursor-pointer">
          Why IIITM ?
        </ul>
        {username ? (
          <>
            <ul
              onClick={() => navigate("/login")}
              className="hover:text-white flex items-center px-3 sm:px-5 cursor-pointer"
            >
              <UserIcon className="h-3 sm:h-4 px-1" />
              {username}
            </ul>
            <ul
              onClick={() => handleLogout}
              className="hover:text-white flex items-center px-3 sm:px-5 cursor-pointer"
            >
              Logout
            </ul>
          </>
        ) : (
          <ul
            onClick={() => navigate("/login")}
            className="hover:text-white flex items-center px-3 sm:px-5 cursor-pointer"
          >
            <UserIcon className="h-3 sm:h-4 px-1" />
            Login
          </ul>
        )}
      </li>
    </nav>
  );
};

export default Nav;
