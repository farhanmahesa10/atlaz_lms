import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OutlineListAccordion from "./OutlineListAccordion";
const OutlineListSubtopicControl = (props) => {
  const { classId, subjectId, lessonId, topicId } = props;
  const [data, setData] = useState(props.data);
  const [expand, setExpand] = useState(false);
  const params = useParams();
  useEffect(() => {
    if (data._id === params.id) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }, [params.id]);

  let linkId = `${classId}/${subjectId}/${lessonId}/${topicId}/${data._id}`;
  let link = data.isAssessment
    ? `/classroom/welcome-assessment/${linkId}`
    : `/classroom/content-practice/${linkId}`;
  return (
    <>
      {data && (
        <OutlineListAccordion
          title={data.name}
          type="SUBTOPIC"
          requestId={data._id}
          isLocked={data.isLocked}
          redirectTo={link}
          defaultShow={expand}
        />
      )}
    </>
  );
};

export default OutlineListSubtopicControl;
