import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputComponent } from "../../../components";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [borderToast, setborderToast] = useState("");

  const [mailValidation, setMailValidation] = useState("");

  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      setMailValidation("Please input the correct format email address.");
    } else {
      setMailValidation("");
    }
  };

  const callToast = (title, msg, status) => {
    toast(
      <div
        className="d-flex gap-2 align-items-center"
        style={{ width: "320px" }}
      >
        <i
          className={`bi ${
            status
              ? "bi-check-circle text-info-400"
              : "bi-x-circle text-danger-400"
          } fs-16 pe-2`}
        ></i>
        <div className="text-left " style={{ textAlign: "left" }}>
          <strong className="d-block pb-1 m-0 font-bold">{title}</strong>
          <p className="text-left d-block m-0 ">{msg}</p>
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/password/reset", { email })
      .then((r) => {
        setborderToast("1px solid #6FCF97");
        callToast("Request has been sent!", "Please check your email.", true);
      })
      .catch((err) => {
        setborderToast("1px solid #d63384");
        callToast("Something went wrong!", err.response.data.message, false);
      });
  };
  return (
    <AuthLayout hideBackButton={true}>
      <div className="d-flex justify-content-center px-24 px-0">
        <div className="auth-wrapper w-full mt-66 md-mt-132">
          <div className="w-full">
            <h4 className=" text-center">Forgot Password</h4>
            <p className="mt-8 mb-32 lg-position-relative text-center">
              Submit your email address and we will send recovery password to
              your email
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-40 text-start">
                <InputComponent
                  label="Email Address"
                  key="email"
                  labelClassName="font-xs-bold"
                  placeholder="Enter your email"
                  icon={<i className="bi bi-envelope text-neutral-400"></i>}
                  onChange={(val) => {
                    setEmail(val);
                    validateEmail();
                  }}
                  error={mailValidation ? true : false}
                  description={mailValidation}
                  autoFocus
                />
              </div>
              <div className="d-flex gap-3 mb-24">
                <button className="btn-primary border col text-neutral-700 btn-rounded">
                  Reset Password
                </button>
              </div>
              <div className="d-flex align-items-center">
                <div className="rectangle w-full"></div>
                <span className="px-2">or&nbsp;try</span>
                <div className="rectangle w-full"></div>
              </div>
              <div className="d-flex gap-3 mt-24">
                <Link
                  to="/login"
                  className="btn-outline text-center border col text-neutral-700 btn-rounded"
                >
                  Log in
                </Link>
              </div>
              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    border: borderToast,
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
  );
};

export default ForgotPassword;
