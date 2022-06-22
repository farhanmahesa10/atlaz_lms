import React from "react";
import Skeleton from "react-loading-skeleton";
import { BookDetailContentLessonControl } from "../../../molecules";
const MyBookListDetailContent = (props) => {
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
            <BookDetailContentLessonControl
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

export default MyBookListDetailContent;
