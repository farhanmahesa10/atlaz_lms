import { Form, Formik } from "formik";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import { FormikControl } from "../../../atoms";
import CloseIcon from "@mui/icons-material/Close";
import { TextareaAutosize } from "@mui/material";
const CreateFeedCard = (props) => {
  const initialValues = {
    id: "",
    text: "",
    image: "",
    fakeImage: "",
    sendToSameSubject: false,
  };

  return (
    <div
      className={` bg-white radius-8 border border-secondary-500 mt-24 md-mt-0 input-area`}
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          props.onSubmit(values);
        }}
      >
        {(formik) => (
          <Form>
            {formik.values.image && (
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
                        formik.setFieldValue("image", "");
                        formik.setFieldValue("fakeImage", "");
                      }}
                    >
                      <CloseIcon />
                    </div>
                  </div>
                  <img src={formik.values.image} className="w-full " />
                </div>
              </div>
            )}
            <div className="d-flex align-items-end  p-24 ">
              <div>
                <FormikControl
                  control="inputImage"
                  fakeName={"fakeImage"}
                  imageName="image"
                  component={<ImageIcon />}
                />
              </div>
              <div className="w-full mx-24 ">
                <div className="form-input">
                  <div className="input-area">
                    <TextareaAutosize
                      type="text"
                      maxRows={6}
                      className="w-p-100 input-control  max-h-160 font-xs  radius-8 px-8 pt-7"
                      placeholder="Share your knowledge..."
                      style={{ resize: "none" }}
                      onChange={(e) => {
                        formik.setFieldValue("text", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary d-flex align-items-center "
                style={{ whiteSpace: "nowrap" }}
              >
                <span className="font-xs d-none d-md-block">Send</span>
                <SendIcon className="fs-18 ml-8" />
              </button>
            </div>
            <div className="p-16 d-flex align-items-center text-neutral-300 bg-secondary-100 radius-b-8">
              <FormikControl
                control="checkbox"
                name="sendToSameSubject"
                label="Send to the same subject in all classes"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateFeedCard;
