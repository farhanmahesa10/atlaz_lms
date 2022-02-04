import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const AuthLayout = (props) => {
  return (
    <div className=" h-screen">
      <Header hideBackButton={props.hideBackButton} />
      <div className="mb-104">{props.children}</div>
    </div>
  );
};

export default AuthLayout;
