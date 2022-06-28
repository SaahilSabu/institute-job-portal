import React from "react";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import AppliedPositions from "./../components/AppliedPositions";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Footer from "./../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const username = useSelector((state) => state.username.value)

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const userData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(`/api/form/forminfo/${id}`, config);
        dispatch(login(data.user.username));
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <h2 className="m-4 text-lg">
        Welcome back <span className="font-bold mx-1">{username}</span>
      </h2>
      <div className=" flex flex-col sm:flex-row sm:justify-between  ">
        <AppliedPositions />
        <div className="sm:mr-4 border p-4 rounded border-gray-200">
          <h2 className="ml-4 text-2xl font-light">Open Positions</h2>
          <div className="flex flex-col ml-auto mr-auto center justify-center  bg-white w-11/12 p-2 sm:w-full  sm:p-4 ">
            <div className="flex justify-between items-center border-t-2 border-gray-200  py-3">
              <div className="cursor-pointer">
                <h2 className="text-xl font-medium transform transition duration-500 hover:text-[#020493]  ">
                  Assistant Prof
                </h2>
                <h3 className=" font-light">Permanent</h3>
                <h3 className="text-xs">
                  23.06.22 | Dept. of Computer Science
                </h3>
              </div>
              <div>
                <ChevronRightIcon className="h-5  transform transition duration-500  hover:scale-150 hover:text-[#020493] " />
              </div>
            </div>

            <div className="flex justify-between items-center border-t-2 border-gray-200  py-3">
              <div className="cursor-pointer">
                <h2 className="text-xl font-medium transform transition duration-500 hover:text-[#020493]  ">
                  Guest Faculty
                </h2>
                <h3 className=" font-light">Temporary</h3>
                <h3 className="text-xs">23.06.22 | Dept. of Humanities</h3>
              </div>
              <div>
                <ChevronRightIcon className="h-5 transform transition duration-500  hover:scale-150 hover:text-[#020493]" />
              </div>
            </div>

            <div className="flex justify-between items-center border-t-2 border-gray-200  py-3">
              <div className="cursor-pointer">
                <h2 className="text-xl font-medium transform transition duration-500 hover:text-[#020493]  ">
                  Associate Professor
                </h2>
                <h3 className=" font-light">Permanent</h3>
                <h3 className="text-xs">23.06.22 | Dept. of ECE</h3>
              </div>
              <div>
                <ChevronRightIcon className="h-5 transform transition duration-500  hover:scale-150 hover:text-[#020493]" />
              </div>
            </div>
            <div className="flex justify-between items-center border-t-2 border-gray-200  py-3">
              <div className="cursor-pointer">
                <h2 className="text-xl font-medium transform transition duration-500 hover:text-[#020493]  ">
                  Associate Professor
                </h2>
                <h3 className=" font-light">Permanent</h3>
                <h3 className="text-xs">23.06.22 | Dept. of ECE</h3>
              </div>
              <div>
                <ChevronRightIcon className="h-5 transform transition duration-500  hover:scale-150 hover:text-[#020493]" />
              </div>
            </div>
            <div className="flex justify-between items-center border-t-2 border-gray-200  py-3">
              <div className="cursor-pointer">
                <h2 className="text-xl font-medium transform transition duration-500 hover:text-[#020493]  ">
                  Associate Professor
                </h2>
                <h3 className=" font-light">Permanent</h3>
                <h3 className="text-xs">23.06.22 | Dept. of ECE</h3>
              </div>
              <div>
                <ChevronRightIcon className="h-5 transform transition duration-500  hover:scale-150 hover:text-[#020493]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute left-0 bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
