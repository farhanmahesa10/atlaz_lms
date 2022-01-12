import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div className=" h-screen">
      <div>
        <Header />
      </div>

      <div className="d-sm-flex  container py-5 justify-content-center align-items-center text-center">
        {props.children}
      </div>
    </div>
  );
};

export default AuthLayout;
