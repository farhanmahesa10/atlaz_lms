import React from "react";
import { BookContentLessonControl } from "../../../molecules";
import Skeleton from "react-loading-skeleton";
const LearningBookContent = (props) => {
  const { data, classId, isLoading, subjectId } = props;

  if (isLoading) {
    return (
      <>
        <Skeleton height="80px" width="100%" />
        <Skeleton height="80px" width="100%" />
      </>
    );
  }

  return (
    <>
      {data.map((r, i) => {
        return (
          <div key={i} className="mb-8">
            <BookContentLessonControl
              data={r}
              id={i}
              key={i}
              classId={classId}
              subjectId={subjectId}
            />
          </div>
        );
      })}
    </>
  );
};

export default LearningBookContent;
