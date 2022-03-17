import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormikControl, GlobalToast } from "../../../atoms";
import AuthLayout from "../../../Layout/AuthLayout";
const ForgotPasswordOrg = () => {
  const dispatch = useDispatch();

  const tempTimer = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/forgot-resend-timer"
  );
  const [progressValue, setProgressValue] = useState(tempTimer ? tempTimer : 0);

  useEffect(() => {
    if (!tempTimer) {
      localStorage.setItem(
        process.env.REACT_APP_BASE_URL + "/register/forgot-resend-timer",
        0
      );
    }
  }, []);

  useEffect(() => {
    if (progressValue > 0) {
      const interval = setInterval(() => {
        if (progressValue > 0) {
          setProgressValue(progressValue - 1);
          localStorage.setItem(
            process.env.REACT_APP_BASE_URL + "/register/forgot-resend-timer",
            progressValue - 1
          );
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [progressValue]);
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required, Don't leave it empty!")
      .email("Please input the correct format email address!"),
  });

  const onSubmit = (values) => {
    if (progressValue < 1) {
      console.log("okes");
      axios
        .post(process.env.REACT_APP_BASE_API_URL + "/password/reset", values)
        .then((r) => {
          dispatch({
            type: "SET_FLASH_MESSAGE",
            status: true,
            title: "Request has been sent!",
            msg: "Please check your email.",
            show: true,
          });
        })
        .catch((err) => {
          dispatch({
            type: "SET_FLASH_MESSAGE",
            status: false,
            title: "Something went wrong!",
            msg: err.response.data.message,
            show: true,
          });
        });

      setProgressValue(60);
    }
  };
  return (
    <AuthLayout hideBackButton={true}>
      <div className="d-flex justify-content-center px-24 px-0">
        <div className="auth-wrapper w-full mt-66 md-mt-132">
          <div className="w-full">
            <h4 className=" text-center">Forgot Password</h4>
            <p className="mt-8 mb-32 lg-position-relative text-center">
              Submit your email address and we will send recovery password to
              your email
            </p>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnBlur={false}
            >
              <Form>
                <div className="mb-40 text-start">
                  <FormikControl
                    control="input"
                    name="email"
                    type="text"
                    icon={<i className="bi bi-envelope text-neutral-400"></i>}
                    label="Email Address"
                    labelClassName="font-xs-bold"
                    placeholder="Enter your email"
                    autoFocus
                  />
                </div>
                <div className="d-flex gap-3 mb-24">
                  <button
                    type={progressValue > 0 ? "button" : "submit"}
                    className={`${
                      progressValue > 0 ? "btn-disable" : "btn-primary"
                    } w-p-100 border col text-neutral-700 btn-rounded`}
                  >
                    Reset Password{" "}
                    {progressValue > 0 ? `(${progressValue})` : ""}
                  </button>
                </div>
                <div className="d-flex align-items-center">
                  <div className="rectangle w-full"></div>
                  <span className="px-2">or&nbsp;try</span>
                  <div className="rectangle w-full"></div>
                </div>
                <div className="d-flex gap-3 mt-24">
                  <Link
                    to="/login"
                    className="btn-outline text-center border col text-neutral-700 btn-rounded"
                  >
                    Log in
                  </Link>
                </div>
                <GlobalToast />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default connect()(ForgotPasswordOrg);
