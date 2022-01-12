import React from "react";
import { ProgressComponent } from "../..";
const RegisterHeader = (props) => {
  return (
    <div>
      <div>
        <ProgressComponent
          totalProgress={props.totalProgress}
          activeProgress={props.activeProgress}
        />
      </div>
      <div className="auth-title">
        <img src="/images/logo.png" className="d-sm-none mb-4" alt="" />
        <h3 className="fw-bold text-center">{props.title}</h3>
      </div>
    </div>
  );
};

export default RegisterHeader;
