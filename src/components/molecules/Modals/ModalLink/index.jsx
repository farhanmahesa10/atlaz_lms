import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Modal } from "../../../atoms";
import { useSelector, connect } from "react-redux";
const ModalLink = (props) => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.modalData);

  return (
    <Modal
      className="radius-16 postition-relative bg-danger max-w-480   modal-custom bg-white"
      style={{ top: "-70px" }}
      id={props.id}
    >
      <div className=" w-full   ">
        <div className="bg-danger-400 radius-t-16 py-16 px-24">
          <h5 className="text-white">
            {data.title ? data.title : "Cancel input"}
          </h5>
        </div>
        <div className="bg-white p-24">
          {data.message
            ? data.message
            : " Continue to cancel input? Once canceled, any changes will be lost."}
        </div>
        <Divider height="h-1" />

        <div className="p-16 text-end">
          <button className="btn btn-outline mr-16" data-bs-dismiss="modal">
            No
          </button>
          <button
            className="btn btn-danger"
            data-bs-dismiss="modal"
            onClick={() => {
              console.log(data.redirect);
              navigate(data.redirect);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default connect()(ModalLink);
