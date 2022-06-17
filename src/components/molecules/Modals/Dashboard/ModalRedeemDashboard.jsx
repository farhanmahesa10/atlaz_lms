import React from "react";
import { FormikControl, Modal } from "../../../atoms";
import { useSelector, connect } from "react-redux";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Form, Formik, useFormik } from "formik";
const ModalRedeemDashboard = (props) => {
  const { data } = useSelector((state) => state.modalData);
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      values = values.code.split(" - ").join("");
      console.log(values);
    },
  });
  return (
    <>
      <Modal
        className="radius-16 postition-relative bg-danger max-w-440   modal-custom bg-white"
        style={{ top: "-70px" }}
        id={props.id}
      >
        <div className=" p-16">
          <div className="mt-40">
            <div className="d-flex justify-content-center">
              <div className="h-40 bg-primary-100 w-40 d-flex align-items-center radius-p-100 justify-content-center">
                <MenuBookIcon className="text-primary-500" />
              </div>
            </div>
            <div className="mt-16 text-center d-flex align-items-center flex-column">
              <h5 className="md-h4">Redeem your new book</h5>
              <p className="font-xs md-font-sm text-neutral-300 w-262 mt-8">
                You can find 12 book codes on the back of the front cover of the
                book.
              </p>
            </div>
            <div className="mt-48">
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex px-16">
                  <div className="mr-8 w-full">
                    <div className="form-input">
                      <div className="input-area  bg-white  ">
                        <input
                          type="text"
                          className="w-full input-control radius-8 py-8 pl-16 font-medium "
                          placeholder="Enter 12 digit of code "
                          name="code"
                          maxLength="18"
                          onKeyUp={(e) => {
                            if (e.key.toLowerCase() !== "backspace") {
                              let result = "";
                              let spliting = e.target.value.split("");
                              let removeMin = spliting.filter(
                                (r) => r !== "-" && r !== " "
                              );
                              removeMin.map((r, i) => {
                                result += r;
                                var a = i + 1;
                                if (a > 0 && a % 4 === 0 && a !== 12) {
                                  result += " - ";
                                }
                              });
                              e.target.value = result.toUpperCase();
                            }
                            formik.setFieldValue("code", e.target.value);
                          }}
                          // value={formik.values.code}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn-secondary font-normal"
                      type="submit"
                      data-bs-dismiss="modal"
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default connect()(ModalRedeemDashboard);
