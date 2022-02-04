import React, { useState } from "react";
import { InputComponent, GoogleButton } from "../../../components";
import { useNavigate, Link } from "react-router-dom";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import validator from "validator";
const Register2 = () => {
  const [fullName, setFullName] = useState("");
  const [fullNameValidation, setFullNameValidation] = useState("");

  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();

  const validateFullName = (val) => {
    if (validator.isEmpty(val)) {
      setFullNameValidation("full name is required.");
    } else {
      setFullNameValidation("");
      setAllowNext(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allowNext) navigate("/register-step-3");
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={2}
      title="Let's set this up for your account"
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          <div className="mb-48 text-start">
            <InputComponent
              label="Full name"
              key="email"
              labelClassName="font-xs-bold"
              placeholder="Enter your full name"
              icon={<i className="bi bi-person text-neutral-400"></i>}
              onChange={(val) => {
                setFullName(val);
                validateFullName(val);
              }}
              error={fullNameValidation ? true : false}
              description={fullNameValidation}
              autoFocus
            />
          </div>
          <div className="d-grid grid-cols-2 gap-3  ">
            <Link to="/register" className="  ">
              <button type="button" className="text-center btn-outline w-full">
                Back
              </button>
            </Link>
            <button
              type={`${allowNext ? "submit" : "button"}`}
              className={`${allowNext ? "btn-primary" : "btn-disable"} `}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </RegisterLayout>
  );
};

export default Register2;
