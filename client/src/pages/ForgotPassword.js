import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="flex justify-center  w-11/12 m-auto my-6 p-4 border-2 border-gray-600 font-sans sm:w-1/2 xl:w-1/4">
      <form onSubmit={forgotPasswordHandler} className="flex flex-col p-3">
        <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
          Forgot Password
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
        {success && (
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
        )}
        <div className="w-56 mb-4 relative group">
          <p className="text-sm font-light text-red-300">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
          <label className="text-sm font-light" htmlFor="email">
            Email:
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
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn  bg-[#020493] hover:bg-[#0608c2] text-white w-56"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
