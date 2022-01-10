import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputComponent } from "../../../components/Form";
const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="auth-content">
        <div className="auth-title">
          <p className="fw-bold">Forgot Password</p>
          <p className="mt-0 lg-position-relative text-center">
            Submit your email address and we will send recovery password to your
            email
          </p>
        </div>

        <div className="mb-5 text-start">
          <InputComponent
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={<i className="bi bi-envelope"></i>}
            className="mb-4"
          />
        </div>
        <div className="d-flex gap-3 mb-5">
          <button className="btn btn-warning fs-5 border col text-gray-700 btn-rounded">
            Reset Password
          </button>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="rectangle"></div>
          <span className="px-2">or&nbsp;try</span>
          <div className="rectangle"></div>
        </div>
        <div className="d-flex gap-3 mb-5">
          <a
            href=""
            className="btn btn-white fs-5 border col text-gray-700 btn-rounded"
          >
            Sign In
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
