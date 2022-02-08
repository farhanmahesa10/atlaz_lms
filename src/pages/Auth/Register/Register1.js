import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputComponent, GoogleButton } from "../../../components";
import { Link } from "react-router-dom";
import validator from "validator";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
const Register1 = () => {
  const didMount = useRef(false);
  let tempEmail = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/email"
  );

  const [email, setEmail] = useState(tempEmail);
  const [mailValidation, setMailValidation] = useState("");

  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (tempEmail) {
      validateEmail();
    }
  }, []);

  useEffect(() => {
    if (didMount.current) {
      validateEmail();
    } else {
      didMount.current = true;
    }
  }, [email]);

  const validateEmail = () => {
    if (validator.isEmpty(email)) {
      setMailValidation("This field is required, Don't leave it empty!");
      setAllowNext(false);
    } else if (!validator.isEmail(email)) {
      setMailValidation("Please input the correct format email address.");
      setAllowNext(false);
    } else {
      setMailValidation("");
      setAllowNext(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      process.env.REACT_APP_BASE_URL + "/register/email",
      email
    );

    if (allowNext) navigate("/register-step-2");
  };

  const handleRegisterGoogle = () => {};

  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={1}
      title="Sign up to get started"
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className=" ">
          <div className="mb-24">
            <GoogleButton
              label="Register"
              className="w-p-100 "
              onClick={handleRegisterGoogle}
            />
          </div>
          <div className="d-flex align-items-center mb-12">
            <div className="rectangle"></div>
            <span className="px-2">or</span>
            <div className="rectangle"></div>
          </div>

          <div className="mb-40 text-start">
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
              defaultValue={email}
              autoFocus
            />
          </div>
          <div className="">
            <button
              className={` ${
                allowNext ? "btn-primary" : "btn-disable"
              } w-p-100`}
              type={`${allowNext ? "sumbit" : "button"}`}
            >
              Next
            </button>
          </div>
        </div>
      </form>
      <footer className=" bg-white mt-32 sm-mt-64 text-center">
        <div className="">
          <small>
            Already have account?
            <Link to="/login" className={`text-warning text-decoration-none`}>
              &nbsp;Login now
            </Link>
          </small>
        </div>
      </footer>
    </RegisterLayout>
  );
};

export default Register1;
