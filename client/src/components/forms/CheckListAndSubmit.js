import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const CheckListAndSubmit = () => {
  const id = localStorage.getItem("id");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [userInfo, setUserInfo] = useState("");

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

  const formHandler = async (e) => {
    e.preventDefault();

    axios
      .post("api/pdf/createPdf", {
        userInfo,
      })
      .then(() => axios.get("api/pdf/getPdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });

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
        className="flex w-full my-6 p-4 font-sans  lg:w-full"
      >
        <div className="flex flex-col p-3 w-full">
          <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
            Review and Submit
          </h3>
          <div className="flex justify-center">
            <div className="alert alert-warning shadow-sm rounded-none w-full lg:w-1/3">
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
                <span>Check list/ page number for docs to be uploaded</span>
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
          <div className="border-blue-500 border-2 my-4">
            <h2 className="text-2xl text-center my-4">
              Check list for documents to be attached
            </h2>
            <div className="grid grid-cols-4 place-items-center place-content-center gap-2 m-auto my-6 ">
              <div className="form-control w-56">
                <label className="label cursor-pointer ">
                  <span className="text-lg font-light mx-2">Aadhaar Card</span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix1 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Fee reciept / Payment proof
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix2 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Category certificates
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix3 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Academic records (Marksheets/Passing Certificates/ Degree
                    certificates for all courses from Xth upward till PhD)
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix4 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Experience Certificates
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix5 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    NOC from current employer (if applicable)
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix6 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Reprint of best 5 papers
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix7 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of Journal papers in referred journals
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix8 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of Journal papers in SCI indexed journals
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix9 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of International conference papers
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix10 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of National conference papers
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix11 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Qualification certificates (GATE/NET etc.)
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix12 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of Continuing Education Programmes conducted
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix13 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of courses/FDPs/ Workshops/ Seminars conducted
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix14 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of Awards/Recognitions
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix15 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    List of Academic and Corporate activities
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix16 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Teaching and Research Plan
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix17 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="text-lg font-light mx-2">
                    Any other relevant information
                  </span>
                  <input
                    // required
                    type="checkbox"
                    checked={userInfo.appendix18 ? "checked" : ""}
                    className="checkbox mx-2"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl my-2 underline">Declaration</h2>
            <p className="text-lg">
              I hereby declare that I have carefully read and understood the
              instructions and particulars supplied to me, and that all entries
              in this form as well as in the attached sheet(s) are true to the
              best of my knowledge and belief. I also declare that I have not
              wilfully suppressed any information. Further if any of the above
              information/details given is/are found false/wrong/ incorrect, I
              understand that, my candidature/appointment will/shall be treated
              as cancelled at any time or I am liable to be summarily terminated
              without notice or compensation.{" "}
            </p>
            <label className="label cursor-pointer w-1/3">
              <span className="text-lg font-light mx-2">
                I hereby approve all information provided is correct
              </span>
              {/* <input required type="checkbox" className="checkbox mx-2" /> */}
            </label>
          </div>

          <div className="flex justify-center lg:justify-end">
            <button
              type="submit"
              className="btn  bg-[#020493] w-56 hover:bg-[#0608c2] text-white px-6 border-none m-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckListAndSubmit;
