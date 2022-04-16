import React from "react";
import { useSelector, connect } from "react-redux";
import { Modal } from "../../../atoms";

const ModalImage = (props) => {
  const { data } = useSelector((state) => state.modalData);
  return (
    <Modal className="radius-16  modal-custom " id={props.id}>
      <div style={{ maxHeight: "100%", maxWidth: "100%" }} className="">
        <img
          src={data.image || ""}
          alt=""
          className="radius-16  img-fluid position-relative "
          style={{ maxHeight: "80vh", maxWidth: "100%" }}
        />
      </div>
    </Modal>
  );
};

export default connect()(ModalImage);
