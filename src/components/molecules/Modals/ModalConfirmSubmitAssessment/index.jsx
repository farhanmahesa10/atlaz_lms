// import { Modal } from "@material-ui/core";
import React from "react";
import { Divider, Modal } from "../../../atoms";
import { useSelector, connect } from "react-redux";
const ModalConfirmSubmitAssessment = (props) => {
  const { data } = useSelector((state) => state.modalData);
  const { isSubmiting } = props;
  console.log(isSubmiting);
  return (
    <Modal
      className="radius-16 postition-relative bg-danger max-w-440   modal-custom bg-white"
      style={{ top: "-70px" }}
      id={props.id}
    >
      <div className=" w-full   ">
        <div className="radius-t-16 pt-16 px-24">
          <h5 className="md-h4">Submit Assessment</h5>
        </div>
        <div className="bg-white p-24">
          You have answered all the answers, make sure you are sure of your
          answers in order to get maximum results.
        </div>

        <div className="  row mx-24 mb-16">
          <div className="col-6">
            <button
              className="btn btn-outline w-full font-normal "
              data-bs-dismiss="modal"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div className="col-6">
            <span
              className={`btn d-flex justify-content-center items-content-center   font-normal ${
                isSubmiting ? "btn-disable" : "btn-primary "
              }  `}
              data-bs-dismiss="modal"
              onClick={() => {
                if (!isSubmiting) {
                  props.onSubmit();
                }
              }}
            >
              {isSubmiting ? "Loading..." : "Submit"}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default connect()(ModalConfirmSubmitAssessment);
