import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputComponent } from "../../../components/Form";
const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div class="auth-content">
        <div class="auth-title">
          <p class="fw-bold">Forgot Password</p>
          <p class="mt-0 lg-position-relative text-center">
            Submit your email address and we will send recovery password to your
            email
          </p>
        </div>

        <div class="mb-5 text-start">
          <InputComponent
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={<i className="bi bi-envelope"></i>}
            className="mb-4"
          />
        </div>
        <div class="d-flex gap-3 mb-5">
          <button class="btn btn-warning fs-5 border col text-gray-700 btn-rounded">
            Reset Password
          </button>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="rectangle"></div>
          <span class="px-2">or&nbsp;try</span>
          <div class="rectangle"></div>
        </div>
        <div class="d-flex gap-3 mb-5">
          <a
            href=""
            class="btn btn-white fs-5 border col text-gray-700 btn-rounded"
          >
            Sign In
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
