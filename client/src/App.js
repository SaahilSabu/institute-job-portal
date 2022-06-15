import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//private route
import PrivateRoute from "./components/routing/PrivateRoute";

//Pages
import PrivatePage from "./components/pages/PrivatePage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <PrivatePage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
