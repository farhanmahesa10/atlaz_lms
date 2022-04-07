import React, { useState } from "react";
import RegisterLayout from "../../../../Layout/RegisterLayout";
import { useNavigate, Link } from "react-router-dom";
import { FormikControl } from "../../../../atoms";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Register3Org = () => {
  let tempPhoneNumber = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/phoneNumber"
  );
  const [apiValidation, setApiValidation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    phoneNumber: tempPhoneNumber ? tempPhoneNumber : "",
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required(
      "This field is required, Don't leave it empty!"
    ),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/auth/phone", {
        phone: `0${values.phoneNumber}`,
      })
      .then((r) => {
        localStorage.setItem(
          process.env.REACT_APP_BASE_URL + "/register/phoneNumber",
          `${values.phoneNumber}`
        );
        setIsLoading(false);
        navigate("/register-step-4");
      })
      .catch((err) => {
        setApiValidation(err.response.data.message);
        setIsLoading(false);
      });
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={3}
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
                coverClassName="h-40"
                name="phoneNumber"
                type="number"
                icon={<span className=" text-neutral-400">+62</span>}
                label="Phone number"
                labelClassName="font-xs-bold"
                placeholder="Enter your phone number"
                autoFocus
              />
              <span className="text-danger-500">{apiValidation}</span>
            </div>
            <div className="d-grid grid-cols-2 gap-3  ">
              <Link to="/register-step-2" className="  ">
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

export default Register3Org;
