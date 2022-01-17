import React from "react";
import { ProgressComponent } from "../..";
import { Link } from "react-router-dom";
const RegisterLayout = (props) => {
  return (
    <div className=" w-full d-flex flex-column align-items-center sm-mt-24  h-screen">
      <div
        className="d-sm-none w-full    justify-content-center px-2  d-flex "
        style={{ paddingTop: "24px", paddingBottom: "26px" }}
      >
        <ProgressComponent
          totalProgress={props.totalProgress}
          activeProgress={props.activeProgress}
          className="w-full"
        />
      </div>
      <div className="row w-full px-2 align-items-center ">
        <div className="col-4 col-md-3 ">
          {!props.hideBackButton ? (
            <div className="d-flex align-items-center h-full">
              <Link
                to="/"
                className="text-neutral-900 text-decoration-none d-flex"
              >
                <i
                  className="bi bi-arrow-left-short d-sm-none text-neutral-500"
                  style={{ fontSize: "30px" }}
                ></i>
                <span className="d-none d-sm-block">
                  <i className="bi bi-arrow-left"></i>&nbsp; Back to Home
                </span>
              </Link>
              &nbsp;
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-5 col-md-6 ">
          <div className=" justify-content-center  ">
            <div className="d-flex justify-content-center ">
              <div>
                <img src="/images/logo.png" className="img-fluid" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container ">
        <div
          className="d-sm-flex w-full justify-content-center col-12  d-none "
          style={{ paddingTop: "123px" }}
        >
          <ProgressComponent
            totalProgress={props.totalProgress}
            activeProgress={props.activeProgress}
            className="auth-content-width "
          />
        </div>
        <div className="register-title">
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
