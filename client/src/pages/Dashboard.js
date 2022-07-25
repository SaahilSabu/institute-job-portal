import React from "react";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DocumentTextIcon } from "@heroicons/react/solid";
import Summary from "./../components/forms/Summary";
import axios from "axios";
import { login } from "../redux/userSlice";
import GeneralDetails from "./../components/forms/GeneralDetails";
import AcademicDetails from "./../components/forms/AcademicDetails";
import EmploymentDetails from "./../components/forms/EmploymentDetails";
import References from "./../components/forms/References";
import OtherDetails from "./../components/forms/OtherDetails";
import CheckListAndSubmit from "./../components/forms/CheckListAndSubmit";

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
                  General
                </li>
                <li
                  onClick={() => setActiveTab(2)}
                  className={`tab tab-bordered ${
                    activeTab === 2 ? "tab-active" : ""
                  }`}
                >
                  Academic
                </li>
                <li
                  onClick={() => setActiveTab(3)}
                  className={`tab tab-bordered ${
                    activeTab === 3 ? "tab-active" : ""
                  }`}
                >
                  Employment
                </li>
                <li
                  onClick={() => setActiveTab(4)}
                  className={`tab tab-bordered ${
                    activeTab === 4 ? "tab-active" : ""
                  }`}
                >
                  References
                </li>
                <li
                  onClick={() => setActiveTab(5)}
                  className={`tab tab-bordered ${
                    activeTab === 5 ? "tab-active" : ""
                  }`}
                >
                  Other
                </li>
                <li
                  onClick={() => setActiveTab(6)}
                  className={`tab tab-bordered ${
                    activeTab === 6 ? "tab-active" : ""
                  }`}
                >
                  Submit
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-4">
              {activeTab === 1 && (
                <div className="w-full">
                  <GeneralDetails />
                </div>
              )}
              {activeTab === 2 && (
                <div className="w-full">
                  <AcademicDetails />
                </div>
              )}
              {activeTab === 3 && (
                <div className="w-full">
                  <EmploymentDetails />
                </div>
              )}
              {activeTab === 4 && (
                <div className="w-full">
                  <References />
                </div>
              )}
              {activeTab === 5 && (
                <div className="w-full">
                  <OtherDetails />
                </div>
              )}
              {activeTab === 6 && (
                <div className="w-full">
                  <CheckListAndSubmit />
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
