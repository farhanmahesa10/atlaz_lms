import React from "react";
import { InputComponent, GoogleButton } from "../../../components/Form";
import AuthLayout from "../../../components/Layout/AuthLayout";
const Login = () => {
  return (
    <AuthLayout>
      <div className="auth-content">
        <div className="auth-title">
          <p className="fw-bold ">Welcome back, Atlazen!</p>
        </div>
        <div className="mb-3">
          <GoogleButton />
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="rectangle"></div>
          <span className="px-2">or</span>
          <div className="rectangle"></div>
        </div>

        <InputComponent
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          icon={<i className="bi bi-envelope"></i>}
          className="mb-4"
        />
        <InputComponent
          label="Password"
          type="password"
          className="mb-2"
          placeholder="Enter your password"
          icon={<i className="bi bi-lock"></i>}
        />

        <div className="d-flex mb-5 justify-content-between">
          <div>
            <input type="checkbox" className="text-warning" /> Remember me
          </div>
          <div>
            <a href="" className="text-decoration-none text-gray-900">
              Forgot password
            </a>
          </div>
        </div>
        <div className="d-flex gap-3 mb-5">
          <button className="btn btn-warning text-white border col btn-rounded">
            Sign in
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
