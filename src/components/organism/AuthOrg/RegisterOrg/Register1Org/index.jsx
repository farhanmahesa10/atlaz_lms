import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "../../../../atoms";
import { Link } from "react-router-dom";
import RegisterLayout from "../../../../Layout/RegisterLayout";
import axios from "axios";
import { FormikControl } from "../../../../atoms";
import { Form, Formik } from "formik";
import * as Yup from "yup";
const Register1Org = () => {
  const [apiValidation, setApiValidation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let tempEmail = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/email"
  );
  const initialValues = {
    email: tempEmail ? tempEmail : "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required, Don't leave it empty!")
      .email("Please input the correct format email address!"),
  });

  const navigate = useNavigate();
  const loginGoogle = () => {
    window.open(process.env.REACT_APP_GOOGLE_AUTH_PAGE_URL, "_self");
  };

  const onSubmit = (values) => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/auth/email", values)
      .then((r) => {
        localStorage.setItem(
          process.env.REACT_APP_BASE_URL + "/register/email",
          values.email
        );
        setIsLoading(false);
        navigate("/register-step-2");
      })
      .catch((err) => {
        setApiValidation(err.response.data.message);
        setIsLoading(false);
      });
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={1}
      title="Sign up to get started"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
      >
        <Form>
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
              <FormikControl
                control="input"
                coverClassName="h-40"
                name="email"
                type="text"
                icon={<i className="bi bi-envelope text-neutral-400"></i>}
                label="Email Address"
                labelClassName="font-xs-bold"
                placeholder="Enter your email"
                autoFocus
                onInput={() => {
                  if (apiValidation) {
                    setApiValidation("");
                  }
                }}
              />
              <span className="text-danger-500">{apiValidation}</span>
            </div>
            <div className="">
              <button
                type={isLoading ? "button" : "submit"}
                className={`${
                  isLoading ? "btn-disable" : "btn-primary"
                } w-p-100 border col text-neutral-700 btn-rounded`}
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      </Formik>
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

export default Register1Org;
