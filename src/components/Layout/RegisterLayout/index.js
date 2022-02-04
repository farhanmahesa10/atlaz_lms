import React from "react";
import { ProgressComponent } from "../..";
import { Link } from "react-router-dom";
import Header from "../AuthLayout/Header";
import AuthLayout from "../AuthLayout";
const RegisterLayout = (props) => {
  return (
    <div className=" h-screen w-full">
      <div className="d-md-none w-full px-28  mt-24 justify-content-center   d-flex ">
        <ProgressComponent
          totalProgress={props.totalProgress}
          activeProgress={props.activeProgress}
          className="w-full"
        />
      </div>
      {/* <Header /> */}
      <AuthLayout>
        <div className="d-flex justify-content-center px-24 px-0">
          <div className="auth-wrapper w-full  md-mt-104">
            <ProgressComponent
              totalProgress={props.totalProgress}
              activeProgress={props.activeProgress}
              className=" d-none d-md-flex "
            />
            <div className="  mt-66 mb-32  md-mt-80 md-mb-80">
              <h4 className=" text-center">{props.title}</h4>
            </div>
            <div className="w-full mb-104">{props.children}</div>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default RegisterLayout;
