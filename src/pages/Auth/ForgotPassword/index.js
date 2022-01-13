import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputEmail } from "../../../components/Form";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState({});
  return (
    <AuthLayout hideBackButton={true}>
      <div className="auth-content">
        <div className="auth-title">
          <p className="fw-bold">Forgot Password</p>
          <p className="mt-0 lg-position-relative text-center">
            Submit your email address and we will send recovery password to your
            email
          </p>
        </div>

        <div className="mb-5 text-start">
          <InputEmail
            label="Email Address"
            placeholder="Enter your email"
            icon={<i className="bi bi-envelope"></i>}
            className="mb-4"
            onChange={(val) => {
              setEmail(val);
            }}
            onError={(val) => {
              setValidationError({
                ...validationError,
                email: val,
              });
            }}
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
          <Link
            to="/login"
            className="btn btn-white fs-5 border col text-gray-700 btn-rounded"
          >
            Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
