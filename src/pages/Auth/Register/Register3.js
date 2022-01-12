import React, { useState } from "react";
import { InputNumber } from "../../../components/Form";
import RegisterLayout from "../../../components/Layout/RegisterLayout";
import { useNavigate, Link } from "react-router-dom";
const Register3 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [allowNext, setAllowNext] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allowNext) navigate("/register-step-4");
  };
  return (
    <RegisterLayout
      totalProgress={4}
      activeProgress={3}
      title="Let's set this up for your account"
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          <div className="mb-5 text-start">
            <InputNumber
              label="Phone number"
              type="text"
              required={true}
              placeholder="Enter your number"
              icon={"+62"}
              className="mb-4"
              onChange={(val) => setPhoneNumber(val)}
              onError={(err) => {
                err ? setAllowNext(false) : setAllowNext(true);
              }}
            />
          </div>
          <div className="d-flex gap-3 mb-5">
            <Link
              to="/register-step-2"
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
    </RegisterLayout>
  );
};

export default Register3;
