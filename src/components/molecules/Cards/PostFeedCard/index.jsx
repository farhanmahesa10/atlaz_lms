import { Form, Formik } from "formik";
import React from "react";
import { Divider, FormikControl, ModalTrigger } from "../../../atoms";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AssessmentBanner } from "../../../../assets/images";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import PostCommentCard from "../PostCommentCard";
import moment from "moment";
import PersonIcon from "@mui/icons-material/Person";
const PostFeedCard = (props) => {
  const { data } = props;

  const showMoreComment = () => {};

  return (
    <div
      className={` bg-white p-24 radius-8 border border-secondary-500`}
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="h-40 w-40 xl-h-48 xl-w-48 radius-p-100 ">
            {data.user.avatar ? (
              <img
                src={data.user.avatar}
                alt=""
                className="w-full h-full radius-p-100"
              />
            ) : (
              <PersonIcon className="w-full h-full radius-p-100 bg-secondary-200 p-8" />
            )}
          </div>
          <div className="ml-11">
            <p className="font-sm-bold xl-font-bold">{data.user.name}</p>
            <p className="text-neutral-300 font-xs">
              {moment(data.createdAt).format("D MMMM YYYY ")} at
              {moment(data.createdAt).format(" H:m A")}
            </p>
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
      {data.isAssessment && <PostedAssessment data={data} />}
      {!data.isAssessment && <Posted data={data} />}
      <Divider lineColor="bg-secondary-500" parentClassName="my-24" />
      <p
        className="font-xs text-neutral-200 mb-40 cursor-pointer hover-text-primary-500 "
        onClick={() => {
          showMoreComment("idPost");
        }}
      >
        View previous comments
      </p>
      <PostCommentCard />
      <PostCommentCard />
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

const Posted = (props) => {
  const { data } = props;
  return (
    <div className="mt-16 ">
      {data.content.image && (
        <div
          className="max-h-158 md-max-h-216 xl-max-h-472 radius-14 mb-16"
          style={{ overflow: "hidden" }}
        >
          <ModalTrigger target="postImage" data={{ image: data.content.image }}>
            <img src={data.content.image} alt="" className="w-full " />
          </ModalTrigger>
        </div>
      )}
      <p className="font-sm xl-font-normal ">
        {data.content.data ? (
          <>
            {data.content.data.length > 170
              ? data.content.data.substring(0, 170) + "... "
              : data.content.data}
            {data.content.data.length > 170 && (
              <span className="font-sm-bold cursor-pointer">Show more</span>
            )}
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const PostedAssessment = (props) => {
  return (
    <div className="mt-16 ">
      <img src={AssessmentBanner} alt="" className="w-full radius-t-8" />
      <p className="font-sm xl-font-normal ">Hello students!</p>
      <p> New assessment incoming, here a summary:</p>
      <div className="d-flex p-8 mb-4 fs-17 d-flex align-items-center font-sm-medium xl-font-medium">
        <AccessTimeIcon className="fs-20 font-xs mr-16 text-neutral-200" />
        <span className="font-xs-medium xl-font-sm-medium">
          11 Apr 2022, 10:00 AM
        </span>
      </div>
      <div className="d-flex p-8 mb-4 fs-17 d-flex align-items-center  ">
        <MenuBookIcon className="fs-20 font-xs mr-16 text-neutral-200" />
        <span className="font-xs-medium xl-font-sm-medium">
          English Play 01
        </span>
      </div>
      <div className="d-flex p-8 mb-4 fs-17 d-flex align-items-center  ">
        <LocalLibraryIcon className="fs-20 font-xs mr-16 text-neutral-200" />
        <span className="font-xs-medium xl-font-sm-medium">
          Unit 1 - Meet My New Friends!
        </span>
      </div>
      <div className="d-flex p-8 fs-17 d-flex align-items-center  ">
        <LabelImportantIcon className="fs-20 font-xs mr-16 text-neutral-200" />
        <span className="font-xs-medium xl-font-sm-medium">Assessment</span>
      </div>
      <div className="mt-16">
        <p className="mb-16">Assessment will splited by:</p>
        <div className="d-flex p-8 mb-4 fs-17 d-flex align-items-center  ">
          <WysiwygIcon className="fs-20 font-xs mr-16 text-neutral-200" />
          <span className="font-xs-medium xl-font-sm-medium">
            11 Apr 2022, 10:00 AM
          </span>
        </div>
        <div className="d-flex p-8 mb-4 fs-17 d-flex align-items-center  ">
          <WysiwygIcon className="fs-20 font-xs mr-16 text-neutral-200" />
          <span className="font-xs-medium xl-font-sm-medium">
            English Play 01
          </span>
        </div>
        <div className="d-flex p-8 mb-4 fs-17 d-flex align-items-center  ">
          <WysiwygIcon className="fs-20 font-xs mr-16 text-neutral-200" />
          <span className="font-xs-medium xl-font-sm-medium">
            Unit 1 - Meet My New Friends!
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostFeedCard;
