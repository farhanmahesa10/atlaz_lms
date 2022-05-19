import React from "react";
import { useSubjectPostDashboard } from "../../../../../services";

import SubjectPostDashboardFeed from "./SubjectPostDashboardFeed";
import SubjectPostDashboardSidebar from "./SubjectPostDashboardSidebar";

const SubjectPostDashboard = () => {
  const {
    sideBarData,
    feedData,
    handleCreatePost,
    handleSubmitComent,
    isLoadingFeed,
    isLoadingCreateFeed,
  } = useSubjectPostDashboard();

  return (
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
            onSubmitCreatePost={handleCreatePost}
            onSubmitComment={handleSubmitComent}
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectPostDashboard;
