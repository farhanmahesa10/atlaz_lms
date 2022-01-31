import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import InputPassword from "../../../components/Design/InputPassword";
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
      <div className="d-flex justify-content-center px-24 px-0">
        <div className="auth-wrapper w-full mt-66 md-mt-132">
          <div className="w-full">
            <h4 className="text-center mb-56">Reset Password</h4>
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
                          isSix == true
                            ? "success"
                            : isSix == false
                            ? "danger"
                            : ""
                        }
                      >
                        <small className="ps-2">6 minimum characters</small>
                      </DotIcon>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 w-p-100 ">
                  <button
                    type={`${allowNext ? "submit" : "button"}`}
                    className={`${
                      allowNext ? "btn-primary" : "btn-disable"
                    } w-p-100`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
