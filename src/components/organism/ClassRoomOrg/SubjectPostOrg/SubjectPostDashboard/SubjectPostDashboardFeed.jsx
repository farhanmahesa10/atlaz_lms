import React from "react";
import {
  CreateFeedCard,
  DashboardFeedLoading,
  ModalImage,
  PostFeedCard,
} from "../../../../molecules";

const SubjectPostDashboardFeed = (props) => {
  const { data, isLoading, isLoadingCreateFeed } = props;

  return (
    <>
      <ModalImage id="postImage" />
      <CreateFeedCard
        onSubmit={props.onSubmitCreatePost}
        isLoading={isLoadingCreateFeed}
      />
      {isLoading ? (
        <DashboardFeedLoading />
      ) : (
        <>
          {data.map((res, i) => {
            return (
              <div className={`mt-24 `} key={i}>
                <PostFeedCard
                  data={res}
                  onSubmitComment={props.onSubmitComment}
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default SubjectPostDashboardFeed;
