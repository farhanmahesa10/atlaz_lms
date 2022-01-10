import React from "react";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center text-center">
        {props.children}
      </div>
    </div>
  );
};

export default AuthLayout;
