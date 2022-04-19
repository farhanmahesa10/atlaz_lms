import React from "react";
import { useSubjectPostDashboard } from "../../../../../services";

import SubjectPostDashboardFeed from "./SubjectPostDashboardFeed";
import SubjectPostDashboardSidebar from "./SubjectPostDashboardSidebar";

const SubjectPostDashboard = () => {
  const { sideBarData, feedData, handleCreatePost, handleSubmitComent } =
    useSubjectPostDashboard();

  return (
    <div className="row mx-24 mt-24 gx-0">
      <div className="col-12 col-md-5 col-xl-4 ">
        <SubjectPostDashboardSidebar data={sideBarData} />
      </div>
      <div className="col ">
        <div className="md-pl-16  md-mt-0">
          <SubjectPostDashboardFeed
            data={feedData}
            onSubmitCreatePost={handleCreatePost}
            onSubmitComment={handleSubmitComent}
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectPostDashboard;
