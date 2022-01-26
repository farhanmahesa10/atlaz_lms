import React from "react";
import { Link } from "react-router-dom";
const Register5 = () => {
  return (
    <div className="h-screen p-4 ">
      <div className="row justify-content-center w-full">
        <div className="d-flex justify-content-center ">
          <div>
            <img src="/images/logo.png" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <div
        className="w-full  h-full d-flex justify-content-center align-items-center"
        style={{ marginTop: "-100px" }}
      >
        <div className="p-4 text-center" style={{ width: "550px" }}>
          <div className="text-center mb-52">
            <img src="/images/gmail.png" alt="" />
          </div>
          <h2 className="mb-8">Please check your email</h2>
          <div className="d-flex align-items-center gap-28 align-items">
            <div>
              <p className="mb-4">
                Please check your email to confirm the registration email we
                sent. Haven’t received an email? Please check your spam folder
                to make sure it’s not in there.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="" className=" text-black ">
          Resend confirmation password (18)
        </Link>
      </div>
    </div>
  );
};

export default Register5;
