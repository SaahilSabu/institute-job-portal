import { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [dept, setDept] = useState("");
  const [role, setRole] = useState("");
  const [validity, setValidity] = useState("");
  const [success, setSuccess] = useState(null);

  const formHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        `/api/admin/addJob`,
        {
          name,
          desc,
          dept,
          role,
          validity,
        },
        config
      );
      setSuccess("Job Added");
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
    }
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
      <div className="flex justify-center  w-full m-auto my-6 p-4 border-2 border-gray-600 font-sans sm:w-1/2">
        <form onSubmit={formHandler} className="flex flex-col p-3">
          <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
            Job Form
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
          <div className="w-56 mb-4 relative group">
            <label className="text-sm font-light" htmlFor="name">
              Job Name:
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
              id="name"
              placeholder="Enter Job name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-56 mb-4 relative group">
            <label className="text-sm font-light" htmlFor="desc">
              Job Description:
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
              id="desc"
              placeholder="Enter Job Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="w-56 mb-4 relative group">
            <label className="text-sm font-light" htmlFor="dept">
              Job Department:
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
              id="dept"
              autoComplete="true"
              placeholder="Enter Job Department"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
          </div>
          <div className="w-56 mb-4 relative group">
            <label className="text-sm font-light" htmlFor="role">
              Job Role
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
              id="role"
              autoComplete="true"
              placeholder="Enter Job Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="w-56 mb-4 relative group">
            <label className="text-sm font-light" htmlFor="validity">
              Job Validity
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
              id="validity"
              autoComplete="true"
              placeholder="Enter Job Validity"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="btn bg-green-800 hover:bg-green-700 text-white px-6 border-none "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobForm;
