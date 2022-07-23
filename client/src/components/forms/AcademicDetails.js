import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { UploadIcon } from "@heroicons/react/outline";


const AcademicDetails = () => {
  const id = localStorage.getItem("id");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [academic, setAcademic] = useState([
    {
      degree: "",
      branch: "",
      university: "",
      completionYear: "",
      grade: "",
    },
  ]);
  const [phdDissertationTitle, setPhdDissertationTitle] = useState("");
  const [phdAwardDate, setPhdAwardDate] = useState("");
  const [appendix4, setAppendix4] = useState("");

  const handleAcademicChange = (index, e) => {
    let data = [...academic];
    data[index][e.target.id] = e.target.value;
    setAcademic(data);
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

  const removeAcademic = (index) => {
    let data = [...academic];
    data.splice(index, 1);
    setAcademic(data);
  };

  const uploadA4 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix4);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix4(response.data.url);
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
        setAcademic(data.user.academic);
        setPhdDissertationTitle(data.user.phdDissertationTitle);
        setPhdAwardDate(data.user.phdAwardDate);
        if (data.user.appendix4) {
          setAppendix4(data.user.appendix4);
        }
        console.log(data.user);
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
          academic,
          phdDissertationTitle,
          phdAwardDate,
          appendix4,
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
            Academic Details
          </h3>
          <div className="flex justify-center">
            <div className="alert alert-warning shadow-sm rounded-none w-1/3">
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
                <span>Enter academic details since high school</span>
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
                  <label className="text-sm font-light">Completion year</label>
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
                    type="date"
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
          <div className="flex justify-center">
            <PlusCircleIcon
              className="h-12 p-2 w-12 mx-4 text-[#020493] mt-1"
              onClick={addAcademic}
            />
          </div>
          <div className="flex justify-between w-3/4 m-auto items-center my-2">
            <div>
              <h2 className="font-light">
                Please enclose mark sheets /certificate(s) as Appendix 4
              </h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
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
                onChange={(e) => setAppendix4(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA4}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix4 && (
                <>
                  <a href={appendix4}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-1 place-content-center w-56 m-auto  lg:w-full lg:grid-cols-2 lg:m-0 lg:gap-4">
            <div className="w-56 mb-4 lg:w-3/4 lg:mx-2">
              <label className="text-sm font-light">
                Title of PhD Dissertation
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
                id="phdDissertationTitle"
                autoComplete="true"
                placeholder="Enter Title of PhD Dissertation"
                value={phdDissertationTitle}
                onChange={(e) => setPhdDissertationTitle(e.target.value)}
              />
            </div>
            <div className="w-56 mb-4 lg:w-1/2 lg:mx-2">
              <label className="text-sm font-light">
                Date of award of Ph. D
              </label>
              <input
                className="form-control
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
                id="phdAwardDate"
                autoComplete="true"
                placeholder="Enter Date of award of  Ph. D"
                value={phdAwardDate}
                onChange={(e) => setPhdAwardDate(e.target.value)}
              />
            </div>
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

export default AcademicDetails;
