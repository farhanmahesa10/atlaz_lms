import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div className=" h-screen">
      <div className="md-mb-132 mb-66">
        <Header />
      </div>

      <div className="  container d-sm-flex  justify-content-center align-items-center text-center">
        {props.children}
      </div>
    </div>
  );
};

export default AuthLayout;
