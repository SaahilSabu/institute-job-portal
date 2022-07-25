import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { UploadIcon } from "@heroicons/react/outline";

const EmploymentDetails = () => {
  const id = localStorage.getItem("id");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  const [teachingExp, setTeachingExp] = useState([
    {
      employer: "",
      position: "",
      dateOfJoining: "",
      dateOfLeaving: "",
      payLevel: "",
      PayInPayLevel: "",
      GP: "",
      reasonForLeaving: "",
    },
  ]);
  const [postPhdExp, setPostPhdExp] = useState("");
  const [profBodyMembership, setProfBodyMembership] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
  ]);

  const [appendix5, setAppendix5] = useState("");
  const [appendix6, setAppendix6] = useState("");

  const handleTeachingExpChange = (index, e) => {
    let data = [...teachingExp];
    data[index][e.target.name] = e.target.value;
    setTeachingExp(data);
  };

  const handleProfBodyMembershipChange = (index, e) => {
    let data = [...profBodyMembership];
    data[index][e.target.name] = e.target.value;
    setProfBodyMembership(data);
  };

  const addTeachingExp = () => {
    let newTeachingExp = {
      employer: "",
      position: "",
      dateOfJoining: "",
      dateOfLeaving: "",
      payLevel: "",
      PayInPayLevel: "",
      GP: "",
      reasonForLeaving: "",
    };
    setTeachingExp([...teachingExp, newTeachingExp]);
  };

  const removeTeachingExp = (index) => {
    let data = [...teachingExp];
    data.splice(index, 1);
    setTeachingExp(data);
  };

  const uploadA5 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix5);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix5(response.data.url);
      });
  };
  const uploadA6 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix6);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix6(response.data.url);
      });
  };

  useEffect(() => {
    const userFormData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(`/api/form/forminfo/${id}`, config);
        if (data.user.teachingExp) {
          setTeachingExp(data.user.teachingExp);
        }
        setPostPhdExp(data.user.postPhdExp);

        if (data.user.profBodyMembership) {
          setProfBodyMembership(data.user.profBodyMembership);
        }
        if (data.user.appendix5) setAppendix5(data.user.appendix5);
        if (data.user.appendix6) setAppendix6(data.user.appendix6);
      } catch (error) {
        console.log(error);
      }
    };
    userFormData();
  }, []);

  const formHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        `/api/form/forminfo/${id}`,
        {
          teachingExp,
          postPhdExp,
          profBodyMembership,
          appendix5,
          appendix6,
        },
        config
      );
      setSuccess("Form Updated");
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {success ? (
        <div className="alert alert-success shadow-sm w-11/12 sm:w-1/2 m-auto">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{success}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <form
        onSubmit={formHandler}
        className="flex w-full my-6 p-4 border-2 border-gray-600 font-sans  lg:w-full"
      >
        <div className="flex flex-col p-3 w-full">
          <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
            Employment Details
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
          {teachingExp.map((input, index) => {
            return (
              <div
                key={index}
                className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-5 lg:w-full  gap-4 "
              >
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Employer</label>
                  <input
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
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">
                    Position(Regular / Contractual)
                  </label>
                  <input
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
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>

                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Date of Join</label>
                  <input
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
                    type="date"
                    required
                    name="dateOfJoining"
                    autoComplete="true"
                    placeholder="Enter dateOfJoining"
                    value={input.dateOfJoining}
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Date of Leaving</label>
                  <input
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
                    type="date"
                    required
                    name="dateOfLeaving"
                    autoComplete="true"
                    placeholder="Enter dateOfLeaving"
                    value={input.dateOfLeaving}
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Pay Level</label>
                  <input
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
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">Pay in Pay Level</label>
                  <input
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
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">GP / AGP</label>
                  <input
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
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>
                <div className="w-56 lg:w-40 p-2 xl:w-56">
                  <label className="text-sm font-light">
                    Reason for Leaving
                  </label>
                  <input
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
                    onChange={(e) => handleTeachingExpChange(index, e)}
                  />
                </div>
                {teachingExp.length > 1 ? (
                  <TrashIcon
                    className="h-8 mt-5 mx-4 text-red-600"
                    onClick={() => removeTeachingExp(index)}
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
          <div className="flex justify-center">
            <PlusCircleIcon
              className="h-12 p-2 w-12 mx-4 text-[#020493] mt-1"
              onClick={addTeachingExp}
            />
          </div>
          <div className="divider"></div>

          <div className="flex flex-col lg:justify-between lg:flex-row lg:w-3/4 m-auto items-center my-2">
            <div>
              <h2 className="font-light">
                Please enclose experience certificate(s) as Appendix 5{" "}
              </h2>
            </div>
            <div className="flex">
              <label className="block">
                <span className="sr-only">Choose File</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required
                  autoComplete="true"
                  onChange={(e) => setAppendix5(e.target.files[0])}
                />
              </label>
              <button
                type="button"
                onClick={uploadA5}
                className="btn bg-blue-800 hover:bg-blue-700 text-white border-none ml-3 rounded-full"
              >
                <UploadIcon className="h-4" />
              </button>
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex flex-col lg:justify-between lg:flex-row lg:w-3/4 m-auto items-center my-2">
            <div>
              <h2 className="font-light">
                Please enclose NOC from existing employer, if applicable as
                Appendix 6
              </h2>
            </div>
            <div className="flex">
              <label className="block">
                <span className="sr-only">Choose File</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required
                  autoComplete="true"
                  onChange={(e) => setAppendix6(e.target.files[0])}
                />
              </label>
              <button
                type="button"
                onClick={uploadA6}
                className="btn bg-blue-800 hover:bg-blue-700 text-white border-none ml-3 rounded-full"
              >
                <UploadIcon className="h-4" />
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-2 lg:m-0 lg:gap-4">
            <div className="w-56 mb-4 lg:w-3/4 lg:mx-2">
              <label className="text-sm font-light">
                Total Experience in Year(s) Month (s)(Post Ph.D)
              </label>
              <input
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
                name="postPhdExp"
                autoComplete="true"
                placeholder="Enter experience post phd"
                value={postPhdExp}
                onChange={(e) => setPostPhdExp(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="" className="mx-3 text-center">
            Membership of Proffesional Bodies
          </label>
          <label
            htmlFor=""
            className="text-sm font-light mt-3 mx-3 text-center"
          >
            Enter name of bodies
          </label>
          <div className="lg:grid lg:grid-flow-col">
            {profBodyMembership.map((input, index) => {
              return (
                <div
                  key={index}
                  className="w-56 mb-4 flex justify-center m-auto lg:justify-start lg:m-0 lg:w-full "
                >
                  <div className="flex justify-center items-center my-2">
                    <label htmlFor="" className="text-sm font-light mx-3">
                      {input.id}
                    </label>
                    <input
                      type="text"
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
                      name="name"
                      autoComplete="true"
                      placeholder="Enter name of body"
                      value={input.name}
                      onChange={(e) => handleProfBodyMembershipChange(index, e)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center lg:justify-end">
            <button
              type="submit"
              className="btn bg-green-800 w-56 hover:bg-green-700 text-white px-6 border-none "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EmploymentDetails;
