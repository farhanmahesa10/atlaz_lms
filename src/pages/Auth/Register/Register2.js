import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputComponent, GoogleButton } from "../../../components/Form";
import { ProgressComponent } from "../../../components";
const Register2 = () => {
  return (
    <AuthLayout>
      <div className="auth-content">
        <div>
          <ProgressComponent totalProgress={4} activeProgress={2} />
        </div>
        <div className="auth-title">
          <p className="fw-bold text-center">
            Let's set this up for your account
          </p>
        </div>

        <div className="mb-5 text-start">
          <InputComponent
            label="Fullname"
            type="text"
            placeholder="Enter your name"
            icon={<i className="bi bi-person"></i>}
            className="mb-4"
          />
        </div>
        <div className="d-flex gap-3 mb-5">
          <button className="btn btn-white border col btn-rounded">Back</button>
          <button className="border bg-gray-300 col btn-rounded">Next</button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register2;
