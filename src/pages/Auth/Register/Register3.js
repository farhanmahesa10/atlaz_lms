import React, { useState } from "react";
import { InputComponent, GoogleButton } from "../../../components";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import { useNavigate, Link } from "react-router-dom";
import validator from "validator";
const Register3 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");

  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();

  const validatePhoneNumber = (val) => {
    if (validator.isEmpty(val)) {
      setPhoneNumberValidation("Phone number is required.");
    } else {
      setPhoneNumberValidation("");
      setAllowNext(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allowNext) navigate("/register-step-4");
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={3}
      title="Let's set this up for your account"
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          <div className="mb-48 text-start">
            <InputComponent
              label="Phone number"
              key="phone"
              type="number"
              labelClassName="font-xs-bold"
              placeholder="Enter your number"
              icon={<span className=" text-neutral-400">+62</span>}
              onChange={(val) => {
                setPhoneNumber(val);
                validatePhoneNumber(val);
              }}
              inputClassName="hide-arrow"
              error={phoneNumberValidation ? true : false}
              description={phoneNumberValidation}
              autoFocus
            />
          </div>
          <div className="d-grid grid-cols-2 gap-3  ">
            <Link to="/register-step-2" className=" text-center btn-outline ">
              Back
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

export default Register3;
