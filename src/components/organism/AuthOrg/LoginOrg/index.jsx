import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import Pace from "react-pace-progress";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FormikControl, GlobalToast, GoogleButton } from "../../../atoms";
import AuthLayout from "../../../Layout/AuthLayout";
const LoginOrg = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required, Don't leave it empty!")
      .email("Please input the correct format email address!"),
    password: Yup.string().required(
      "This field is required, Don't leave it empty!"
    ),
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginGoogle = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };

  // const callToast = (title, msg, status = false) => {
  //   toast.custom(
  //     <div
  //       className="d-flex gap-2 align-items-center p-16 radius-8 bg-white  position-relative"
  //       style={{
  //         width: "320px",
  //         border: status ? "1px solid #0dcaf0" : "1px solid #DC3545",
  //       }}
  //     >
  //       <i
  //         className={`bi ${
  //           status
  //             ? "bi-check-circle text-success-500"
  //             : "bi-x-circle text-danger-500"
  //         } fs-16 pe-2 `}
  //       ></i>
  //       <div className="text-left " style={{ textAlign: "left" }}>
  //         <strong className="d-block font-bold pb-1 m-0">{title}</strong>
  //         <p className="text-left font-sm d-block m-0 ">{msg}</p>
  //       </div>
  //       <div
  //         className="cursor-pointer flex-fill position-absolute end-0 top-0"
  //         onClick={(e) => {
  //           toast.remove();
  //         }}
  //       >
  //         <p className="p-8 "> &times;</p>
  //       </div>
  //     </div>
  //   );
  // };

  // useEffect(() => {
  //   if (props.flashMessage.show) {
  //     callToast(
  //       props.flashMessage.title,
  //       props.flashMessage.msg,
  //       props.flashMessage.status
  //     );
  //     props.setFlashMassage(false, false, false);
  //   }
  // }, []);

  const onSubmit = (values) => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/auth/login", values)
      .then((res) => {
        localStorage.setItem(
          process.env.REACT_APP_BASE_URL + "/accessToken",
          res.data.accessToken.token
        );
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        // callToast(
        //   "Failed to log in your account",
        //   "Please enter correct email/password.",
        //   false
        // );
      });
  };

  return (
    <>
      {isLoading ? <Pace color="#FDCC6C" height={4} /> : null}
      <AuthLayout>
        <div className="d-flex justify-content-center px-24 px-0">
          <div className="auth-wrapper w-full mt-66 md-mt-132">
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
                      icon={<i className="bi bi-envelope text-neutral-400"></i>}
                      label="Email Address"
                      labelClassName="font-xs-bold"
                      placeholder="Enter your email"
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
                      Remember me
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
                      } w-p-100`}
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

const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFlashMassage: (value) => dispatch({ type: "SET_FLASH_MESSAGE", value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginOrg);
