import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Login,
  Register1,
  Register2,
  Register3,
  Register4,
  Register5,
  ForgotPassword,
  ResetPassword,
} from "../../pages";
const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register1 />} />
      <Route path="/register-step-2" element={<Register2 />} />
      <Route path="/register-step-3" element={<Register3 />} />
      <Route path="/register-step-4" element={<Register4 />} />
      <Route path="/register-finish" element={<Register5 />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};
export default Routing;
