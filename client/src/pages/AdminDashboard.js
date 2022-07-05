import { useState } from "react";
import axios from "axios";
import Nav from "./../components/Nav";
import Header from "./../components/Header";
import JobForm from "./../components/JobForm";

const AdminDashboard = () => {
  return (
    <>
      <Nav />
      <Header title="Admin Dashboard" />
      <JobForm />
    </>
  );
};

export default AdminDashboard;
