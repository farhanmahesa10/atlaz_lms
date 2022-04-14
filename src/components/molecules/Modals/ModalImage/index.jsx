import React from "react";
import { useSelector, connect } from "react-redux";
import { Modal } from "../../../atoms";

const ModalImage = (props) => {
  const { data } = useSelector((state) => state.modalData);
  return (
    <Modal className="radius-16  modal" id={props.id}>
      <div className=" " style={{ maxHeight: "80vh" }}>
        <img
          src={data.image}
          alt=""
          className=" h-full"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    </Modal>
  );
};

export default connect()(ModalImage);
