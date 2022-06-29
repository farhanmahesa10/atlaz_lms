import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../../../atoms";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalFunction } from "../../../../services";
const ModalRedeemStudent = (props) => {
  const { getUserInfo } = useGlobalFunction();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_BASE_URL + "/accessToken");
    navigate("/login");
  };
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
        {!getUserInfo() ? (
          <NotLogin />
        ) : (
          <>
            <p>Sorry Atlazen,</p>
            <h4>Our system has detected you as school member.</h4>
            <p className="font-sm text-neutral-300 mt-16">
              We can’t add your new book to this account. You can "back" or
              "login with public account" to access this book.
            </p>
            <div className="mt-40">
              <button
                className="btn-primary w-full font-normal text-center"
                data-bs-dismiss="modal"
              >
                Back
              </button>
            </div>
            <div
              data-bs-dismiss="modal"
              className="cursor-pointer"
              onClick={handleLogout}
            >
              <p className="text-neutral-500 text-center mt-24 hover-text-primary-400">
                Login with public account
              </p>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

const NotLogin = () => {
  return (
    <>
      <p>Hi, there!,</p>
      <h4>Please Log in first to claim your Atlaz book now!</h4>
      <p className="font-sm text-neutral-300 mt-16">
        One more step so you can enjoy your book. Log in to Atlaz using your
        registered email or please log in using your Google account.
      </p>
      <div className="mt-40">
        <Link to="/login" data-bs-dismiss="modal">
          <button
            className="btn-primary w-full font-normal text-center"
            data-bs-dismiss="modal"
          >
            Log in
          </button>
        </Link>
      </div>
      <Link to="/register" data-bs-dismiss="modal">
        <p className="text-neutral-500 text-center mt-24 hover-text-primary-400">
          Sign up
        </p>
      </Link>
    </>
  );
};
export default ModalRedeemStudent;
