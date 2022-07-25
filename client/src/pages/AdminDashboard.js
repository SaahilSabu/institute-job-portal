import Nav from "./../components/Nav";
import Header from "./../components/Header";
import JobForm from "./../components/JobForm";
import Footer from "./../components/Footer";
import UserList from "./../components/UserList";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { login } from "../redux/userSlice";
import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const username = useSelector((state) => state.username.value);
  const navigate = useNavigate();
  const [privateData, setPrivateData] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  
  useEffect(() => {
    const fetchPrivateData = async () => {
      if (!localStorage.getItem("adminToken")) {
        navigate("/login");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private/admin", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("adminToken");
        localStorage.removeItem("id");
        setError("You are not authorized please refresh page and login");
      }
    };

    fetchPrivateData();
  }, []);

  useEffect(() => {
    const userData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(`/api/form/forminfo/${id}`, config);
        dispatch(login(data.user.username));
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, []);

  return error ? (
    <span className="alert alert-error shadow-lg rounded-none">{error} </span>
  ) : (
    <>
      <div className="min-h-screen">
        <Nav />
        <Header title="Admin Dashboard" />
        <h2 className="m-4 text-lg">
          Welcome back <span className="font-bold mx-1">{username}</span>
        </h2>
        <UserList />
        <JobForm />
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
