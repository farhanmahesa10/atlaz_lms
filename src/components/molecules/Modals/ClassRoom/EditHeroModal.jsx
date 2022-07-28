import React, { useEffect, useState } from "react";
import { Modal } from "../../../atoms";
import { connect, useSelector } from "react-redux";

import "../modal.scss";
import { Field, Form, Formik } from "formik";

const EditHeroModal = (props) => {
  const { data } = useSelector((state) => state.modalData);
  const [bgData, setBgData] = useState([]);
  useEffect(() => {
    if (data.bgData) {
      setBgData(data.bgData);
    }
  }, [data]);

  return (
    <Formik
      onSubmit={(values) => props.onSubmitChangeBg(values)}
      initialValues={{ bannerId: "" }}
    >
      <Form>
        <Modal
          className="radius-16  max-w-440 max-h-446 modal-custom bg-white"
          id={props.id}
        >
          <div className="px-24 pt-24 pb-16">
            <h5>Class Banner</h5>
            <p className="font-sm">Select your favourite banner</p>
          </div>
          <div
            className="bg-secondary-100 h-288 p-24 hide-scroll-bar"
            style={{ overflow: "scroll" }}
          >
            {bgData.map((r, i) => {
              return (
                <label className="" key={i}>
                  <Field
                    type="radio"
                    name={`bannerId`}
                    value={r._id}
                    className={`radio-custom `}
                  />
                  <div className="custom ">
                    <img
                      src={r.image}
                      alt=""
                      className="w-full h-86 radius-8 mb-16 "
                    />
                  </div>
                </label>
              );
            })}
          </div>
          <div className="h-72 d-flex justify-content-end align-items-center px-24">
            <>
              <button
                className="btn btn-outline mr-16 font-xs"
                type="button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-primary font-xs"
                type="submit"
                data-bs-dismiss="modal"
              >
                Save Change
              </button>
            </>
          </div>
        </Modal>
      </Form>
    </Formik>
  );
};

export default connect()(EditHeroModal);
