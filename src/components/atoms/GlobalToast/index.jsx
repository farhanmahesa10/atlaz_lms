import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { connect, useSelector, useDispatch } from "react-redux";
const GlobalToast = () => {
  const selector = useSelector((state) => state.flashMessage);
  useEffect(() => {
    if (selector.show === true) {
      callToast(
        selector.status ? selector.status : false,
        selector.title,
        selector.msg
      );
    }
  }, [selector]);
  const callToast = (status, title, msg) => {
    toast(
      <div
        className="d-flex gap-2 align-items-center"
        style={{ width: "320px" }}
      >
        <i
          className={`bi ${
            status
              ? "bi-check-circle text-info-400"
              : "bi-x-circle text-danger-400"
          } fs-16 pe-2`}
        ></i>
        <div className="text-left " style={{ textAlign: "left" }}>
          <strong className="d-block pb-1 m-0 font-bold">{title}</strong>
          <p className="text-left d-block m-0 ">{msg}</p>
        </div>
        <div
          className="cursor-pointer flex-fill position-absolute end-0 top-0"
          onClick={(e) => {
            toast.remove();
          }}
        >
          <p className="p-8 "> &times;</p>
        </div>
      </div>,
      {
        duration: 4000,
      }
    );
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: selector.status ? "1px solid #0dcaf0" : "1px solid #DC3545",
            padding: "10px",
            color: "#333333",
          },
          duration: 4000,
        }}
      />
    </>
  );
};

export default connect()(GlobalToast);
