import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div className="d-flex flex-column justify-content-between h-screen">
      <div>
        <Header />
      </div>

      <div className="d-sm-flex container justify-content-center align-items-center text-center">
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
