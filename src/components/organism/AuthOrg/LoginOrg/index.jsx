import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import Pace from "react-pace-progress";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FormikControl, GlobalToast, GoogleButton } from "../../../atoms";
import AuthLayout from "../../../Layout/AuthLayout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { POST } from "../../../../config/RestAPI";
const LoginOrg = (props) => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required(
      "This field is required, Don't leave it empty!"
    ),

    password: Yup.string().required(
      "This field is required, Don't leave it empty!"
    ),
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginGoogle = () => {
    window.open(process.env.REACT_APP_GOOGLE_AUTH_PAGE_URL, "_self");
  };

  const onSubmit = (values) => {
    setIsLoading(true);

    POST("/auth/login", values)
      .then((r) => {
        if (r.status === "default") {
          navigate("/change-first-password/" + r.data.email);
        } else {
          localStorage.setItem(
            process.env.REACT_APP_BASE_URL + "/accessToken",
            r.accessToken.token
          );
          navigate("/dashboard");
        }
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
    // axios
    //   .post(process.env.REACT_APP_BASE_API_URL + "/auth/login", values)
    //   .then((res) => {
    //     console.log(res);
    //     // localStorage.setItem(
    //     //   process.env.REACT_APP_BASE_URL + "/accessToken",
    //     //   res.data.accessToken.token
    //     // );
    //     // setIsLoading(false);
    //     // navigate("/");
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <>
      {isLoading ? <Pace color="#FDCC6C" height={4} /> : null}
      <AuthLayout>
        <div className="d-flex justify-content-center px-24 px-0">
          <div className="auth-wrapper  w-full mt-66 md-mt-132">
            <div className="w-full">
              <h4 className="text-center">Welcome back, Atlazen!</h4>
              <GoogleButton
                label="Log in"
                className="py-8 w-p-100 mt-32 mb-32"
                onClick={loginGoogle}
              />

              <div className="d-flex align-items-center mb-24 ">
                <div className="rectangle"></div>
                <span className="px-2 text-neutral-300">or</span>
                <div className="rectangle"></div>
              </div>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnBlur={false}
              >
                <Form>
                  <div className=" mb-32">
                    <FormikControl
                      control="input"
                      name="email"
                      type="text"
                      icon={
                        <MailOutlineIcon className="text-neutral-200 fs-20 " />
                      }
                      label="Username / Email"
                      labelClassName="font-xs-bold"
                      placeholder="Enter your username / email"
                      autoFocus
                    />
                  </div>
                  <div className=" mb-32">
                    <FormikControl
                      control="inputPassword"
                      label="Password"
                      name="password"
                      labelClassName="font-xs-bold"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mb-48 d-flex justify-content-between">
                    <div>
                      <input type="checkbox" className=" form-check-input" />{" "}
                      <span className="text-neutral-400">Remember me</span>
                    </div>
                    <div>
                      <Link to="/forgot-password" type="button">
                        Forgot password
                      </Link>
                    </div>
                  </div>
                  <div className="mb-32">
                    <button
                      type={isLoading ? "button" : "submit"}
                      className={`${
                        isLoading ? "btn-disable" : "btn-primary"
                      } w-p-100 font-normal`}
                    >
                      Log in
                    </button>
                  </div>
                  <div className="text-center">
                    New in Atlaz?{" "}
                    <Link to="/register" className="text-primary-400">
                      Sign up now
                    </Link>
                  </div>
                  <GlobalToast />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default connect()(LoginOrg);
