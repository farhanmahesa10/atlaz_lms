import React, { useState } from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import DotIcon from "../../../SVG/DotIcon";
import validator from "validator";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { FormikControl, GlobalToast } from "../../../atoms";
import { Form, Formik } from "formik";
import { connect, useDispatch } from "react-redux";
import { POST } from "../../../../config/RestAPI";
const ChangeFirstPasswordOrg = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
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
  const initialValues = {
    username: params.username,
    password: "",
    new_password: "",
  };
  const onSubmit = (values) => {
    setIsLoading(true);
    POST("/auth/password/user", values)
      .then((r) => {
        localStorage.setItem(
          process.env.REACT_APP_BASE_URL + "/accessToken",
          r.accessToken.token
        );
        navigate("/");
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          dispatch({
            type: "SET_FLASH_MESSAGE",
            status: false,
            title: "Login Failed!",
            msg: "Wrong username / password!",
            show: true,
            isRedirecterToast: false,
          });
        } else {
          dispatch({
            type: "SET_FLASH_MESSAGE",
            status: false,
            title: "Something went wrong!",
            msg: "Your connection is unstable!",
            show: true,
            isRedirecterToast: false,
          });
        }
        setIsLoading(false);
      });
  };

  return (
    <AuthLayout>
      <div className="d-flex justify-content-center px-24 px-0">
        <div className="auth-wrapper w-full mt-66 md-mt-132">
          <div className="w-full">
            <h4 className="text-center mb-56">Change Password</h4>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validateOnBlur={false}
            >
              <Form>
                <div className="auth-content">
                  <div className=" text-start">
                    <div className="mb-16">
                      <FormikControl
                        control="inputPassword"
                        label="Old Password"
                        name="password"
                        labelClassName="font-xs-bold"
                        placeholder="Enter your old password"
                      />
                    </div>
                    <FormikControl
                      control="inputPassword"
                      label="New Password"
                      name="new_password"
                      labelClassName="font-xs-bold"
                      placeholder="Enter your new password"
                      onInput={(e) => {
                        validate(e.target.value);
                      }}
                    />

                    <div className="row mt-16 mb-48 text-neutral-400">
                      <div className="col-sm-6 d-flex align-items-center">
                        <DotIcon
                          status={
                            isLower === true
                              ? "success"
                              : isLower === false
                              ? "danger"
                              : ""
                          }
                        >
                          <small className="ps-2">
                            One lowercase characters
                          </small>
                        </DotIcon>
                      </div>
                      <div className="col-sm-6  d-flex align-items-center">
                        <DotIcon
                          status={
                            isNumeric === true
                              ? "success"
                              : isNumeric === false
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
                            isUpper === true
                              ? "success"
                              : isUpper === false
                              ? "danger"
                              : ""
                          }
                        >
                          <small className="ps-2">
                            One uppercase characters
                          </small>
                        </DotIcon>
                      </div>
                      <div className="col-sm-6 d-flex align-items-center">
                        <DotIcon
                          status={
                            isSix === true
                              ? "success"
                              : isSix === false
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
                      type={`${allowNext && !isLoading ? "submit" : "button"}`}
                      className={`${
                        allowNext && !isLoading ? "btn-primary" : "btn-disable"
                      } col font-normal font-normal`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <GlobalToast />
    </AuthLayout>
  );
};

export default connect()(ChangeFirstPasswordOrg);
