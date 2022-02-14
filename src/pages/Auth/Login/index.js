import React, { useState, useEffect } from "react";
import { InputComponent, GoogleButton } from "../../../components";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { Link } from "react-router-dom";
import validator from "validator";
import InputPassword from "../../../components/Design/InputPassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Pace from "react-pace-progress";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mailValidation, setMailValidation] = useState("");

  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginGoogle = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };
  const loginSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmpty(email)) {
      return setMailValidation("This field is required, Don't leave it empty!");
    } else if (!validator.isEmail(email)) {
      return setMailValidation(
        "Please input the correct format email address!"
      );
    } else {
      setMailValidation("");
    }
    if (validator.isEmpty(password)) {
      return setPasswordValidation(
        "This field is required, Don't leave it empty!"
      );
    } else {
      setPasswordValidation(false);
    }
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/auth/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem(
          process.env.REACT_APP_BASE_URL + "/accessToken",
          res.data.accessToken.token
        );
        setIsLoading(false);

        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        toast(
          <div
            className="d-flex gap-2 align-items-center"
            style={{ width: "320px" }}
          >
            <i className="bi bi-x-circle fs-16 pe-2 text-danger-500"></i>
            <div className="text-left " style={{ textAlign: "left" }}>
              <strong className="d-block font-bold pb-1 m-0">
                Failed to log in your account
              </strong>
              <p className="text-left font-sm d-block m-0 ">
                Please enter correct email/password.
              </p>
            </div>
            <div
              className="cursor-pointer flex-fill position-absolute end-0 top-0"
              onClick={(e) => {
                toast.remove();
              }}
            >
              <p className="p-8 "> &times;</p>
            </div>
          </div>
        );
      });
  };

  return (
    <>
      {isLoading ? <Pace color="#FDCC6C" height={4} /> : null}
      <AuthLayout>
        <div className="d-flex justify-content-center px-24 px-0">
          <div className="auth-wrapper w-full mt-66 md-mt-132">
            <div className="w-full">
              <h4 className="text-center">Welcome back, Atlazen!</h4>
              <GoogleButton
                label="Log in"
                className="py-8 w-p-100 mt-32 mb-32"
                onClick={loginGoogle}
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
                <Toaster
                  toastOptions={{
                    className: "",
                    style: {
                      border: "1px solid #DC3545",
                      padding: "10px",
                      color: "#333333",
                    },
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
