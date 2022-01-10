import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputComponent, GoogleButton } from "../../../components/Form";
import { ProgressComponent } from "../../../components";
const Register1 = () => {
  return (
    <AuthLayout>
      <div className="auth-content">
        <div>
          <ProgressComponent totalProgress={4} activeProgress={1} />
        </div>
        <div className="auth-title">
          <p className="fw-bold text-center">Welcome! First things first...</p>
        </div>
        <div className="mb-3">
          <GoogleButton />
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="rectangle"></div>
          <span className="px-2">or</span>
          <div className="rectangle"></div>
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
          <button className="btn btn-white border col btn-rounded">Back</button>
          <button className="border bg-gray-300 col btn-rounded">Next</button>
        </div>
        <div>
          <small>
            Already have account?
            <a href="" className="text-warning text-decoration-none">
              &nbsp;Sign in now
            </a>
          </small>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register1;
