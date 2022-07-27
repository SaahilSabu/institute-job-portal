import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//private route
import PrivateRoute from "./components/routing/PrivateRoute";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/routing/AdminRoute";
import UserInfo from "./pages/UserInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        ></Route>
        <Route
          path="/userinfo/:id"
          element={
            <AdminRoute>
              <UserInfo />
            </AdminRoute>
          }
        ></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/forgotpassword"
          element={
              <ForgotPassword />
          }
        ></Route>
        <Route
          path="/passwordreset/:resetToken"
          element={
              <ResetPassword />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
