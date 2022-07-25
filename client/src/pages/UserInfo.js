import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../redux/userSlice";
import { Image } from "cloudinary-react";
import { DocumentIcon } from "@heroicons/react/solid";

const UserInfo = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.username.value);
  const { id } = useParams();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [academic, setAcademic] = useState([]);
  const [teachingExp, setTeachingExp] = useState([]);
  const [industrialExp, setIndustrialExp] = useState([]);
  const [consultancy, setConsultancy] = useState([]);
  const [thesis, setThesis] = useState("");
  const [sponsoredProjects, setSponsoredProjects] = useState([]);
  const [publications, setPublications] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateData = async () => {
      if (!localStorage.getItem("adminToken")) {
        navigate("/login");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private/admin", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("adminToken");
        localStorage.removeItem("id");
        setError("You are not authorized please refresh page and login");
      }
    };

    fetchPrivateData();
  }, []);

  useEffect(() => {
    const userFormData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(`/api/form/forminfo/${id}`, config);
        setUser(data.user);
        setAddress(data.user.address);
        setAcademic(data.user.academic);
        setTeachingExp(data.user.teachingExp);
        setIndustrialExp(data.user.industrialExp);
        setConsultancy(data.user.consultancy);
        setThesis(data.user.thesis);
        setSponsoredProjects(data.user.sponsoredProjects);
        setPublications(data.user.publications);
      } catch (error) {
        console.log(error);
      }
    };
    userFormData();
  }, []);

  useEffect(() => {
    const userData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const AdminId = localStorage.getItem("id")
        const { data } = await axios.get(`/api/form/forminfo/${AdminId}`, config);
        dispatch(login(data.user.username));
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, []);

  return error ? (
    <span className="alert alert-error shadow-lg rounded-none">{error} </span>
  ) : (
    <>
      <div className="min-h-screen">
        <Nav />
        <Header title="Admin Dashboard" />
        <h2 className="m-4 text-lg">
          User Details of{" "}
          <span className="font-bold mx-1">{user.username}</span>
        </h2>
        <div className="flex w-full my-6 p-4 border-2 border-gray-600 font-sans  lg:w-full">
          <div className="flex flex-col p-3 w-full">
            <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
              Summary
            </h3>
            {error && (
              <div className="alert alert-error shadow-sm my-2 text-sm h-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}
            <h2 className="text-center text-xl my-4">General Details</h2>
            <div className="flex justify-center flex-col lg:flex-row lg:justify-between">
              <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-3/4 lg:grid-cols-3 lg:m-0 lg:gap-5">
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Advertisement No</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    id="adNo"
                    value={user.adNo}
                  />
                </div>
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Post Applied</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required
                    id="post"
                    placeholder="Select post applied"
                    value={user.post}
                  />
                </div>
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Discipline</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required
                    id="post"
                    placeholder="Select post applied"
                    value={user.discipline}
                  />
                </div>
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Name</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required
                    id="post"
                    placeholder="Select post applied"
                    value={`${user.fname} ${user.mname} ${user.lname}`}
                  />
                </div>
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Category</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required
                    id="post"
                    placeholder="Select post applied"
                    value={user.category}
                  />
                </div>
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Phone Number</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required
                    id="post"
                    placeholder="Select post applied"
                    value={user.phno}
                  />
                </div>
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Email Id</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required
                    id="post"
                    placeholder="Select post applied"
                    value={user.email}
                  />
                </div>
                <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                  <label className="text-sm font-light">Marital Status</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required
                    id="post"
                    placeholder="Select post applied"
                    value={user.maritalStatus}
                  />
                </div>
              </div>
              <div className="flex w-56 mb-4 flex-col m-auto  lg:w-80 lg:mb-auto">
                <label className="text-sm font-light mb-2 text-center">
                  Profile Photo
                </label>
                {user.userPPUrl ? (
                  <div className="avatar flex justify-center">
                    <div className="w-56 ">
                      <Image
                        className="flex w-56 mb-4 flex-col m-auto h-40 bg-contain lg:w-80 lg:mb-auto rounded-full"
                        cloudName="saahildev"
                        publicId={user.userPPUrl}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="avatar flex justify-center">
                    <div className="w-56 ">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"
                        alt="default_profile"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="divider"></div>
            <h2 className="text-center text-xl my-4">Address</h2>
            <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-4 lg:m-0 lg:gap-2">
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">location</label>
                <textarea
                  disabled
                  className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  type="text"
                  value={address.loc}
                />
              </div>
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Pincode</label>
                <input
                  disabled
                  className="px-3 py-1.5
        w-full
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  type="text"
                  value={address.pin}
                />
              </div>
            </div>
            <div className="divider"></div>
            <h2 className="text-center text-xl my-4">Academic Information</h2>
            {academic.map((input, index) => {
              return (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Degree/Title</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      id="degree"
                      autoComplete="true"
                      placeholder="Enter degree"
                      value={input.degree}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Branch/Specialization
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      id="branch"
                      autoComplete="true"
                      placeholder="Enter branch"
                      value={input.branch}
                    />
                  </div>

                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      University/College
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      id="university"
                      autoComplete="true"
                      placeholder="Enter university"
                      value={input.university}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Completion year
                    </label>
                    <input
                      disabled
                      className="
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      id="completedYear"
                      autoComplete="true"
                      placeholder="Enter completion year"
                      value={input.completedYear}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Grade/Marks</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      id="grade"
                      autoComplete="true"
                      placeholder="Enter grade"
                      value={input.grade}
                    />
                  </div>
                </div>
              );
            })}
            <a
              href={user.appendix4}
              rel="noreferrer"
              target="_blank"
              className="flex items-center w-50 btn  bg-[#020493] hover:bg-[#0608c2] text-white border-none m-auto text-sm"
            >
              Marksheet / Certificates <DocumentIcon className="h-5 mx-2" />
            </a>
            <div className="divider"></div>
            <h2 className="text-center text-xl my-4">Teaching Experience</h2>

            {teachingExp.map((input, index) => {
              return (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-5 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Employer</label>
                    <input
                      disabled
                      className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="employer"
                      autoComplete="true"
                      placeholder="Enter employer"
                      value={input.employer}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Position(Regular / Contractual)
                    </label>
                    <input
                      disabled
                      className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="position"
                      autoComplete="true"
                      placeholder="Enter position"
                      value={input.position}
                    />
                  </div>

                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Date of Join</label>
                    <input
                      disabled
                      className="
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="dateOfJoining"
                      autoComplete="true"
                      placeholder="Enter dateOfJoining"
                      value={input.dateOfJoining}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Date of Leaving
                    </label>
                    <input
                      disabled
                      className="
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="dateOfLeaving"
                      autoComplete="true"
                      placeholder="Enter dateOfLeaving"
                      value={input.dateOfLeaving}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Pay Level</label>
                    <input
                      disabled
                      className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="payLevel"
                      autoComplete="true"
                      placeholder="Enter pay level"
                      value={input.payLevel}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Pay in Pay Level
                    </label>
                    <input
                      disabled
                      className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="PayInPayLevel"
                      autoComplete="true"
                      placeholder="Enter pay in pay level"
                      value={input.PayInPayLevel}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">GP / AGP</label>
                    <input
                      disabled
                      className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="GP"
                      autoComplete="true"
                      placeholder="Enter gross pay"
                      value={input.GP}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Reason for Leaving
                    </label>
                    <input
                      disabled
                      className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="reasonForLeaving"
                      autoComplete="true"
                      placeholder="Enter reason for leaving"
                      value={input.reasonForLeaving}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex w-1/2 flex-col lg:flex-row lg:justify-evenly m-auto">
              <a
                href={user.appendix5}
                rel="noreferrer"
                target="_blank"
                className="flex items-center w-50 btn  bg-[#020493] hover:bg-[#0608c2] text-white border-none m-auto my-2"
              >
                Experience Certificates <DocumentIcon className="h-5 mx-2" />
              </a>
              <a
                href={user.appendix6}
                rel="noreferrer"
                target="_blank"
                className="flex items-center w-50 btn  bg-[#020493] hover:bg-[#0608c2] text-white border-none m-auto my-2"
              >
                NOC <DocumentIcon className="h-5 mx-2" />
              </a>
            </div>
            <div className="divider"></div>
            <h2 className="text-center text-xl my-4">Industrial Experience</h2>
            {industrialExp.map((input, index) => (
              <div
                key={index}
                className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
              >
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Period</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="period"
                    autoComplete="true"
                    placeholder="Enter period"
                    value={input.period}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Organization</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="organisation"
                    autoComplete="true"
                    placeholder="Enter organisation"
                    value={input.organisation}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Designation</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="designation"
                    autoComplete="true"
                    placeholder="Enter designation"
                    value={input.designation}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Nature of Work</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="natureOfWork"
                    autoComplete="true"
                    placeholder="Enter nature of work"
                    value={input.natureOfWork}
                  />
                </div>
              </div>
            ))}
            <div className="divider"></div>
            <h2 className="text-center text-xl my-4">Consultancy</h2>
            {consultancy.map((input, index) => (
              <div
                key={index}
                className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-5 lg:w-full  gap-4 "
              >
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Period</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="period"
                    autoComplete="true"
                    placeholder="Enter period"
                    value={input.period}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Organization</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="organisation"
                    autoComplete="true"
                    placeholder="Enter organisation"
                    value={input.organisation}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Title</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="title"
                    autoComplete="true"
                    placeholder="Enter title"
                    value={input.title}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Grant Amount</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="grantAmount"
                    autoComplete="true"
                    placeholder="Enter Grant amount"
                    value={input.grantAmount}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Co-Investigators</label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="coInvestigators"
                    autoComplete="true"
                    placeholder="Enter coInvestigators"
                    value={input.coInvestigators}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">
                    Status (completed/ongoing)
                  </label>
                  <input
                    disabled
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="status"
                    autoComplete="true"
                    placeholder="Enter status"
                    value={input.status}
                  />
                </div>
              </div>
            ))}
            <div className="divider"></div>
            <div className="flex justify-center w-full m-auto mb-6 p-4 font-sans ">
              <div className="flex flex-col  p-3">
                <h2 className="text-center text-xl my-4">Thesis</h2>

                <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-cols-1 lg:grid-cols-4 gap-4 ">
                  <div className="w-40">
                    <label className="text-sm font-light">
                      Bachelors level
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="bachelorsLvl"
                      autoComplete="true"
                      value={thesis.bachelorsLvl}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">Masters level</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="mastersLvl"
                      autoComplete="true"
                      value={thesis.mastersLvl}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">
                      Phd (Co-supervision)
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="phdCo"
                      autoComplete="true"
                      value={thesis.phdCo}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">Phd (Single)</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="phdSingle"
                      autoComplete="true"
                      value={thesis.phdSingle}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <h2 className="text-center text-xl my-4">Sponsored Projects</h2>

            {sponsoredProjects.map((input, index) => (
              <>
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Period</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="period"
                      autoComplete="true"
                      placeholder="Enter period"
                      value={input.period}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Organization</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="organisation"
                      autoComplete="true"
                      placeholder="Enter organisation"
                      value={input.organisation}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Grant Amount</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="grantAmount"
                      autoComplete="true"
                      placeholder="Enter Grant amount"
                      value={input.grantAmount}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Co-Investigators
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="coInvestigators"
                      autoComplete="true"
                      placeholder="Enter coInvestigators"
                      value={input.coInvestigators}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Status(completed/ongoing)
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="status"
                      autoComplete="true"
                      placeholder="Enter status"
                      value={input.status}
                    />
                  </div>
                </div>
                <div className="divider w-1/2 m-auto"></div>
              </>
            ))}
            <div className="divider"></div>
            <div className="flex justify-center w-full m-auto p-4 font-sans ">
              <div className="flex flex-col  p-3">
                <h2 className="text-center text-xl my-4">Publications</h2>

                <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 ">
                  <div className="w-40">
                    <label className="text-sm font-light">
                      Total Number of papers
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="totalPapers"
                      autoComplete="true"
                      value={publications.totalPapers}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">
                      Referred Journals
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="ReferredJournals"
                      autoComplete="true"
                      value={publications.referredJournals}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">
                      SCI Indexed Journals
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="sciIndexedJournal"
                      autoComplete="true"
                      value={publications.sciIndexedJournal}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">
                      National Conferences
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="nationalConferences"
                      autoComplete="true"
                      value={publications.nationalConferences}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">
                      International Conferences
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="internationalConferences"
                      autoComplete="true"
                      value={publications.internationalConferences}
                    />
                  </div>
                  <div className="w-46">
                    <label className="text-sm font-light">
                      SCI Indexed journal(outside phd)
                    </label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="sciIndexJournalOutsidePhd"
                      autoComplete="true"
                      value={publications.sciIndexJournalOutsidePhd}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">Book Chapters</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="bookChapters"
                      autoComplete="true"
                      value={publications.bookChapters}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">Books</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="books"
                      autoComplete="true"
                      value={publications.books}
                    />
                  </div>
                  <div className="w-40">
                    <label className="text-sm font-light">Patents</label>
                    <input
                      disabled
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="number"
                      required
                      name="patents"
                      autoComplete="true"
                      value={publications.patents}
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              href={user.appendix7}
              rel="noreferrer"
              target="_blank"
              className="flex items-center w-50 btn  bg-[#020493] hover:bg-[#0608c2] text-white border-none m-auto"
            >
              Best Papers <DocumentIcon className="h-5 mx-2" />
            </a>
            <div className="divider"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInfo;
