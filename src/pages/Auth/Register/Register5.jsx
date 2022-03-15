import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Layout/AuthLayout/Header";
const Register5 = () => {
  const [shouldCount, setShouldCount] = useState(true);
  const [progressValue, setProgressValue] = useState(30);
  useEffect(() => {
    if (shouldCount) {
      const interval = setInterval(() => {
        if (progressValue > 0) {
          setProgressValue(progressValue - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [shouldCount, progressValue]);

  return (
    <>
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
          <Link to="" className=" text-black ">
            Resend confirmation password {`(${progressValue})`}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register5;
