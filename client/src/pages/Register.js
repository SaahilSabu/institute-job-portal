import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import validator from "validator";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

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
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );
      localStorage.setItem("id", data.id);
      localStorage.setItem("authToken", data.token);

      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="">
      <Nav />
      <Header title="Register" />
      <div className="flex justify-center  w-11/12 m-auto my-6 p-4 border-2 border-gray-600 font-sans sm:w-1/2 xl:w-1/4">
        <form onSubmit={registerHandler} className="flex flex-col p-3">
          <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
            Register
          </h3>
          {error && (
            <div class="alert alert-error shadow-sm my-2 text-sm">
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
          <div className="w-56 mb-4 relative group mx-auto">
            <label className="text-sm font-light" htmlFor="name">
              Username:
            </label>
            <input
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
              type="text"
              required
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-56 mb-4 relative group mx-auto">
            <label className="text-sm font-light" htmlFor="email">
              Email:
            </label>
            <input
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
              type="email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-56 mb-4 relative group mx-auto">
            <label className="text-sm font-light" htmlFor="password">
              Password:
            </label>
            <input
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
              type="password"
              required
              id="password"
              autoComplete="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-56 mb-4 relative group mx-auto">
            <label className="text-sm font-light" htmlFor="confirmpassword">
              Confirm Password:
            </label>
            <input
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
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn bg-[#020493] hover:bg-[#0608c2] text-white w-56 mx-auto"
          >
            Register
          </button>

          <span className="text-sm font-light py-3">
            Already have an account?{" "}
            <Link className="text-red-400 link link-hover mx-1" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
      <div className=" fixed left-0 bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
