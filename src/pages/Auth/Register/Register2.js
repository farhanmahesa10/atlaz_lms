import React, { useState } from "react";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { InputText, GoogleButton } from "../../../components/Form";
import { ProgressComponent } from "../../../components";
import { useNavigate, Link } from "react-router-dom";
const Register2 = () => {
  const [fullName, setFullName] = useState("");
  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allowNext) navigate("/register-step-3");
  };
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          <div>
            <ProgressComponent totalProgress={4} activeProgress={2} />
          </div>
          <div className="auth-title">
            <p className="fw-bold text-center">
              Let's set this up for your account
            </p>
          </div>

          <div className="mb-5 text-start">
            <InputText
              label="Fullname"
              type="text"
              required={true}
              placeholder="Enter your name"
              icon={<i className="bi bi-person"></i>}
              className="mb-4"
              onChange={(val) => setFullName(val)}
              onError={(err) => {
                err ? setAllowNext(false) : setAllowNext(true);
              }}
            />
          </div>
          <div className="d-flex gap-3 mb-5">
            <Link
              to="/register"
              className="btn btn-white border col btn-rounded"
            >
              Back
            </Link>
            <button
              type={`${allowNext ? "submit" : "button"}`}
              className={`border  col btn-rounded  ${
                allowNext ? "bg-warning" : "bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register2;
