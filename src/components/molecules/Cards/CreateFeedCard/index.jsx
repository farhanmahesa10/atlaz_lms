import { Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import { FormikControl } from "../../../atoms";
import CloseIcon from "@mui/icons-material/Close";
import { TextareaAutosize } from "@mui/material";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
const CreateFeedCard = (props) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const textRef = useRef();

  const { isLoading } = props;
  const initialValues = {
    content: {
      data: "",
      image: "",
      fakeImage: "",
    },
    contentType: "feed",
    isAll: false,
  };

  const handleCanSubmit = (formik) => {
    if (formik.values.content.image || formik.values.content.data) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };
  return (
    <div
      className={` bg-white position-relative radius-8 border border-secondary-500 mt-24 md-mt-0 input-area`}
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          props.onSubmit(values, resetForm);
        }}
      >
        {(formik) => {
          setTimeout(() => handleCanSubmit(formik), 0);
          return (
            <Form>
              {formik.values.content.image && (
                <div className="px-24 pt-24">
                  <div
                    className="max-h-158 md-max-h-216 xl-max-h-472 radius-14 "
                    style={{ overflow: "hidden", border: "2px dashed #D4D7DB" }}
                  >
                    <div className="w-full position-relative">
                      <div
                        className="radius-8 h-32 w-32 fs-40 text-white position-absolute cursor-pointer d-flex justify-content-center align-items-center"
                        style={{
                          background: "rgba(0, 0, 0, 0.2)",

                          right: "10px",
                          top: "8px",
                          zIndex: "9",
                        }}
                        onClick={() => {
                          formik.setFieldValue("content.image", "");
                          formik.setFieldValue("content.fakeImage", "");
                        }}
                      >
                        <CloseIcon />
                      </div>
                    </div>
                    <img
                      src={formik.values.content.image}
                      className="w-full "
                    />
                  </div>
                </div>
              )}
              {isLoading ? (
                <div
                  className="position-absolute w-full top-0 bottom-0 radius-8 d-flex align-items-center justify-content-center "
                  style={{ background: "rgba(4,6,8,0.2)" }}
                >
                  <CircularProgress color="inherit" />
                </div>
              ) : (
                ""
              )}

              <div className="d-flex align-items-end  p-24 ">
                <div className="cursor-pointer">
                  <FormikControl
                    control="inputImage"
                    fakeName={"content.fakeImage"}
                    imageName="content.image"
                    component={<ImageIcon />}
                  />
                </div>
                <div className="w-full mx-24 ">
                  <div className="form-input">
                    <div className="input-area">
                      <Field name="content.data">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => (
                          <TextareaAutosize
                            type="text"
                            maxRows={6}
                            className="w-p-100 input-control  max-h-160 font-xs  radius-8 px-8 pt-7"
                            placeholder="Share your knowledge..."
                            style={{ resize: "none" }}
                            {...field}
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
                <button
                  type={canSubmit ? `submit` : "button"}
                  className={`btn btn-${
                    canSubmit ? "primary" : "disable"
                  } d-flex align-items-center `}
                  style={{ whiteSpace: "nowrap" }}
                >
                  <span className="font-xs d-none d-md-block">Send</span>
                  <SendIcon className="fs-18 ml-8" />
                </button>
              </div>
              <div className="p-16 d-flex align-items-center text-neutral-300 bg-secondary-100 radius-b-8">
                <FormikControl
                  control="checkbox"
                  name="isAll"
                  label="Send to the same subject in all classes"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateFeedCard;
