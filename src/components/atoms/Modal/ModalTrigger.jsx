import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

const ModalTrigger = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      data-bs-toggle="modal"
      data-bs-target={`#${props.target}`}
      className={`cursor-pointer ${props.className}`}
      style={props.style}
      onClick={() => {
        dispatch({
          type: "MODAL_ACTION",
          value: {
            data: props.data,
          },
        });
      }}
    >
      {props.children}
    </div>
  );
};

export default connect()(ModalTrigger);
