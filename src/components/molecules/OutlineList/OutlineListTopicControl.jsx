import React, { useState } from "react";
import { GET, defConfig } from "../../../config/RestAPI";
const OutlineListTopicControl = (props) => {
  const { classId } = props;
  const [data, setData] = useState(props.data);
  const [hasRequestSubtopic, setHasRequestSubtopic] = useState(false);
  const [isLoadingSubtopic, setIsLoadingSubtopic] = useState(true);

  const requestChild = (id) => {
    if (!hasRequestSubtopic || data.subtopicRequestStatus === "error") {
      //get subtopic
      setIsLoadingSubtopic(true);
      GET(
        `/client/classrooms/book/subtopic?topicId=${id}&classlistId=${classId}`,
        defConfig()
      )
        .then((r) => {
          let newData = {
            ...data,
            subtopics: r.data,
            subtopicRequestStatus: "success",
          };

          setData(newData);
          setIsLoadingSubtopic(false);
          setHasRequestSubtopic(true);
        })
        .catch((err) => {
          let newData = { ...data, subtopicRequestStatus: "error" };
          setData(newData);
          setIsLoadingSubtopic(false);
          setHasRequestSubtopic(true);
        });
    }
  };
  return (
    <div
      className="ml-28 pt-8 border-start border-secondary-500 "
      key={`subject-`}
    >
      <div className="ml-28 ">oke</div>
    </div>
  );
};

export default OutlineListTopicControl;
