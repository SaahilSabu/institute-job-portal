import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
const PDFpage = () => {
  const id = localStorage.getItem("id");
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userFormData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(`/api/form/forminfo/${id}`, config);
        setUserInfo(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    userFormData();
  }, []);

  const createAndDownloadPdf = () => {
    axios
      .post("api/pdf/createPdf", {
        userInfo,
      })
      .then(() => axios.get("api/pdf/getPdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "application.pdf");
      });

    // try {
    //   axios.put(`api/form/submit/${id}`);
    // } catch (error) {
    //   console.log(error)
    // }
  };

  return (
    <div>
      <div className="h-screen">
        <div className="flex justify-center  w-11/12 m-auto my-6 p-4 border-2 border-gray-600 font-sans sm:w-1/2 xl:w-1/4">
          <form className="flex flex-col p-3">
            <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
              Login
            </h3>

            <div className="w-56 mb-4 relative group">
              <label className="text-sm font-light" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                tabIndex={1}
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              />
            </div>
            <div className="w-56 mb-4 relative group">
              <label className="text-sm font-light" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                required
                id="password"
                autoComplete="true"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                tabIndex={2}
              />
            </div>
            <a
              to="/forgotpassword"
              className="text-sm font-light text-red-400 link link-hover my-2"
              tabIndex={4}
            >
              Forgot Password?
            </a>
            {userInfo && (
              <button
                type="button"
                className="btn  bg-[#020493] hover:bg-[#0608c2] text-white w-56"
                tabIndex={3}
                onClick={createAndDownloadPdf}
              >
                Login
              </button>
            )}

            <span className="text-sm font-light py-3">
              Don't have an account?
              <a className=" text-red-400 link link-hover mx-1" to="/register">
                Register
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PDFpage;
