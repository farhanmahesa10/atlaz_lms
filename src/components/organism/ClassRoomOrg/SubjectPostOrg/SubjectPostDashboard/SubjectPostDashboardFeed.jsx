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
    isLoadingLoadMore,
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
            if (res) {
              return (
                <div className={`mt-24 `} key={"feedsCards-" + res._id}>
                  <PostFeedCard data={res} onDeleted={handleDeletedFeed} />
                </div>
              );
            }
          })}
          {feedShowsCount <= totalFeedData && (
            <div className="mt-24 d-flex justify-content-center ">
              <button
                className="btn btn-secondary w-176"
                onClick={() => {
                  if (!isLoadingLoadMore) {
                    props.onLoadMore();
                  }
                }}
              >
                {isLoadingLoadMore ? "Loading...." : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SubjectPostDashboardFeed;
