import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivatePage.css";
import { useNavigate } from "react-router-dom";

const PrivatePage = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phno, setPhno] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [navigate]);

  const formHandler = async (e) => {
    const email = localStorage.getItem("email");
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        "/api/form/forminfo",
        {
          email,
          fname,
          lname,
          phno,
          address,
        },
        config
      );
      setSuccess(true);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div style={{ background: "green", color: "white" }}>{privateData}</div>
      {success ? <div className="success-message">Form Updated</div> : <>></>}
      <div className="register-screen">
        <form onSubmit={formHandler} className="register-screen__form">
          <h3 className="register-screen__title">Form</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              required
              id="fname"
              placeholder="Enter first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Last Name:</label>
            <input
              type="text"
              required
              id="lname"
              placeholder="Email last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Phone Number:</label>
            <input
              type="number"
              required
              id="phno"
              autoComplete="true"
              placeholder="Enter phone number"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Address</label>
            <input
              type="text"
              required
              id="address"
              autoComplete="true"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      <button className="btn btn-logout" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};

export default PrivatePage;
