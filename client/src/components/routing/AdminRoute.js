import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  return localStorage.getItem("adminToken") ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoute;
