import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./../components/Nav";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
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
    <div>
      <Nav />
      <Header />
      <div className="flex justify-center  w-11/12 m-auto my-6 p-4 border-2 border-gray-600 font-sans sm:w-1/2 xl:w-1/4">
        <form onSubmit={loginHandler} className="flex flex-col p-3">
          <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
            Login
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
          <div className="w-56 mb-4 relative group">
            <label className="text-sm font-light" htmlFor="email" for="email">
              Email
            </label>
            <input
              type="email"
              required
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}
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
            />
          </div>
          <div className="w-56 mb-4 relative group">
            <label
              className="text-sm font-light"
              htmlFor="password"
              for="password"
            >
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
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}
            />
          </div>
          <Link
            to="/forgotpassword"
            className="text-sm font-light text-red-400 link link-hover my-2"
            tabIndex={4}
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="btn  bg-[#020493] hover:bg-[#0608c2] text-white w-56"
            tabIndex={3}
          >
            Login
          </button>

          <span className="text-sm font-light py-3">
            Don't have an account?
            <Link className=" text-red-400 link link-hover mx-1" to="/register">
              Register
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

export default Login;
