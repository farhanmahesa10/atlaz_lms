import React from "react";
import Skeleton from "react-loading-skeleton";
const SubjectPostHeroLoading = () => {
  return (
    <div className="px-16  md-px-48  pb-16 md-pb-24 xl-pb-32 d-md-flex align-items-center mt-48">
      <div className="h-88 md-h-160 w-88 md-w-160 mr-16 xl-h-176 xl-w-176 radius-8">
        <Skeleton width="100%" height="100%" />
      </div>

      <div>
        <Skeleton width="276px" height="36px" />
        <div className="mt-4 mb-14">
          <Skeleton width="150px" height="24px" />
        </div>
        <Skeleton width="134px" height="40px" />
      </div>
    </div>
  );
};

export default SubjectPostHeroLoading;
