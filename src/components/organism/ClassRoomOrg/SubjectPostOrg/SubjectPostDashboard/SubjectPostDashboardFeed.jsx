import React from "react";
import {
  CreateFeedCard,
  DashboardFeedLoading,
  ModalImage,
  PostFeedCard,
} from "../../../../molecules";

const SubjectPostDashboardFeed = (props) => {
  const {
    data,
    isLoading,
    isLoadingCreateFeed,
    handleDeletedFeed,
    feedShowsCount,
    totalFeedData,
  } = props;
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
              <div className={`mt-24 `} key={"feedsCards-" + res._id}>
                <PostFeedCard data={res} onDeleted={handleDeletedFeed} />
              </div>
            );
          })}
          {feedShowsCount < totalFeedData && (
            <div className="mt-24 d-flex justify-content-center ">
              <button
                className="btn btn-secondary w-176"
                onClick={() => props.onLoadMore()}
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SubjectPostDashboardFeed;
