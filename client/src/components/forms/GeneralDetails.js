import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GeneralDetails = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [privateData, setPrivateData] = useState("");
  const [jobData, setJobData] = useState("");
  const [adNo, setAdNo] = useState("");
  const [post, setPost] = useState("");
  const [aadhaarNo, setAadhaarNo] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [fname, setFName] = useState("");
  const [mname, setMName] = useState("");
  const [lname, setLName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [phno, setPhno] = useState("");
  const [secPhNo, setSecPhNo] = useState("");
  const [email, setEmail] = useState("");
  const [secEmail, setSecEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState({
    loc: "",
    pin: "",
  });
  const [secAddress, setSecAddress] = useState({
    loc: "",
    pin: "",
  });
  const [specialisation, setSpecialisation] = useState("");
  const [gender, setGender] = useState("");
  const [feeDetails, setFeeDetails] = useState({
    id: "",
    date: "",
  });

  useEffect(() => {
    const jobDataReq = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(`/api/admin/getalljobs`, config);
        setJobData(data.jobs);
      } catch (error) {
        console.log(error);
      }
    };
    jobDataReq();
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
        setAdNo(data.user.adNo);
        setPost(data.user.post);
        setAadhaarNo(data.user.aadhaarNo);
        setDiscipline(data.user.discipline);
        setDob(data.user.dob);
        setCategory(data.user.category);
        setPhno(data.user.phno);
        setEmail(data.user.email);
        setMaritalStatus(data.user.maritalStatus);
        setAddress(data.user.address);
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
          adNo,
          post,
          aadhaarNo,
          discipline,
          dob,
          category,
          phno,
          email,
          maritalStatus,
          address,
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
            General Information
          </h3>
          {error && (
            <div class="alert alert-error shadow-sm my-2 text-sm h-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-3 w-3"
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
          <div className="flex justify-center flex-col lg:flex-row lg:justify-between">
            <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-3/4 lg:grid-cols-3 lg:m-0 lg:gap-5">
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Advertisement No</label>
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
                  id="adNo"
                  placeholder="Enter advertisement no"
                  value={adNo}
                  onChange={(e) => setAdNo(e.target.value)}
                />
              </div>
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Post Applied</label>
                <select
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
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                >
                  {/* {jobData.map((job) => (
                    <option key={job._id}>{job.desc}</option>
                  ))} */}
                </select>
              </div>
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Aadhaar No</label>
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
                  id="aadhaarNo"
                  autoComplete="true"
                  placeholder="Enter aadhaar no"
                  value={aadhaarNo}
                  onChange={(e) => setAadhaarNo(e.target.value)}
                />
              </div>
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Date of Birth</label>
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
                  id="dob"
                  autoComplete="true"
                  placeholder="Enter your date of birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Age</label>
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
                  id="age"
                  autoComplete="true"
                  placeholder="Enter your age as of now"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Nationality</label>
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
                  id="nationality"
                  autoComplete="true"
                  placeholder="Enter your nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-56 mb-4 flex-col m-auto  lg:w-80 lg:mb-auto">
              <label className="text-sm font-light">Upload a photo</label>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                id="address"
                autoComplete="true"
                placeholder="Enter your address with pin code"
              />
            </div>
          </div>
          <div class="divider"></div>
          <h4 className="w-56 mb-2 mt-2 lg:w-64 lg:mx-2">Fee Details*</h4>
          <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-4 lg:m-0 lg:gap-2">
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Transaction ID</label>
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
                id="id"
                autoComplete="true"
                placeholder="Enter transaction id"
                value={feeDetails.id}
                onChange={(e) =>
                  setFeeDetails({
                    ...feeDetails,
                    id: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Date of Transaction</label>
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
                id="date"
                autoComplete="true"
                placeholder="Enter date of transaction"
                value={feeDetails.date}
                onChange={(e) =>
                  setFeeDetails({
                    ...feeDetails,
                    date: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div class="divider"></div>
          <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-4 lg:m-0 lg:gap-2">
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Discipline</label>
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
                id="discipline"
                autoComplete="true"
                placeholder="Enter discipline"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Specialisation</label>
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
                id="specialisation"
                autoComplete="true"
                placeholder="Enter specialisation"
                value={specialisation}
                onChange={(e) => setSpecialisation(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Gender</label>
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
                id="gender"
                autoComplete="true"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Marital Status</label>
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
                id="maritalStatus"
                autoComplete="true"
                placeholder="Select your marital Status "
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Category</label>
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
                id="category"
                autoComplete="true"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div class="divider"></div>
          <h4 className="w-56 mb-2 mt-2 lg:w-64 lg:mx-2">Name in Full</h4>
          <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-4 lg:m-0 lg:gap-2">
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">First Name</label>
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
                id="fname"
                autoComplete="true"
                placeholder="Enter first name"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Middle Name</label>
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
                id="mname"
                autoComplete="true"
                placeholder="Enter middle name"
                value={mname}
                onChange={(e) => setMName(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Last Name</label>
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
                id="lname"
                autoComplete="true"
                placeholder="Enter last name"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Father's Name</label>
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
                id="fatherName"
                autoComplete="true"
                placeholder="Enter father's name"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
              />
            </div>
          </div>
          <div class="divider"></div>
          <h4 className="w-56 mb-2 mt-2 lg:w-64 lg:mx-2">Address</h4>
          <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-2 lg:m-0 lg:gap-2">
            <div className="w-56 mb-4 lg:w-3/4 lg:mx-2">
              <label className="text-sm font-light">Address</label>
              <textarea
                className="form-control min-h-[8rem]
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
                id="address"
                autoComplete="true"
                placeholder="Enter your address"
                value={address.loc}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    loc: e.target.value,
                  })
                }
              />
              <label className="text-sm font-light">Pin</label>
              <input
                className="form-control
        block
        w-56
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
                id="address"
                autoComplete="true"
                placeholder="Enter your pincode"
                value={address.pin}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    pin: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-56 mb-4 lg:w-3/4 lg:mx-2">
              <label className="text-sm font-light">
                Permanent Address (if different)
              </label>
              <textarea
                className="form-control min-h-[8rem]
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
                id="secAddress"
                autoComplete="true"
                placeholder="Enter permanent address if different from current address"
                value={secAddress.loc}
                onChange={(e) =>
                  setSecAddress({
                    ...secAddress,
                    loc: e.target.value,
                  })
                }
              />
              <label className="text-sm font-light">Pin</label>
              <input
                className="form-control
        block
        w-56
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
                id="secAddress"
                autoComplete="true"
                placeholder="Enter your pincode"
                value={secAddress.pin}
                onChange={(e) =>
                  setSecAddress({
                    ...secAddress,
                    pin: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div class="divider"></div>
          <h4 className="w-56 mb-2 mt-2 lg:w-64 lg:mx-2">Contact Details</h4>
          <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-4 lg:m-0 lg:gap-2">
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
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
                type="text"
                required
                id="fname"
                autoComplete="true"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Alternate Email</label>
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
                id="secEmail"
                autoComplete="true"
                placeholder="Enter alternate email"
                value={secEmail}
                onChange={(e) => setSecEmail(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
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
                id="phno"
                autoComplete="true"
                placeholder="Enter "
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">
                Alternate Phone Number
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
                id="secPhNo"
                autoComplete="true"
                placeholder="Enter alternate phone number"
                value={secPhNo}
                onChange={(e) => setSecPhNo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn bg-green-800 hover:bg-green-700 text-white px-6 border-none "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default GeneralDetails;
