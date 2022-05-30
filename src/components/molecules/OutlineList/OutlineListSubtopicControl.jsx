import React, { useState } from "react";
import OutlineListAccordion from "./OutlineListAccordion";
const OutlineListSubtopicControl = (props) => {
  const { classId, subjectId } = props;
  const [data, setData] = useState(props.data);
  return (
    <OutlineListAccordion
      title={data.name}
      type="SUBTOPIC"
      requestId={data._id}
      isLocked={data.isLocked}
      redirectTo={`/classroom/lesson-preview/${classId}/${subjectId}/${data._id}`}
    />
  );
};

export default OutlineListSubtopicControl;
