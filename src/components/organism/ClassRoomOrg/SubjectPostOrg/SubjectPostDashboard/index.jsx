import React from "react";
import { useSubjectPostDashboard } from "../../../../../services";

import SubjectPostDashboardFeed from "./SubjectPostDashboardFeed";
import SubjectPostDashboardSidebar from "./SubjectPostDashboardSidebar";
import { GlobalToast } from "../../../../atoms";
import { connect } from "react-redux";
const SubjectPostDashboard = () => {
  const {
    sideBarData,
    feedData,
    handleCreatePost,
    isLoadingFeed,
    isLoadingCreateFeed,
    handleDeletedFeed,
    feedShowsCount,
    addFeed,
    totalFeedData,
    isLoadingLoadMore,
  } = useSubjectPostDashboard();

  return (
    <>
      <GlobalToast />
      <div className="row mx-16 md-mx-48 mt-24 gx-0">
        <div className="col-12 col-md-5 col-xl-4 ">
          <SubjectPostDashboardSidebar data={sideBarData} />
        </div>
        <div className="col ">
          <div className="md-pl-16  md-mt-0">
            <SubjectPostDashboardFeed
              data={feedData}
              isLoadingCreateFeed={isLoadingCreateFeed}
              isLoading={isLoadingFeed}
              isLoadingLoadMore={isLoadingLoadMore}
              handleDeletedFeed={handleDeletedFeed}
              onSubmitCreatePost={handleCreatePost}
              totalFeedData={totalFeedData}
              feedShowsCount={feedShowsCount}
              onLoadMore={() => {
                addFeed(feedShowsCount + 1, feedShowsCount + 5, false, false);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(SubjectPostDashboard);
