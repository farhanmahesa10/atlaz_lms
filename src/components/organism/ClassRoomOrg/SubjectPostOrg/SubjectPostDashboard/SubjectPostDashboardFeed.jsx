import React from "react";
import {
  CreateFeedCard,
  ModalImage,
  PostFeedCard,
} from "../../../../molecules";

const SubjectPostDashboardFeed = (props) => {
  const { data } = props;

  return (
    <>
      <ModalImage id="postImage" />
      <CreateFeedCard onSubmit={props.onSubmitCreatePost} />
      {data.posts.map((r, i) => {
        return (
          <div className={`mt-24 `} key={i}>
            <PostFeedCard data={r} onSubmitComment={props.onSubmitComment} />
          </div>
        );
      })}
    </>
  );
};

export default SubjectPostDashboardFeed;
