import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";
import { UploadIcon } from "@heroicons/react/outline";

const GeneralDetails = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [privateData, setPrivateData] = useState("");
  const [jobData, setJobData] = useState("");
  const [userPPUrl, setUserPPUrl] = useState("");
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
  const [userPP, setUserPP] = useState("");
  const [appendix1, setAppendix1] = useState("");
  const [appendix2, setAppendix2] = useState("");
  const [appendix3, setAppendix3] = useState("");

  const uploadA1 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix1);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix1(response.data.url);
      });
  };

  const uploadA2 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix2);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix2(response.data.url);
      });
  };

  const uploadA3 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix3);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix3(response.data.url);
      });
  };

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
    const jobAdNo = () => {
      if (jobData) {
        jobData.map((job) => {
          if (`${job.name} ${job.dept}` == post) {
            return setAdNo(job._id);
          }
        });
      }
    };
    jobAdNo();
  }, [post]);

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
        setFName(data.user.fname);
        setMName(data.user.mname);
        setLName(data.user.lname);
        setFatherName(data.user.fatherName);
        setDob(data.user.dob);
        setAge(data.user.age);
        setCategory(data.user.category);
        setPhno(data.user.phno);
        setSecPhNo(data.user.secPhNo);
        setEmail(data.user.email);
        setSecEmail(data.user.secEmail);
        setMaritalStatus(data.user.maritalStatus);
        setNationality(data.user.nationality);
        if (data.user.address) setAddress(data.user.address);
        if (data.user.secAddress) setSecAddress(data.user.secAddress);
        setSpecialisation(data.user.specialisation);
        setGender(data.user.gender);
        if (data.user.feeDetails) setFeeDetails(data.user.feeDetails);
        setUserPPUrl(data.user.userPPUrl);
        if (data.user.appendix1) setAppendix1(data.user.appendix1);
        if (data.user.appendix2) setAppendix2(data.user.appendix2);
        if (data.user.appendix3) setAppendix3(data.user.appendix3);
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
          fname,
          mname,
          lname,
          fatherName,
          dob,
          age,
          category,
          phno,
          secPhNo,
          email,
          secEmail,
          maritalStatus,
          nationality,
          address,
          secAddress,
          specialisation,
          gender,
          feeDetails,
          userPPUrl,
          appendix1,
          appendix2,
          appendix3,
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

  const uploadUserPP = (files) => {
    const formData = new FormData();
    formData.append("file", userPP);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setUserPPUrl(response.data.url);
      });
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
          <div className="flex justify-center flex-col lg:flex-row lg:justify-between">
            <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-3/4 lg:grid-cols-3 lg:m-0 lg:gap-5">
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Advertisement No</label>
                <input
                  className="form-control cursor-not-allowed
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-gray-200 bg-clip-padding
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
                  disabled={true}
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
                  <option>-- Select An Option --</option>
                  {jobData &&
                    jobData.map((job) => (
                      <option key={job._id}>
                        {job.name} {job.dept}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-56 mb-4 lg:w-64 lg:mx-2">
                <label className="text-sm font-light">Aadhaar No*</label>
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
                  className=" w-full
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
              <label className="text-sm font-light mb-2">Upload a photo</label>
              <div className="flex">
                <label className="block">
                  <span className="sr-only">Choose File</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    required
                    autoComplete="true"
                    onChange={(e) => setUserPP(e.target.files[0])}
                  />
                </label>
                {/* <input
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
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                  type="file"
                  required
                  autoComplete="true"
                  onChange={(e) => setUserPP(e.target.files[0])}
                /> */}
                <button
                  type="button"
                  onClick={uploadUserPP}
                  className="btn bg-blue-800 hover:bg-blue-700 text-white border-none ml-3 rounded-full"
                >
                  <UploadIcon className="h-4" />
                </button>
              </div>
              {userPPUrl ? (
                <div className="avatar flex justify-center">
                  <div className="w-56 ">
                    <Image
                      className="flex w-56 mb-4 flex-col m-auto h-40 bg-contain lg:w-80 lg:mb-auto rounded-full"
                      cloudName="saahildev"
                      publicId={userPPUrl}
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
          <h4 className="w-56 mb-2 mt-2 lg:w-64 lg:mx-2">Fee Details**</h4>
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
                type="date"
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
          <div className="divider"></div>
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
              <form className="flex justify-evenly p-3">
                <label>Male</label>
                <input
                  type="radio"
                  required
                  id="gender"
                  name="radio-1"
                  className="radio"
                  value={"Male"}
                  checked={gender === "Male"}
                  onChange={(e) => setGender("Male")}
                />
                <label>Female</label>
                <input
                  type="radio"
                  required
                  id="gender"
                  name="radio-1"
                  className="radio"
                  value={"Female"}
                  checked={gender === "Female"}
                  onChange={(e) => setGender("Female")}
                />
              </form>
            </div>
            <div className="w-56 mb-4 lg:w-64 lg:mx-2">
              <label className="text-sm font-light">Marital Status</label>
              <form className="flex justify-evenly p-3">
                <label>Single</label>
                <input
                  type="radio"
                  required
                  id="maritalStatus"
                  name="radio-1"
                  className="radio"
                  checked={maritalStatus === "Single"}
                  value={"Single"}
                  onChange={(e) => setMaritalStatus("Single")}
                  {...maritalStatus}
                />
                <label>Married</label>
                <input
                  type="radio"
                  required
                  id="maritalStatus"
                  name="radio-1"
                  className="radio"
                  checked={maritalStatus === "Married"}
                  value={"Married"}
                  onChange={(e) => setMaritalStatus("Married")}
                  {...maritalStatus}
                />
              </form>
            </div>
          </div>

          <div className="w-full flex flex-col mb-4 lg:w-1/2 lg:flex-none lg:mx-2">
            <label className="text-sm font-light text-center lg:text-left">
              Category***
            </label>
            <form className="grid grid-cols-4 place-items-center py-3 lg:flex lg:justify-evenly">
              <label>GEN</label>
              <input
                type="radio"
                required
                id="category"
                name="radio-1"
                className="radio"
                checked={category === "GEN"}
                value={"GEN"}
                onChange={(e) => setCategory("GEN")}
                {...category}
              />
              <label>OBC</label>
              <input
                type="radio"
                required
                id="category"
                name="radio-1"
                className="radio"
                checked={category === "OBC"}
                value={"OBC"}
                onChange={(e) => setCategory("OBC")}
                {...category}
              />
              <label>SC</label>
              <input
                type="radio"
                required
                id="category"
                name="radio-1"
                className="radio"
                checked={category === "SC"}
                value={"SC"}
                onChange={(e) => setCategory("SC")}
              />
              <label>ST</label>
              <input
                type="radio"
                required
                id="category"
                name="radio-1"
                className="radio"
                checked={category === "ST"}
                value={"ST"}
                onChange={(e) => setCategory("ST")}
              />
              <label>OBC-NC</label>
              <input
                type="radio"
                required
                id="category"
                name="radio-1"
                className="radio"
                checked={category === "OBC-NC"}
                value={"OBC-NC"}
                onChange={(e) => setCategory("OBC-NC")}
              />
              <label>EWS</label>
              <input
                type="radio"
                required
                id="category"
                name="radio-1"
                className="radio"
                checked={category === "EWS"}
                value={"EWS"}
                onChange={(e) => setCategory("EWS")}
              />
              <label>PWD</label>
              <input
                type="radio"
                required
                id="category"
                name="radio-1"
                className="radio"
                checked={category === "PWD"}
                value={"PWD"}
                onChange={(e) => setCategory("PWD")}
              />
            </form>
          </div>
          <div className="divider"></div>
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
          <div className="divider"></div>
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
          <div className="divider"></div>
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
                id="secPhNo"
                autoComplete="true"
                placeholder="Enter alternate phone number"
                value={secPhNo}
                onChange={(e) => setSecPhNo(e.target.value)}
              />
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col lg:justify-between lg:flex-row lg:w-3/4 m-auto items-center my-2">
            <div>
              <h2 className="font-light">
                Please attach aadhar details as Appendix 1{" "}
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
                  onChange={(e) => setAppendix1(e.target.files[0])}
                />
              </label>
              <button
                type="button"
                onClick={uploadA1}
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
                Please enclose experience certificate(s) as Appendix 2{" "}
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
                  onChange={(e) => setAppendix2(e.target.files[0])}
                />
              </label>
              <button
                type="button"
                onClick={uploadA2}
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
                Please enclose category details as as Appendix 3{" "}
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
                  onChange={(e) => setAppendix3(e.target.files[0])}
                />
              </label>
              <button
                type="button"
                onClick={uploadA3}
                className="btn bg-blue-800 hover:bg-blue-700 text-white border-none ml-3 rounded-full"
              >
                <UploadIcon className="h-4" />
              </button>
            </div>
          </div>
          <div className="divider"></div>

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

export default GeneralDetails;
