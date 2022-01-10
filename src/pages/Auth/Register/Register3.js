import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputComponent, GoogleButton } from "../../../components/Form";
import { ProgressComponent } from "../../../components";
const Register3 = () => {
  return (
    <AuthLayout>
      <div className="auth-content">
        <div>
          <ProgressComponent totalProgress={4} activeProgress={3} />
        </div>
        <div className="auth-title">
          <p className="fw-bold text-center">
            Let's set this up for your account
          </p>
        </div>

        <div className="mb-5 text-start">
          <InputComponent
            label="Phone number"
            type="text"
            placeholder="Enter your number"
            icon={"+62"}
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

export default Register3;
