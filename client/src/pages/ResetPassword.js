import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import Footer from './../components/Footer';
import Nav from './../components/Nav';
import Header from './../components/Header';

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { resetToken } = useParams();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }
    // console.log(resetToken);

    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
    } else {
      return setError(
        "Password should have 8 characters , one lowercase and one uppercase one number and one special character"
      );
    }

    try {
      const { data } = await axios.put(
        `/api/auth//resetpassword/${resetToken}`,
        {
          password,
        },
        config
      );
      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      console.log(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="h-screen">
        <Nav />
        <Header title="Register" />
    <div className="flex justify-center  w-11/12 m-auto my-6 p-4 border-2 border-gray-600 font-sans sm:w-1/2 xl:w-1/4">
      <form onSubmit={resetPasswordHandler} className="flex flex-col p-3">
        <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5">
          Reset your password
        </h3>
        {error && (
          <div className="alert alert-error shadow-sm my-2 text-sm">
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
              <span>
                {success} <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        )}
        <div className="w-56 mb-4 relative group mx-auto">
          <label className="text-sm font-light" htmlFor="password">
            New Password:
          </label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          />
        </div>
        <div className="w-56 mb-4 relative group mx-auto">
          <label className="text-sm font-light" htmlFor="confirmpassword">
            Confirm New Password:
          </label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          />
        </div>
        <button
          type="submit"
          className="btn  bg-[#020493] hover:bg-[#0608c2] text-white w-56 mx-auto"
        >
          Reset Password
        </button>
      </form>
    </div>
    </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
