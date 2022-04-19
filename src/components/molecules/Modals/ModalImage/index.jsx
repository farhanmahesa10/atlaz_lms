import React from "react";
import { useSelector, connect } from "react-redux";
import { Modal } from "../../../atoms";
import CloseIcon from "@mui/icons-material/Close";
const ModalImage = (props) => {
  const { data } = useSelector((state) => state.modalData);
  return (
    <Modal className="radius-16  modal-custom " id={props.id}>
      <div style={{ maxHeight: "100%", maxWidth: "100%" }} className="">
        <div className=" text-end p-4 p mr-5">
          <p
            className="radius-8 h-32 w-32 fs-40 text-white position-absolute cursor-pointer d-flex justify-content-center align-items-center"
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              top: "15px",
              right: "10px",
              zIndex: "9",
            }}
            data-bs-dismiss="modal"
          >
            <CloseIcon />
          </p>
        </div>
        <img
          src={data !== undefined ? data.image : ""}
          alt=""
          className="radius-16  img-fluid position-relative "
          style={{ maxHeight: "80vh", maxWidth: "100%" }}
        />
      </div>
    </Modal>
  );
};

export default connect()(ModalImage);
