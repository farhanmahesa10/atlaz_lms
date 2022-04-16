import React from "react";
import { connect } from "react-redux";
const Modal = (props) => {
  return (
    <>
      <div
        className="modal fade  "
        id={props.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className=" modal-dialog position-relative  d-flex justify-content-center align-items-center h-full"
          style={{ maxWidth: "100%" }}
        >
          <div className={`modal-content  w-auto ${props.className}`}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(Modal);
