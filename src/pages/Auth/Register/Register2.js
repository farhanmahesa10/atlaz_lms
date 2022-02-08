import React, { useEffect, useRef, useState } from "react";
import { InputComponent, GoogleButton } from "../../../components";
import { useNavigate, Link } from "react-router-dom";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import validator from "validator";
const Register2 = () => {
  const didMount = useRef(false);
  let tempFullName = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/fullName"
  );
  const [fullName, setFullName] = useState(tempFullName);
  const [fullNameValidation, setFullNameValidation] = useState("");

  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();

  const validateFullName = () => {
    if (validator.isEmpty(fullName)) {
      setFullNameValidation("This field is required, Don't leave it empty!");
      setAllowNext(false);
    } else {
      setFullNameValidation("");
      setAllowNext(true);
    }
  };

  useEffect(() => {
    if (tempFullName) {
      validateFullName();
    }
  }, []);

  useEffect(() => {
    if (didMount.current) {
      validateFullName();
    } else {
      didMount.current = true;
    }
  }, [fullName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      process.env.REACT_APP_BASE_URL + "/register/fullName",
      fullName
    );
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
              }}
              error={fullNameValidation ? true : false}
              description={fullNameValidation}
              autoFocus
              defaultValue={fullName}
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
