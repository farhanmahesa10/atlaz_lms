import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import InputPassword from "../../../components/Design/InputPassword";
import DotIcon from "../../../components/SVG/DotIcon";
import validator from "validator";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const ResetPassword = (props) => {
  const [searchParams] = useSearchParams();

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
    let email = searchParams.get("e");
    let token = searchParams.get("t");
    let verificationType = "RESET_PASSWORD";

    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/password/new", {
        email,
        token,
        verificationType,
        new_password: password,
      })
      .then((r) => {
        props.setFlashMassage(
          true,
          "Change Password success!",
          "Password has been changed",
          true
        );
        navigate("/login");
      })
      .catch((err) => {
        props.setFlashMassage(
          false,
          "Change Password failed!",
          err.response.data.message,
          true
        );
        navigate("/login");
      });
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
                    Submit
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
const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFlashMassage: (status, title, msg, show) =>
      dispatch({ type: "SET_FLASH_MESSAGE", status, title, msg, show }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
