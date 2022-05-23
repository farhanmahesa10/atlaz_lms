import { Field, Form, Formik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
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
import { useGlobalFunction } from "../../../../services/";
import ModalAction from "../../Modals/ModalAction";
import CircularProgress from "@mui/material/CircularProgress";
import { defConfig, DESTROY, GET, POST } from "../../../../config/RestAPI";
import { TextareaAutosize } from "@mui/material";
const PostFeedCard = (props) => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingSubmitComment, setIsLoadingSubmitComment] = useState(false);
  const { getUserInfo, copyToClipboard } = useGlobalFunction();

  const [commentProps, setCommentProps] = useState(props.data.comments);
  const data = useMemo(() => props.data, [props.data]);

  const comments = useMemo(() => commentProps, [commentProps]);
  const [commentShowsCount, setCommentShowsCount] = useState(
    props.data.comments.length
  );

  const showMoreComment = (feedId) => {
    console.log("ss", feedId);
    GET(`/client/feed/comment?feedId=${feedId}&from=6&to=7`, defConfig()).then(
      (r) => {
        console.log(r);
        // setCommentShowsCount(r.data.length);
      }
    );
  };

  const handleDeleteFeed = (data) => {
    props.onDeleted(data);
    DESTROY(`/client/feed/${data.id}`, defConfig());
  };

  const handleCreateComment = (values, { resetForm }) => {
    setIsLoadingSubmitComment(true);
    POST("/client/feed/comment", values, defConfig())
      .then((r) => {
        let tempComment = [...comments];

        tempComment.push(r.data);
        setCommentProps(tempComment);
        resetForm();
        setIsLoadingSubmitComment(false);
      })
      .catch((err) => {
        setIsLoadingSubmitComment(false);
      });
  };

  const handleDeletedComment = (id) => {
    let newComment = [...comments];
    let indexCommentForDelete = newComment.findIndex((r) => r._id === id);
    if (indexCommentForDelete >= 0) {
      newComment.splice(indexCommentForDelete, 1);
      setCommentProps(newComment);
    }
  };

  return (
    <div className="position-relative">
      <ModalAction
        id={`deletePostedFeed${data._id}`}
        onSubmit={handleDeleteFeed}
      />
      {isLoadingDelete ? (
        <div
          className="position-absolute w-full top-0 bottom-0 radius-8 d-flex align-items-center justify-content-center "
          style={{ background: "rgba(4,6,8,0.2)" }}
        >
          <CircularProgress color="inherit" />
        </div>
      ) : (
        ""
      )}

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
                onClick={() => {
                  copyToClipboard(data._id);
                }}
              >
                Copy Link
              </li>
              <li>
                <Divider />
              </li>
              {getUserInfo().id === data.user._id && (
                <li className="py-8 cursor-pointer hover-text-primary-500">
                  <ModalTrigger
                    target={`deletePostedFeed${data._id}`}
                    data={{
                      id: data._id,
                      title: "Delete post",
                      message:
                        "Are you sure you want to delete this post? Once deleted, it will be permanently lost.",
                      cancelText: "Cancel",
                      agreeText: "Delete",
                    }}
                  >
                    Delete
                  </ModalTrigger>
                </li>
              )}
            </ul>
          </div>
        </div>
        {data.isAssessment && <PostedAssessment data={data} />}
        {!data.isAssessment && <Posted data={data} />}
        <Divider lineColor="bg-secondary-500" parentClassName="my-24" />
        <p
          className="font-xs text-neutral-200 mb-40 cursor-pointer hover-text-primary-500 "
          onClick={() => {
            showMoreComment(data._id);
          }}
        >
          View previous comments
        </p>
        {comments.map((r, i) => {
          return (
            <PostCommentCard
              key={`comment-${data._id}-${i}`}
              comment={r}
              onDeleteComment={handleDeletedComment}
            />
          );
        })}
        <div>
          <Formik
            initialValues={{ comment: "", feedId: data._id }}
            onSubmit={handleCreateComment}
          >
            {(formik) => (
              <Form>
                <div className="form-input">
                  <div className="input-area">
                    <Field name="comment">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <TextareaAutosize
                          type="text"
                          maxRows={6}
                          className="w-p-100 input-control  max-h-160 font-normal  radius-8 px-8 pt-7"
                          placeholder="Type your comment"
                          style={{ resize: "none" }}
                          {...field}
                        />
                      )}
                    </Field>

                    {isLoadingSubmitComment ? (
                      <span className="mr-16 pt-8">
                        <CircularProgress size="1rem" color="warning" />
                      </span>
                    ) : (
                      <SendIcon
                        className={`fs-20 mr-16 ${
                          formik.getFieldProps("comment").value
                            ? "text-primary-400"
                            : "text-neutral-200"
                        } cursor-pointer hover-text-primary-500`}
                        onClick={() => {
                          if (formik.getFieldProps("comment").value)
                            formik.submitForm();
                        }}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

const Posted = (props) => {
  const [textContent, setTextContent] = useState("");
  const [isShowMore, setIsShowMore] = useState(false);
  const { data } = props;

  const showText = (showMore = false) => {
    if (data.content.data) {
      if (data.content.data.length > 170) {
        if (showMore) {
          setIsShowMore(true);
          setTextContent(data.content.data);
        } else {
          setTextContent(data.content.data.substring(0, 170) + "... ");
          setIsShowMore(false);
        }
      } else {
        setTextContent(data.content.data);
      }
    }
  };

  useEffect(() => {
    showText();
  }, [data]);

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
            <span style={{ whiteSpace: "pre-line" }}>{textContent}</span>
            {data.content.data.length > 170 && !isShowMore ? (
              <span
                className="font-sm-bold cursor-pointer"
                onClick={() => showText(true)}
              >
                Show more
              </span>
            ) : (
              ""
            )}
            {data.content.data.length > 170 && isShowMore ? (
              <span
                className="font-sm-bold cursor-pointer"
                onClick={() => showText(false)}
              >
                &nbsp;Show less
              </span>
            ) : (
              ""
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
