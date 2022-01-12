import React, { useState } from "react";
import {
  InputComponent,
  GoogleButton,
  InputPassword,
  InputEmail,
} from "../../../components/Form";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({});

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <AuthLayout>
      <form onSubmit={loginSubmit}>
        <div className="auth-content ">
          <div className="auth-title">
            <p className="fw-bold ">Welcome back, Atlazen!</p>
          </div>
          <div className="mb-3">
            <GoogleButton label="Login" />
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="rectangle"></div>
            <span className="px-2">or</span>
            <div className="rectangle"></div>
          </div>
          <InputEmail
            label="Email Address"
            key="email"
            placeholder="Enter your email"
            icon={<i className="bi bi-envelope"></i>}
            onChange={(val) => {
              setEmail(val);
            }}
            onError={(val) => {
              setValidationError({
                ...validationError,
                email: val,
              });
            }}
            className="mb-3"
          />
          <InputPassword
            label="Password"
            type="password"
            key="passowrd"
            className="mb-2"
            placeholder="Enter your password"
            icon={<i className="bi bi-lock"></i>}
            onChange={(val) => setPassword(val)}
          />
          <div className="d-flex mb-5 justify-content-between">
            <div>
              <input type="checkbox" className="text-warning" /> Remember me
            </div>
            <div>
              <Link
                to="/forgot-password"
                className="text-decoration-none text-gray-900"
              >
                Forgot password
              </Link>
            </div>
          </div>
          <div className="d-flex gap-3 mb-5">
            <button className="btn btn-warning text-white border col btn-rounded">
              Sign in
            </button>
          </div>
          <div>
            <small>
              New to Atlaz?
              <Link
                to="/register"
                className={`text-warning text-decoration-none`}
              >
                &nbsp;Sign up now
              </Link>
            </small>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
