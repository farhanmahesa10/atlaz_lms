import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { RegisterMail } from "../../components/Mail";
import {
  Login,
  Register1,
  Register2,
  Register3,
  Register4,
  Register5,
  ForgotPassword,
  ResetPassword,
  Redirecting,
  Home,
  SearchResult,
  ProductDetail,
  Verify,
} from "../../pages";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" exac element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register1 />} />
      <Route path="/register-step-2" element={<Register2 />} />
      <Route path="/register-step-3" element={<Register3 />} />
      <Route path="/register-step-4" element={<Register4 />} />
      <Route path="/register-finish" element={<Register5 />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/redirecting" element={<Redirecting />} />
      <Route path="/mail-design" element={<RegisterMail />} />
      <Route path="/search-result/:keyword" element={<SearchResult />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/verify-account" element={<Verify />} />
    </Routes>
  );
};
export default Routing;
