import React from "react";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DocumentTextIcon } from "@heroicons/react/solid";
import Application from "./../components/Application";
import axios from "axios";
import { login } from "../redux/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.username.value);
  const [activeTab, setActiveTab] = useState(1);
  const [privateData, setPrivateData] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchPrivateData = async () => {
      if (!localStorage.getItem("authToken")) {
        navigate("/login");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private/user", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("adminToken");
        localStorage.removeItem("id");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, []);

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

  return error ? (
    <span className="alert alert-error shadow-lg rounded-none">{error}</span>
  ) : (
    <div>
      <div className="min-h-screen">
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
              {activeTab === 1 && (
                <div className="w-full">
                  <Application />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
