import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../../atoms";
import CloseIcon from "@mui/icons-material/Close";
const ModalRedeemStudent = (props) => {
  return (
    <Modal
      className="radius-16 postition-relative bg-danger max-w-480   modal-custom bg-white"
      style={{ top: "-70px" }}
      id={props.id}
    >
      <div className="pt-16 pb-32 px-32">
        <div className="d-flex justify-content-end ">
          <button
            type="button"
            className="text-end  btn-secondary h-32 w-32 radius-p-100 d-flex justify-content-center align-items-center "
            data-bs-dismiss="modal"
          >
            <CloseIcon className="fs-14" />
          </button>
        </div>
        <p>Sorry Atlazen,</p>
        <h4>Our system has detected you as school member.</h4>
        <p className="font-sm text-neutral-300 mt-16">
          We can’t add your new book to this account. You can "back" or "login
          with public account" to access this book.
        </p>
        <div className="mt-40">
          <button
            className="btn-primary w-full font-normal text-center"
            data-bs-dismiss="modal"
          >
            Back
          </button>
        </div>
        <Link to="/logout">
          <p className="text-neutral-500 text-center mt-24 hover-text-primary-400">
            Login with public account
          </p>
        </Link>
      </div>
    </Modal>
  );
};

export default ModalRedeemStudent;
