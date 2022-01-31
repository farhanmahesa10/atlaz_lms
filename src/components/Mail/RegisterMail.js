import React from "react";
import { Link } from "react-router-dom";

const RegisterMail = () => {
  return (
    <div className="d-flex justify-content-center pt-24">
      <div className="bg-secondary-100" style={{ maxWidth: "500px" }}>
        <img src="/images/mail-img.png" alt="" style={{ width: "100%" }} />
        <div className="px-2 m-0 pt-40">
          <img src="/images/logo-icon.png" alt="" />
          <div className="pl-11">
            <p className="m-0 pb-24"> Hi, there!</p>
            <h4 className="m-0 pb-8"> Thanks for joining Atlaz!</h4>
            <p className="m-0 pb-48">
              To get started, please confirm your email address by click the
              button below. If you didn’t register, please ignore this message.
            </p>
            <div className="w-full">
              <Link className="" to="/">
                <button className="btn-primary w-p-100">Confirm email</button>
              </Link>
            </div>

            <div className="border-top mt-50 py-4 text-center">
              © 2022 PT Atlaz Belajar Bahasa. All Right Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMail;
