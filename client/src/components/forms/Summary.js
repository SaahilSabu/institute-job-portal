import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";

const Form1 = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [adNo, setAdNo] = useState("");
  const [post, setPost] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [category, setCategory] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [address, setAddress] = useState("");
  const [academic, setAcademic] = useState([
    {
      degree: "",
      branch: "",
      university: "",
      completionYear: "",
      grade: "",
    },
  ]);
  const [teachingExp, setTeachingExp] = useState([
    {
      university: "",
      designation: "",
      period: "",
    },
  ]);

  const [industrialExp, setIndustrialExp] = useState([
    {
      organisation: "",
      designation: "",
      period: "",
    },
  ]);

  const [consultancy, setConsultancy] = useState([
    {
      organisation: "",
      title: "",
      amount: "",
    },
  ]);

  const [phdThesisSupervised, setPhdThesisSupervised] = useState({
    completed: "",
    inProgress: "",
  });

  const [researchProjects, setResearchProjects] = useState({
    completed: "",
    inProgress: "",
  });

  const [publications, setPublications] = useState({
    books: "",
    nationalJournals: "",
    internationalJournals: "",
    nationalConferences: "",
    internationalConferences: "",
    bookChapters: "",
  });

  

  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

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
        setDiscipline(data.user.discipline);
        setName(data.user.name);
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
          discipline,
          name,
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

  const handleSubmit = () => {
    try {
      axios.put(`api/form/submit/${id}`);
      setSuccess("Submitted");
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
    }
  };

  const handleAcademicChange = (index, e) => {
    let data = [...academic];
    data[index][e.target.id] = e.target.value;
    setAcademic(data);
  };

  const handleTeachingExpChange = (index, e) => {
    let data = [...teachingExp];
    data[index][e.target.name] = e.target.value;
    setTeachingExp(data);
  };

  const handleIndustrialExpChange = (index, e) => {
    let data = [...industrialExp];
    data[index][e.target.name] = e.target.value;
    setIndustrialExp(data);
  };

  const handleConsultancyChange = (index, e) => {
    let data = [...consultancy];
    data[index][e.target.name] = e.target.value;
    setConsultancy(data);
  };

  const addAcademic = () => {
    let newAcademic = {
      degree: "",
      branch: "",
      university: "",
      completionYear: "",
      grade: "",
    };
    setAcademic([...academic, newAcademic]);
  };

  const addTeachingExp = () => {
    let newTeachingExp = {
      university: "",
      designation: "",
      period: "",
    };
    setTeachingExp([...teachingExp, newTeachingExp]);
  };

  const addIndustrialExp = () => {
    let newIndustrialExp = {
      organisation: "",
      designation: "",
      period: "",
    };
    setIndustrialExp([...industrialExp, newIndustrialExp]);
  };

  const addConsultancy = () => {
    let newConsultancy = {
      organisation: "",
      title: "",
      amount: "",
    };
    setConsultancy([...consultancy, newConsultancy]);
  };

  const removeAcademic = (index) => {
    let data = [...academic];
    data.splice(index, 1);
    setAcademic(data);
  };

  const removeTeachingExp = (index) => {
    let data = [...teachingExp];
    data.splice(index, 1);
    setTeachingExp(data);
  };

  const removeIndustrialExp = (index) => {
    let data = [...industrialExp];
    data.splice(index, 1);
    setIndustrialExp(data);
  };

  const removeConsultancy = (index) => {
    let data = [...consultancy];
    data.splice(index, 1);
    setConsultancy(data);
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
            Form
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
            <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-1/2 lg:grid-cols-2 lg:m-0 lg:gap-5">
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
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
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
                <label className="text-sm font-light">Post Applied</label>
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
                  id="post"
                  placeholder="Select post applied"
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                />
              </div>
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
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
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
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
                  id="name"
                  autoComplete="true"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
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
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
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
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
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
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
                <label className="text-sm font-light">Email Id</label>
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
                  id="email"
                  autoComplete="true"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
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
              <div className="w-56 mb-4 lg:w-11/12 lg:mx-2">
                <label className="text-sm font-light">Address</label>
                <textarea
                  className="form-control min-h-12
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
                  placeholder="Enter your address with pin code"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-56 mb-4 flex-col m-auto  lg:w-96 lg:mb-auto">
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
          {/* end of gen info */}
          {/* start of academic */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Academic Qualifications
              </h3>
              {academic.map((input, index) => {
                return (
                  <div
                    key={index}
                    className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                  >
                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">Degree/Title</label>
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
                        id="degree"
                        autoComplete="true"
                        placeholder="Enter degree"
                        value={input.degree}
                        onChange={(e) => handleAcademicChange(index, e)}
                      />
                    </div>
                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">
                        Branch/Specialization
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
                        id="branch"
                        autoComplete="true"
                        placeholder="Enter branch"
                        value={input.branch}
                        onChange={(e) => handleAcademicChange(index, e)}
                      />
                    </div>

                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">
                        University/College
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
                        id="university"
                        autoComplete="true"
                        placeholder="Enter university"
                        value={input.university}
                        onChange={(e) => handleAcademicChange(index, e)}
                      />
                    </div>
                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">
                        Completion year
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
                        id="completedYear"
                        autoComplete="true"
                        placeholder="Enter completion year"
                        value={input.completedYear}
                        onChange={(e) => handleAcademicChange(index, e)}
                      />
                    </div>
                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">Grade/Marks</label>
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
                        id="grade"
                        autoComplete="true"
                        placeholder="Enter grade"
                        value={input.grade}
                        onChange={(e) => handleAcademicChange(index, e)}
                      />
                    </div>
                    {academic.length > 1 ? (
                      <TrashIcon
                        className="h-8 mt-5 mx-4 text-red-600"
                        onClick={() => removeAcademic(index)}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}

              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addAcademic}
              />
            </div>
          </div>
          {/* divider for academic qualifications */}
          {/* start of teaching exp */}

          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Teaching Experience
              </h3>
              {teachingExp.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      University/College
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
                      name="university"
                      autoComplete="true"
                      placeholder="Enter university"
                      value={input.university}
                      onChange={(e) => handleTeachingExpChange(index, e)}
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
                      onChange={(e) => handleTeachingExpChange(index, e)}
                    />
                  </div>

                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Period</label>
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
                      name="period"
                      autoComplete="true"
                      placeholder="Enter period"
                      value={input.period}
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
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addTeachingExp}
              />
            </div>
          </div>
          {/* end of teaching exp */}
          {/* start of industrial exp*/}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Industrial Experience
              </h3>
              {industrialExp.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Organization</label>
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
                      name="organisation"
                      autoComplete="true"
                      placeholder="Enter organisation"
                      value={input.organisation}
                      onChange={(e) => handleIndustrialExpChange(index, e)}
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
                      onChange={(e) => handleIndustrialExpChange(index, e)}
                    />
                  </div>

                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Period</label>
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
                      name="period"
                      autoComplete="true"
                      placeholder="Enter period"
                      value={input.period}
                      onChange={(e) => handleIndustrialExpChange(index, e)}
                    />
                  </div>
                  {industrialExp.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeIndustrialExp(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addIndustrialExp}
              />
            </div>
          </div>
          {/* end of industrial exp*/}
          {/* start of consultancy */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Consultancy
              </h3>
              {consultancy.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Organization</label>
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
                      name="organisation"
                      autoComplete="true"
                      placeholder="Enter organisation"
                      value={input.organisation}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
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
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>

                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Grant Amount</label>
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
                      name="amount"
                      autoComplete="true"
                      placeholder="Enter amount"
                      value={input.amount}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  {consultancy.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeConsultancy(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addConsultancy}
              />
            </div>
          </div>

          {/* end of consultancy */}
          <div className="grid grid-cols-1 w-full sm:grid-cols-2">
            {/* start of phd thesis , research projects and publications */}
            <div className="flex justify-center w-full m-auto p-4 font-sans ">
              <div className="flex flex-col p-3">
                <h3 className="text-center p-3 text-2xl font-medium text-gray-700 mb-5 ">
                  PhD Thesis Supervised
                </h3>
                <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-flow-col  gap-4 ">
                  <div className="w-24">
                    <label className="text-sm font-light">Completed</label>
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
                      type="number"
                      required
                      name="completed"
                      autoComplete="true"
                      value={phdThesisSupervised.completed}
                      onChange={(e) =>
                        setPhdThesisSupervised({
                          ...phdThesisSupervised,
                          completed: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-24">
                    <label className="text-sm font-light">In Progress</label>
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
                      type="number"
                      required
                      name="inprogress"
                      autoComplete="true"
                      value={phdThesisSupervised.inProgress}
                      onChange={(e) =>
                        setPhdThesisSupervised({
                          ...phdThesisSupervised,
                          inProgress: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* divider */}

            <div className="flex justify-center w-full m-auto p-4 font-sans ">
              <div className="flex flex-col p-3">
                <h3 className="text-center p-3 text-2xl font-medium text-gray-700 mb-5 ">
                  Sponsored Research Projects
                </h3>
                <div className="w-24 mb-4 relative group grid place-content-center place-items-center m-auto grid-flow-col  gap-4 ">
                  <div className="w-24">
                    <label className="text-sm font-light">Completed</label>
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
                      type="number"
                      required
                      name="completed"
                      autoComplete="true"
                      value={researchProjects.completed}
                      onChange={(e) =>
                        setResearchProjects({
                          ...researchProjects,
                          completed: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-24">
                    <label className="text-sm font-light">In Progress</label>
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
                      type="number"
                      required
                      name="inprogress"
                      autoComplete="true"
                      value={researchProjects.inProgress}
                      onChange={(e) =>
                        setResearchProjects({
                          ...researchProjects,
                          inProgress: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* divider for publications */}
          </div>
          {/* divider for publications */}
          <div className="flex justify-center w-full m-auto mb-6 p-4 font-sans ">
            <div className="flex flex-col  p-3">
              <h3 className="text-center p-3 text-2xl font-medium text-gray-700 mb-5 ">
                Publications
              </h3>
              <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-flow-col  gap-4 ">
                <div className="w-40">
                  <label className="text-sm font-light">Books</label>
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
                    type="number"
                    required
                    name="books"
                    autoComplete="true"
                    value={publications.books}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        books: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    National Journals
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
                    type="number"
                    required
                    name="nationalJournals"
                    autoComplete="true"
                    value={publications.nationalJournals}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        nationalJournals: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    International Journals
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
                    type="number"
                    required
                    name="internationalJournals"
                    autoComplete="true"
                    value={publications.internationalJournals}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        internationalJournals: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    National Conferences
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
                    type="number"
                    required
                    name="nationalConferences"
                    autoComplete="true"
                    value={publications.nationalConferences}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        nationalConferences: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    International Conferences
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
                    type="number"
                    required
                    name="internationalConferences"
                    autoComplete="true"
                    value={publications.internationalConferences}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        internationalConferences: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Book Chapters</label>
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
                    type="number"
                    required
                    name="bookChapters"
                    autoComplete="true"
                    value={publications.bookChapters}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        bookChapters: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end of phd thesis , research projects and publications */}
          <div className="flex justify-center w-full m-auto mb-6 p-4 font-sans ">
            <div className="flex flex-col  p-3">
              <h3 className="text-center p-3 text-2xl font-medium text-gray-700 mb-5 ">
                No of Patents Awarded/Pending
              </h3>
              <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-flow-col  gap-4 ">
                <label className="text-sm font-light">Books</label>
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
                  type="number"
                  required
                  name="books"
                  autoComplete="true"
                  value={publications.books}
                  onChange={(e) =>
                    setPublications({
                      ...publications,
                      books: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/* main divider */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="btn bg-green-800 hover:bg-green-700 text-white px-6 border-none "
            >
              Save
            </button>
            {/* <button
              type="button"
              className="btn  bg-[#020493] hover:bg-[#0608c2] text-white px-6 border-none"
              onClick={handleSubmit}
            >
              Submit
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default Form1;
