import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputEmail, GoogleButton } from "../../../components/Form";
import { Link } from "react-router-dom";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
const Register1 = () => {
  const [email, setEmail] = useState("");
  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allowNext) navigate("/register-step-2");
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={1}
      title="Sign up to get started"
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className=" ">
          <div className="mb-3">
            <GoogleButton label="Register" />
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="rectangle"></div>
            <span className="px-2">or</span>
            <div className="rectangle"></div>
          </div>

          <div className="mb-5 text-start">
            <InputEmail
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              icon={<i className="bi bi-envelope"></i>}
              className="mb-4"
              onChange={(val) => {
                setEmail(val);
              }}
              onError={(val) => {
                val ? setAllowNext(false) : setAllowNext(true);
              }}
            />
          </div>
          <div className="d-flex gap-3 mb-5 ">
            <button className="btn btn-white border col btn-rounded">
              Back
            </button>
            <button
              type={`${allowNext ? "submit" : "button"}`}
              className={`border  col btn-rounded  ${
                allowNext ? "bg-warning" : "bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
          <div className="" style={{ paddingTop: "60px" }}>
            <small>
              Already have account?
              <Link to="/login" className={`text-warning text-decoration-none`}>
                <br />
                Log in
              </Link>
            </small>
          </div>
        </div>
      </form>
    </RegisterLayout>
  );
};

export default Register1;
