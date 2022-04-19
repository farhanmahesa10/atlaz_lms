import { Form, Formik } from "formik";
import React from "react";
import { Divider, FormikControl, ModalTrigger } from "../../../atoms";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const PostFeedCard = (props) => {
  const { data } = props;
  return (
    <div
      className={` bg-white p-24 radius-8 border border-secondary-500`}
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="h-40 w-40 xl-h-48 xl-w-48 radius-p-100">
            <img
              src={data.user.photo}
              alt=""
              className="w-full h-full radius-p-100"
            />
          </div>
          <div className="ml-11">
            <p className="font-sm-bold xl-font-bold">{data.user.name}</p>
            <p className="text-neutral-300 font-xs">{data.time}</p>
          </div>
        </div>
        <div className="btn-group dropstart">
          <div
            type="button"
            className="cursor-pointer dropdown-toggle "
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="true"
          >
            <MoreVertIcon />
          </div>
          <ul className="dropdown-menu bg-white p-8 radius-4">
            <li
              className="pb-8 cursor-pointer hover-text-primary-500 "
              style={{ whiteSpace: "nowrap" }}
            >
              Copy Link
            </li>
            <li>
              <Divider />
            </li>
            <li className="py-8 cursor-pointer hover-text-primary-500">
              Delete
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 ">
        {data.image && (
          <div
            className="max-h-158 md-max-h-216 xl-max-h-472 radius-14 mb-16"
            style={{ overflow: "hidden" }}
          >
            <ModalTrigger target="postImage" data={{ image: data.image }}>
              <img src={data.image} alt="" className="w-full " />
            </ModalTrigger>
          </div>
        )}
        <p className="font-sm xl-font-normal ">
          {data.text.length > 170
            ? data.text.substring(0, 170) + "... "
            : data.text}
          {data.text.length > 170 && (
            <span className="font-sm-bold cursor-pointer">Show more</span>
          )}
        </p>
      </div>
      <Divider lineColor="bg-secondary-500" parentClassName="my-24" />

      <div>
        <Formik initialValues={{ text: "" }} onSubmit={props.onSubmitComment}>
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                name="text"
                type="text"
                placeholder="Type your comment"
                autoComplete="off"
                icon2={
                  <SendIcon
                    className="fs-20 text-neutral-200 cursor-pointer hover-text-primary-500"
                    onClick={() => {
                      formik.submitForm();
                    }}
                  />
                }
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PostFeedCard;
