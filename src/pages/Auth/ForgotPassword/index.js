import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputEmail } from "../../../components/Form";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    toast(
      <div
        className="d-flex gap-2 align-items-center"
        style={{ width: "320px" }}
      >
        <i
          className="bi bi-check-circle fs-5 pe-2"
          style={{ color: "#6FCF97" }}
        ></i>
        <div className="text-left " style={{ textAlign: "left" }}>
          <strong className="d-block pb-1 m-0">Request has been sent!</strong>
          <p className="text-left d-block m-0 ">Please check your email</p>
        </div>
        <div
          className="cursor-pointer flex-fill position-absolute end-0 top-0"
          onClick={(e) => {
            toast.remove();
          }}
        >
          <p className="p-2"> X</p>
        </div>
      </div>
    );
  };
  return (
    <AuthLayout hideBackButton={true}>
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          <div className="auth-title">
            <h4 className=" " style={{ paddingBottom: "16px" }}>
              Forgot Password
            </h4>
            <p className="mt-0 lg-position-relative text-center">
              Submit your email address and we will send recovery password to
              your email
            </p>
          </div>

          <div className="mb-5 text-start">
            <InputEmail
              label="Email Address"
              placeholder="Enter your email"
              icon={<i className="bi bi-envelope"></i>}
              className="mb-4"
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
          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-warning fs-5 border col text-gray-700 btn-rounded">
              Reset Password
            </button>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="rectangle w-full"></div>
            <span className="px-2">or&nbsp;try</span>
            <div className="rectangle w-full"></div>
          </div>
          <div className="d-flex gap-3 mb-5">
            <Link
              to="/login"
              className="btn btn-white fs-5 border col text-gray-700 btn-rounded"
            >
              Sign In
            </Link>
          </div>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #6FCF97",
                padding: "10px",
                color: "#333333",
              },
            }}
          />
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
