import React from "react";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { DocumentTextIcon } from "@heroicons/react/solid";
import Application from './../components/Application';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const username = useSelector((state) => state.username.value);
  const [activeTab, setActiveTab] = useState(1);

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
      <Header title="Dashboard" />
      <h2 className="m-4 text-lg">
        Welcome back <span className="font-bold mx-1">{username}</span>
      </h2>
      <div className="mx-6">
        <div className=" border p-4 rounded border-gray-200">
          <div className="flex my-2 items-center">
            <h3 className="text-5xl font-light">Resume</h3>
            <DocumentTextIcon className="h-12 mx-2 text-[#020493] mt-1" />
          </div>
          <div className="tabs flex justify-center">
            <ul>
              <li
                onClick={() => setActiveTab(1)}
                className={`tab tab-bordered ${
                  activeTab === 1 ? "tab-active" : ""
                }`}
              >
                Tab 1
              </li>
              <li
                onClick={() => setActiveTab(2)}
                className={`tab tab-bordered ${
                  activeTab === 2 ? "tab-active" : ""
                }`}
              >
                Tab 2
              </li>
              <li
                onClick={() => setActiveTab(3)}
                className={`tab tab-bordered ${
                  activeTab === 3 ? "tab-active" : ""
                }`}
              >
                Tab 3
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-4">
            {activeTab === 1 && <div className="w-full">
              <Application />
            </div>}
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
