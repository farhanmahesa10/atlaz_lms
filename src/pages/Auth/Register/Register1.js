import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { InputComponent, GoogleButton } from "../../../components";
import { Link } from "react-router-dom";
import validator from "validator";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import axios from "axios";
const Register1 = () => {
  const didMount = useRef(false);
  const [searchParams] = useSearchParams();

  let tempEmail = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/email"
  );

  const [email, setEmail] = useState(tempEmail);
  const [mailValidation, setMailValidation] = useState("");

  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();
  const loginGoogle = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/auth/email", { email })
      .then((r) => {
        localStorage.setItem(
          process.env.REACT_APP_BASE_URL + "/register/email",
          email
        );
        navigate("/register-step-2");
      })
      .catch((err) => {
        setMailValidation(err.response.data.message);
      });
  };

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
              onClick={loginGoogle}
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
            <button className={` w-p-100 btn-primary`} type={`submit`}>
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
