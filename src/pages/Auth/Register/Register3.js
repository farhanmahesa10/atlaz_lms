import React, { useEffect, useRef, useState } from "react";
import { InputComponent, GoogleButton } from "../../../components";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import { useNavigate, Link } from "react-router-dom";
import validator from "validator";
const Register3 = () => {
  const didMount = useRef(false);
  let tempPhoneNumber = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/phoneNumber"
  );
  const [phoneNumber, setPhoneNumber] = useState(tempPhoneNumber);
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");

  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();

  const validatePhoneNumber = () => {
    if (validator.isEmpty(phoneNumber)) {
      setPhoneNumberValidation("This field is required, Don't leave it empty!");
      setAllowNext(false);
    } else {
      setPhoneNumberValidation("");
      setAllowNext(true);
    }
  };
  useEffect(() => {
    if (tempPhoneNumber) {
      validatePhoneNumber();
    }
  }, []);

  useEffect(() => {
    if (didMount.current) {
      validatePhoneNumber();
    } else {
      didMount.current = true;
    }
  }, [phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      process.env.REACT_APP_BASE_URL + "/register/phoneNumber",
      phoneNumber
    );
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
              }}
              inputClassName="hide-arrow"
              error={phoneNumberValidation ? true : false}
              description={phoneNumberValidation}
              autoFocus
              defaultValue={phoneNumber}
            />
          </div>
          <div className="d-grid grid-cols-2 gap-3  ">
            <Link to="/register-step-2" className="  ">
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

export default Register3;
