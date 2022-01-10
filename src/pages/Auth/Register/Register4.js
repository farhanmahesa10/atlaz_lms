import React from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputComponent, GoogleButton } from "../../../components/Form";
import { ProgressComponent } from "../../../components";
import DotIcon from "../../../components/SVG/DotIcon";
const Register4 = () => {
  return (
    <AuthLayout>
      <div className="auth-content">
        <div>
          <ProgressComponent totalProgress={4} activeProgress={4} />
        </div>
        <div className="auth-title">
          <p className="fw-bold text-center">
            Let's set this up for your account
          </p>
        </div>

        <div className="mb-5 text-start">
          <InputComponent
            label="Password"
            type="password"
            placeholder="Create your password"
            icon={<i className="bi bi-lock"></i>}
            className="mb-2"
          />
          <div class="row  text-gray-400">
            <div class="col-6 d-flex align-items-center">
              <DotIcon />
              <small class="ps-2">One lowercase characters</small>
            </div>
            <div class="col-6 d-flex align-items-center">
              <DotIcon />
              <small class="ps-2">One numeric</small>
            </div>
            <div class="col-6 d-flex align-items-center">
              <DotIcon />
              <small class="ps-2">One uppercase characters</small>
            </div>
            <div class="col-6 d-flex align-items-center">
              <DotIcon />
              <small class="ps-2">6 minimum characters</small>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 mb-5">
          <button className="btn btn-white border col btn-rounded">Back</button>
          <button className="border bg-gray-300 col btn-rounded">Next</button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register4;
