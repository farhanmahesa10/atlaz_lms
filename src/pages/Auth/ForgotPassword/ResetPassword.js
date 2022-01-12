import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputPassword, GoogleButton } from "../../../components/Form";
import { ProgressComponent } from "../../../components";
import DotIcon from "../../../components/SVG/DotIcon";
import validator from "validator";
import { useNavigate, Link } from "react-router-dom";
const ResetPassword = () => {
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
    <AuthLayout hideBackButton={true}>
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          <div className="auth-title">
            <p className="fw-bold text-center">Reset password</p>
          </div>

          <div className="mb-5 text-start">
            <InputPassword
              label="Password"
              placeholder="Create your password"
              icon={<i className="bi bi-lock"></i>}
              className="mb-2"
              onChange={(val) => {
                setPassword(val);
                validate(val);
              }}
            />
            <div className="row  text-gray-400">
              <div className="col-6 d-flex align-items-center">
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
              <div className="col-6 d-flex align-items-center">
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
              <div className="col-6 d-flex align-items-center">
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
              <div className="col-6 d-flex align-items-center">
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
            <button
              type={`${allowNext ? "submit" : "button"}`}
              className={`border py-2 col btn-rounded  ${
                allowNext ? "bg-warning" : "bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
