import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const References = () => {
  const id = localStorage.getItem("id");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  const [references, setReferences] = useState([
    {
      name: "",
      address: "",
      email: "",
      phone: "",
      designation: "",
    },
    {
      name: "",
      address: "",
      email: "",
      phone: "",
      designation: "",
    },
    {
      name: "",
      address: "",
      email: "",
      phone: "",
      designation: "",
    },
  ]);

  const handleReferenceChange = (index, e) => {
    let data = [...references];
    data[index][e.target.name] = e.target.value;
    setReferences(data);
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
        if (data.user.references) setReferences(data.user.references);
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
          references,
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
            References
          </h3>
          <div className="flex justify-center">
            <div className="alert alert-warning shadow-sm rounded-none w-1/5">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Enter 3 References !</span>
              </div>
            </div>
          </div>
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
          {references.map((input, index) => {
            return (
              <div className="flex justify-center items-center">
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-5 lg:w-full gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Name</label>
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
                      name="name"
                      autoComplete="true"
                      placeholder="Enter name"
                      value={input.name}
                      onChange={(e) => handleReferenceChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Address</label>
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
                      name="address"
                      autoComplete="true"
                      placeholder="Enter address"
                      value={input.address}
                      onChange={(e) => handleReferenceChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Email</label>
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
                      type="email"
                      required
                      name="email"
                      autoComplete="true"
                      placeholder="Enter email"
                      value={input.email}
                      onChange={(e) => handleReferenceChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Phone Number</label>
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
                      name="phone"
                      autoComplete="true"
                      placeholder="Enter phone"
                      value={input.phone}
                      onChange={(e) => handleReferenceChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Designation</label>
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
                      name="designation"
                      autoComplete="true"
                      placeholder="Enter designation"
                      value={input.designation}
                      onChange={(e) => handleReferenceChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
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

export default References;
