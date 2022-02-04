import React, { useState } from "react";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import DotIcon from "../../../components/SVG/DotIcon";
import validator from "validator";
import InputPassword from "../../../components/Design/InputPassword";
import { useNavigate, Link } from "react-router-dom";
const Register4 = () => {
  const [password, setPassword] = useState("");
  const [isLower, setIsLower] = useState("first");
  const [isUpper, setIsUpper] = useState("first");
  const [isNumeric, setIsNumeric] = useState("first");
  const [isSix, setIsSix] = useState("first");
  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();
  const validate = (val) => {
    let spliting = val.split("");
    let checkIfUpper = spliting.find((r) => {
      if (!validator.isNumeric(r)) return validator.isUppercase(r);
    });
    let checkIfLower = spliting.find((r) => {
      if (!validator.isNumeric(r)) return validator.isLowercase(r);
    });
    let checkIfNumeric = spliting.find((r) => {
      return validator.isNumeric(r);
    });
    let checkIfSix = spliting.length >= 6 ? true : false;
    checkIfUpper ? setIsUpper(true) : setIsUpper(false);
    checkIfLower ? setIsLower(true) : setIsLower(false);
    checkIfNumeric ? setIsNumeric(true) : setIsNumeric(false);
    checkIfSix ? setIsSix(true) : setIsSix(false);
    !checkIfUpper || !checkIfLower || !checkIfNumeric || !checkIfSix
      ? setAllowNext(false)
      : setAllowNext(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allowNext) navigate("/register-finish");
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={4}
      title="Let's set this up for your account"
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          <div className=" text-start">
            <InputPassword
              label="Password"
              type="password"
              placeholder="Create your password"
              icon={<i className="bi bi-lock"></i>}
              onChange={(val) => {
                setPassword(val);
                validate(val);
              }}
            />
            <div className="row mt-16 mb-48 text-neutral-400">
              <div className="col-sm-6 d-flex align-items-center">
                <DotIcon
                  status={
                    isLower == true
                      ? "success"
                      : isLower == false
                      ? "danger"
                      : ""
                  }
                >
                  <small className="ps-2">One lowercase characters</small>
                </DotIcon>
              </div>
              <div className="col-sm-6  d-flex align-items-center">
                <DotIcon
                  status={
                    isNumeric == true
                      ? "success"
                      : isNumeric == false
                      ? "danger"
                      : ""
                  }
                >
                  <small className="ps-2">One numeric</small>
                </DotIcon>
              </div>
              <div className="col-sm-6 d-flex align-items-center">
                <DotIcon
                  status={
                    isUpper == true
                      ? "success"
                      : isUpper == false
                      ? "danger"
                      : ""
                  }
                >
                  <small className="ps-2">One uppercase characters</small>
                </DotIcon>
              </div>
              <div className="col-sm-6 d-flex align-items-center">
                <DotIcon
                  status={
                    isSix == true ? "success" : isSix == false ? "danger" : ""
                  }
                >
                  <small className="ps-2">6 minimum characters</small>
                </DotIcon>
              </div>
            </div>
          </div>
          <div className="mb-40">
            By clicking Create account, I agree that I have read and accepted
            the <span className="text-primary-400">Terms of Use</span> and
            <span className="text-primary-400"> Privacy Policy.</span>
          </div>
          <div className="d-grid grid-cols-2 gap-3  ">
            <Link to="/register-step-3" className="  ">
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

export default Register4;
