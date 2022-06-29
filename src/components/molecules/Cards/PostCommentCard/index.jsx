import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CircularProgress from "@mui/material/CircularProgress";
import ModalAction from "../../Modals/ModalAction";
import { ModalTrigger } from "../../../atoms";
import { defConfig, DESTROY } from "../../../../config/RestAPI";
import moment from "moment";
import { useGlobalFunction } from "../../../../services";
const PostCommentCard = (props) => {
  const { comment } = props;
  const { getUserInfo } = useGlobalFunction();
  const handleDeleteComment = () => {
    props.onDeleteComment(comment._id);
    DESTROY(`/client/feed/comment/${comment._id}`, defConfig());
  };

  return (
    <>
      <ModalAction
        id={`deleteCommentFeed-${comment._id}`}
        onSubmit={handleDeleteComment}
      />
      <div className="d-flex mb-32 position-relative">
        <div>
          <div className="w-40 h-40 bg-info-200 d-flex align-items-center justify-content-center radius-p-100 mr-8">
            {comment.user.avatar ? (
              <img
                src={comment.user.avatar}
                alt=""
                className="w-full h-full radius-p-100"
              />
            ) : (
              <PersonIcon className="fs-20 text-info-500" />
            )}
          </div>
        </div>

        <div className="w-full">
          <div className="bg-secondary-100 border border-secondary-500 radius-8 p-8">
            <p className="font-sm-bold xl-font-bold">{comment.user.name}</p>
            <p className="font-sm">{comment.comment}</p>
          </div>
          <div className="mt-4 d-flex align-items-center">
            <p className="font-xs text-neutral-300">
              {moment(comment.createdAt).format("D MMMM YYYY ")} at
              {moment(comment.createdAt).format(" H:m A")}
            </p>
            <FiberManualRecordIcon className="fs-5 text-neutral-100 mx-8" />
            {getUserInfo().id === comment.user._id ||
            getUserInfo().roleData.name.toLowerCase() === "teacher" ? (
              <ModalTrigger
                target={`deleteCommentFeed-${comment._id}`}
                data={{
                  id: comment._id,
                  title: "Delete post",
                  message:
                    "Are you sure you want to delete this post? Once deleted, it will be permanently lost.",
                  cancelText: "Cancel",
                  agreeText: "Delete",
                }}
              >
                <p className="font-xs-bold cursor-pointer hover-text-primary-500 ">
                  Delete
                </p>
              </ModalTrigger>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCommentCard;
