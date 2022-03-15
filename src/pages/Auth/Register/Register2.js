import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import { FormikControl } from "../../../components/atoms";
import { Form, Formik } from "formik";
import * as Yup from "yup";
const Register2 = () => {
  let tempFullName = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/fullName"
  );
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    fullName: tempFullName ? tempFullName : "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(
      "This field is required, Don't leave it empty!"
    ),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    setIsLoading(false);
    localStorage.setItem(
      process.env.REACT_APP_BASE_URL + "/register/fullName",
      values.fullName
    );
    setIsLoading(true);
    navigate("/register-step-3");
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={2}
      title="Let's set this up for your account"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
      >
        <Form>
          <div className="auth-content">
            <div className="mb-48 text-start">
              <FormikControl
                control="input"
                name="fullName"
                type="text"
                icon={<i className="bi bi-person text-neutral-400"></i>}
                label="Full name"
                labelClassName="font-xs-bold"
                placeholder="Enter your email"
                autoFocus
              />
            </div>
            <div className="d-grid grid-cols-2 gap-3  ">
              <Link to="/register">
                <button
                  type="button"
                  className="text-center btn-outline w-full"
                >
                  Back
                </button>
              </Link>
              <button
                type={isLoading ? "button" : "submit"}
                className={`${isLoading ? "btn-disable" : "btn-primary"} `}
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

export default Register2;
