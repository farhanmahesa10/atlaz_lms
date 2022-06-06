import React from "react";
import { connect, useSelector } from "react-redux";
import { Modal } from "../../../atoms";
import CloseIcon from "@mui/icons-material/Close";
const ModalBeginAssessment = (props) => {
  const { data } = useSelector((state) => state.modalData);

  return (
    <Modal
      className="radius-16  max-w-480 h-226 modal-custom  bg-white"
      id={props.id}
    >
      <div className="max-w-480 w-full ">
        <div className="d-flex justify-content-end pt-16 ">
          <div
            className="w-32 h-32 mr-32 cursor-pointer d-flex align-items-center justify-content-center bg-secondary-200 radius-p-100"
            data-bs-dismiss="modal"
          >
            <CloseIcon className="fs-16 " />
          </div>
        </div>
      </div>
      <div className="px-32">
        Hi, atlazen!
        <h4> {data.title}</h4>
        <p className="text-neutral-300 mt-16 font-sm">{data.message}</p>
      </div>
    </Modal>
  );
};

export default connect()(ModalBeginAssessment);
