import React from "react";
import { ProgressComponent } from "../..";
const RegisterHeader = (props) => {
  return (
    <div>
      <div className="d-none d-sm-flex">
        <ProgressComponent
          totalProgress={props.totalProgress}
          activeProgress={props.activeProgress}
        />
      </div>
      <div className="auth-title">
        <h6 className="fw-bold text-center">{props.title}</h6>
      </div>
    </div>
  );
};

export default RegisterHeader;
