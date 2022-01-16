import React, { useState } from "react";
import { InputPassword } from "../../../components/Form";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import DotIcon from "../../../components/SVG/DotIcon";
import validator from "validator";
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
          <div className="mb-5 text-start">
            <InputPassword
              label="Password"
              type="password"
              placeholder="Create your password"
              icon={<i className="bi bi-lock"></i>}
              className="mb-2"
              onChange={(val) => {
                setPassword(val);
                validate(val);
              }}
            />
            <div className="row  text-gray-400">
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
              <div className="col-sm-6 d-flex align-items-center">
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
          <div className="d-flex gap-3 mb-5">
            <Link
              to="/register-step-3"
              className="btn btn-white border col btn-rounded"
            >
              Back
            </Link>
            <button
              type={`${allowNext ? "submit" : "button"}`}
              className={`border  col btn-rounded  ${
                allowNext ? "bg-warning" : "bg-gray-300"
              }`}
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
