import React from "react";
import { connect } from "react-redux";
const Modal = (props) => {
  return (
    <>
      <div
        className="modal fade "
        id={props.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered d-flex justify-content-center ">
          <div className={`modal-content w-auto ${props.className}`}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(Modal);
