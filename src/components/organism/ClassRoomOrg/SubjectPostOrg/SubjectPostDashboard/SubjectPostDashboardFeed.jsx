import React from "react";
import { ModalImage, PostFeedCard } from "../../../../molecules";

const SubjectPostDashboardFeed = (props) => {
  const { data } = props;

  return (
    <>
      <ModalImage id="postImage" />
      {data.posts.map((r, i) => {
        return (
          <div className={`mt-24 ${i < 1 && "md-mt-0"}`} key={i}>
            <PostFeedCard data={r} />
          </div>
        );
      })}
    </>
  );
};

export default SubjectPostDashboardFeed;
