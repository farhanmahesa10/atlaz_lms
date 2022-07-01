// import { Modal } from "@material-ui/core";
import React from "react";
import { Divider, Modal } from "../../../atoms";
import { useSelector, connect } from "react-redux";
const ModalConfirmSubmitAssessment = (props) => {
  const { data } = useSelector((state) => state.modalData);
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
            <button
              type="button"
              className={`btn font-normal ${
                data.isLoading ? "btn-disable" : "btn-primary "
              }w-full `}
              data-bs-dismiss="modal"
              onClick={() => {
                if (!data.isLoading) {
                  props.onSubmit();
                }
              }}
            >
              {data.isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default connect()(ModalConfirmSubmitAssessment);
