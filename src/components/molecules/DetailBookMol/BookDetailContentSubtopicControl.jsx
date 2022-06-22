import React, { useState } from "react";
import BookDetailContentAccordion from "./BookDetailContentAccordion";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
const BookDetailContentSubtopicControl = (props) => {
  const { subtopicId, subjectId, lessonId, topicId } = props;
  const [data, setData] = useState(props.data);
  let link = `/my-book-list/practice/${subjectId}/${lessonId}/${topicId}/${subtopicId}`;

  return (
    <div className="pt-8">
      <BookDetailContentAccordion
        icon={<WysiwygIcon />}
        type="SUBTOPIC"
        badgeColor="success-600"
        // badgeText={data.progress}
        title={data.name}
        isLocked={data.isLocked}
        requestId={data._id}
        parentRedirect
        redirectTo={link}
        // classId={classId}
      />
    </div>
  );
};

export default BookDetailContentSubtopicControl;
