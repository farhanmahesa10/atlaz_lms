import React, { useState } from "react";
import BookContentAccordion from "./BookContentAccordion";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
const BookContentSubtopicControl = (props) => {
  const { subtopicId, classId } = props;
  const [data, setData] = useState(props.data);
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
        redirectTo={`/classroom/preview-content/${subtopicId}`}
        classId={classId}
      />
    </div>
  );
};

export default BookContentSubtopicControl;
