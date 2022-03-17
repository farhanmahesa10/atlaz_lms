import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalToast } from "../../../../atoms";
import Header from "../../../../Layout/AuthLayout/Header";
import { connect, useDispatch } from "react-redux";

const Register5Org = (props) => {
  const dispatch = useDispatch();
  const [shouldCount, setShouldCount] = useState(true);
  const tempTimer = localStorage.getItem(
    process.env.REACT_APP_BASE_URL + "/register/resend-timer"
  );

  const [progressValue, setProgressValue] = useState(
    tempTimer ? tempTimer : 60
  );
  useEffect(() => {
    if (shouldCount) {
      const interval = setInterval(() => {
        if (progressValue > 0) {
          setProgressValue(progressValue - 1);
          localStorage.setItem(
            process.env.REACT_APP_BASE_URL + "/register/resend-timer",
            progressValue - 1
          );
        } else {
          setShouldCount(false);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [shouldCount, progressValue]);

  const handleResend = () => {
    const apiUrl = process.env.REACT_APP_BASE_API_URL + "/auth/resend";
    const email = localStorage.getItem(
      process.env.REACT_APP_BASE_URL + "/register/email"
    );
    if (progressValue <= 0) {
      axios
        .post(apiUrl, { email })
        .then((r) => {
          dispatch({
            type: "SET_FLASH_MESSAGE",
            status: true,
            title: "Success resend activation",
            msg: "Please check your email",
            show: true,
          });
        })
        .catch((err) => {
          dispatch({
            type: "SET_FLASH_MESSAGE",
            status: false,
            title: "Error resend activation",
            msg: "Please try again later",
            show: true,
          });
        });

      localStorage.setItem(
        process.env.REACT_APP_BASE_URL + "/register/resend-timer",
        60
      );
      setShouldCount(true);
      setProgressValue(60);
    }
  };

  return (
    <>
      <GlobalToast />
      <div className="h-screen d-flex justify-content-between align-items-center flex-column">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-500 text-center">
          <div className="text-center mb-52">
            <img src="/images/gmail.png" alt="" />
          </div>
          <h2 className="mb-8">Please check your email</h2>
          <div className="d-flex align-items-center  align-items">
            <div>
              <p className="mb-4">
                Please check your email to confirm the registration email we
                sent. Haven’t received an email? Please check your spam folder
                to make sure it’s not in there.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pb-64">
          <span
            to=""
            className=" text-black cursor-pointer"
            onClick={handleResend}
          >
            Resend confirmation password{" "}
            {shouldCount ? `(${progressValue})` : ""}
          </span>
        </div>
      </div>
    </>
  );
};

export default connect()(Register5Org);
