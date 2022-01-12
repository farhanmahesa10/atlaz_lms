import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div>
      <Header hideBackButton={props.hideBackButton} />
      <div className="px-4 ">
        <div className="d-sm-flex justify-content-center text-center px-2">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
