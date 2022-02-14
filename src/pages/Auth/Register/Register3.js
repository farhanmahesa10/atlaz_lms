import React, { useEffect, useRef, useState } from "react";
import { InputComponent, GoogleButton } from "../../../components";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import validator from "validator";
import axios from "axios";
const Register3 = () => {
  const [searchParams] = useSearchParams();

  const didMount = useRef(false);
  let tempPhoneNumber = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/phoneNumber"
  );
  const [phoneNumber, setPhoneNumber] = useState(tempPhoneNumber);
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");

  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();

  // const validatePhoneNumber = () => {
  //   if (validator.isEmpty(phoneNumber)) {
  //     setPhoneNumberValidation("This field is required, Don't leave it empty!");
  //     setAllowNext(false);
  //   } else {
  //     setPhoneNumberValidation("");
  //     setAllowNext(true);
  //   }
  // };
  // useEffect(() => {
  //   if (searchParams.get("error") == "true") {
  //     setPhoneNumberValidation("This phone number is already registered.");
  //   }
  //   if (tempPhoneNumber && searchParams.get("error") != "true") {
  //     validatePhoneNumber();
  //   }
  // }, []);

  // useEffect(() => {
  //   if (didMount.current) {
  //     validatePhoneNumber();
  //   } else {
  //     didMount.current = true;
  //   }
  // }, [phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/auth/phone", {
        phone: phoneNumber,
      })
      .then((r) => {
        localStorage.setItem(
          process.env.REACT_APP_BASE_URL + "/register/phoneNumber",
          `0${phoneNumber}`
        );
        navigate("/register-step-4");
      })
      .catch((err) => {
        setPhoneNumberValidation(err.response.data.message);
      });
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
            <button type={`submit`} className={`btn-primary`}>
              Next
            </button>
          </div>
        </div>
      </form>
    </RegisterLayout>
  );
};

export default Register3;
