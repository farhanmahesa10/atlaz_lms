import React from "react";
import { ProgressComponent } from "../..";
import { Link } from "react-router-dom";
import Header from "../AuthLayout/Header";
const RegisterLayout = (props) => {
  return (
    <div className=" h-screen w-full">
      <div className="d-sm-none w-full px-28  mt-24 justify-content-center   d-flex ">
        <ProgressComponent
          totalProgress={props.totalProgress}
          activeProgress={props.activeProgress}
          className="w-full"
        />
      </div>
      <Header />

      <div className=" container md-mt-123">
        <div className="d-sm-flex w-full justify-content-center col-12  d-none ">
          <ProgressComponent
            totalProgress={props.totalProgress}
            activeProgress={props.activeProgress}
            className="auth-content-width "
          />
        </div>
        <div className="register-title md-mt-80 md-mb-80 mb-22 mt-66">
          <h4 className=" text-center">{props.title}</h4>
        </div>
        <div className="d-sm-flex w-full   justify-content-center align-items-center text-center ">
          <div className="auth-content-width ">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
