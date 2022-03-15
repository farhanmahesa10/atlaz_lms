import React, { useState } from "react";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import DotIcon from "../../../components/SVG/DotIcon";
import validator from "validator";
import { FormikControl } from "../../../components/atoms";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Form, Formik } from "formik";
const Register4 = () => {
  const [isLower, setIsLower] = useState("first");
  const [isUpper, setIsUpper] = useState("first");
  const [isNumeric, setIsNumeric] = useState("first");
  const [isSix, setIsSix] = useState("first");
  const [allowNext, setAllowNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    password: "",
  };
  const onSubmit = (values) => {
    setIsLoading(true);
    let api = process.env.REACT_APP_BASE_API_URL + "/auth/register";
    let baseUrl = process.env.REACT_APP_BASE_URL;
    let request = {
      name: localStorage.getItem(baseUrl + "/register/fullName"),
      email: localStorage.getItem(baseUrl + "/register/email"),
      phone: localStorage.getItem(baseUrl + "/register/phoneNumber"),
      password: values.password,
    };

    axios
      .post(api, request)
      .then((r) => {
        localStorage.removeItem(baseUrl + "/register/fullName");
        localStorage.removeItem(baseUrl + "/register/email");
        localStorage.removeItem(baseUrl + "/register/phoneNumber");
        setIsLoading(false);
        navigate("/register-finish");
      })
      .catch((err) => {
        setIsLoading(false);
        let msg = err.response.data.message;
      });

    // if (allowNext) navigate("/register-finish");
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={4}
      title="Let's set this up for your account"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnBlur={false}
      >
        <Form>
          <div className="auth-content">
            <div className=" text-start">
              <FormikControl
                control="inputPassword"
                label="Password"
                name="password"
                labelClassName="font-xs-bold"
                placeholder="Enter your password"
                onInput={(e) => {
                  validate(e.target.value);
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
                <button
                  type="button"
                  className="text-center btn-outline w-full"
                >
                  Back
                </button>
              </Link>
              <button
                type={`${allowNext && !isLoading ? "submit" : "button"}`}
                className={`${
                  allowNext && !isLoading ? "btn-primary" : "btn-disable"
                } `}
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </RegisterLayout>
  );
};

export default Register4;
