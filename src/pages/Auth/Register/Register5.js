import React from "react";
const Register5 = () => {
  return (
    <div className="h-screen p-4">
      <div className="row justify-content-center w-full">
        <div className="d-flex justify-content-center ">
          <div>
            <img src="images/Logo.png" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <div
        className="w-full  h-full d-flex justify-content-center align-items-center"
        style={{ marginTop: "-100px" }}
      >
        <div
          className=" bg-gray-50 p-4 rounded shadow-sm"
          style={{ width: "773px" }}
        >
          <h1 className="text-warning mb-0">Please check your email</h1>
          <div className="d-flex align-items-center gap-28 align-items">
            <p>
              Please check your email to confirm the registration email we sent.
              Haven’t received an email? Please check your spam folder to make
              sure it’s not in there
            </p>
            <img src="/images/transparant-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register5;