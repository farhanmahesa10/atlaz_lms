import React, { useState } from "react";
import BookContentAccordion from "./BookContentAccordion";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
const BookContentSubtopicControl = (props) => {
  const { subtopicId, classId, subjectId, lessonId, topicId } = props;
  const [data, setData] = useState(props.data);
  let link = data.isAssessment
    ? `/classroom/welcome-assessment/${classId}/${subjectId}/${lessonId}/${topicId}/${subtopicId}`
    : `/classroom/content-practice/${classId}/${subjectId}/${lessonId}/${topicId}/${subtopicId}`;
  return (
    <div className="pt-8">
      <BookContentAccordion
        icon={<WysiwygIcon />}
        type="SUBTOPIC"
        badgeColor="success-600"
        badgeText={data.progress}
        title={data.name}
        isLocked={data.isLocked}
        requestId={data._id}
        parentRedirect
        redirectTo={link}
        classId={classId}
      />
    </div>
  );
};

export default BookContentSubtopicControl;
