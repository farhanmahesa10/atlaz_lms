import React, { useState, useRef } from "react";
import { InputComponent, GoogleButton } from "../../../components";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { Link } from "react-router-dom";
import validator from "validator";
import InputPassword from "../../../components/Design/InputPassword";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mailValidation, setMailValidation] = useState("");

  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const emailRef = useRef();

  const loginSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setMailValidation("Please input the correct format email address!");
    } else {
      setMailValidation("");
    }
    if (validator.isEmpty(password)) {
      setPasswordValidation("Please could not empty");
    } else {
      setPasswordValidation(false);
    }

    console.log(email, password);
  };

  return (
    <AuthLayout>
      <div className="d-flex justify-content-center px-24 px-0">
        <div className="auth-wrapper w-full mt-66 md-mt-132">
          <div className="w-full">
            <h4 className="text-center">Welcome back, Atlazen!</h4>
            <GoogleButton
              label="Log in"
              className="py-8 w-p-100 mt-32 mb-32"
              onClick={() => {
                console.log("oke");
              }}
            />
            <form className="" onSubmit={loginSubmit}>
              <div className="d-flex align-items-center mb-24 ">
                <div className="rectangle"></div>
                <span className="px-2 text-neutral-300">or</span>
                <div className="rectangle"></div>
              </div>
              <div className=" mb-32">
                <InputComponent
                  label="Email Address"
                  key="email"
                  labelClassName="font-xs-bold"
                  placeholder="Enter your email"
                  icon={<i className="bi bi-envelope text-neutral-400"></i>}
                  onChange={(val) => {
                    setEmail(val);
                  }}
                  error={mailValidation ? true : false}
                  description={mailValidation}
                  autoFocus
                />
              </div>
              <div className=" mb-32">
                <InputPassword
                  label="Password"
                  key="email"
                  labelClassName="font-xs-bold"
                  placeholder="Enter your password"
                  icon={<i className="bi bi-envelope text-neutral-400"></i>}
                  onChange={(val) => {
                    setPassword(val);
                  }}
                  error={passwordValidation ? true : false}
                  description={passwordValidation}
                  autoFocus
                />
              </div>
              <div className="mb-48 d-flex justify-content-between">
                <div>
                  <input type="checkbox" className=" form-check-input" />{" "}
                  Remember me
                </div>
                <div>
                  <Link to="/forgot-password">Forgot password</Link>
                </div>
              </div>
              <div className="mb-32">
                <button className="btn-primary w-p-100">Log in</button>
              </div>
              <div className="text-center">
                New in Atlaz?{" "}
                <Link to="/register" className="text-primary-400">
                  Sign up now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <form className="" onSubmit={loginSubmit}>
        <div className="auth-content ">
          <div className="">
            <h4 className="pb-80 xs-pb-32 m-0">Welcome back, Atlazen!</h4>
          </div>
          <div className="mb-24">
            <GoogleButton label="Continue" />
          </div>
          <div className="d-flex align-items-center mb-12">
            <div className="rectangle"></div>
            <span className="px-2">or</span>
            <div className="rectangle"></div>
          </div>
          <div className=" mb-24">
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
            />
          </div>
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
              <input
                type="checkbox"
                className="text-warning me-1 form-check-input custom-checkbox"
                id="remember"
              />
              <label htmlFor="remember"> Remember me</label>
            </div>
            <div>
              <Link
                to="/forgot-password"
                className="text-decoration-none text-neutral-900"
              >
                Forgot password
              </Link>
            </div>
          </div>
          <div className="d-flex gap-3 xs-pb-32 pb-64">
            <button className=" btn-warning text-white border py-2 col btn-rounded">
              Sign in
            </button>
          </div>
          <footer className="footer mt-auto  bg-white text-center">
            <div className="">
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
          </footer>
        </div>
      </form> */}
    </AuthLayout>
  );
};

export default Login;
