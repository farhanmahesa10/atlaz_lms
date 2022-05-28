import React, { useState } from "react";
import BookContentAccordion from "./BookContentAccordion";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import BookContentLoadingAccordion from "./BookContentLoadingAccordion";
import { defConfig, GET } from "../../../../config/RestAPI";
import BookContentSubtopicControl from "./BookContentSubtopicControl";
const BookContentTopicControl = (props) => {
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
    <div className="pt-8">
      <BookContentAccordion
        icon={<LabelImportantIcon />}
        badgeColor="success-600"
        badgeText={data.progress}
        title={data.name}
        type="TOPIC"
        isLocked={data.isLocked}
        requestId={data._id}
        onOpened={requestChild}
        withExpand
        classId={classId}
      >
        <div className="ml-20">
          <div className="border-start">
            <div className="ml-20">
              {data.subtopics &&
                data.subtopics.map((res, ind) => {
                  return (
                    <div className="pt-8" key={"subtopic" + res._id}>
                      <BookContentSubtopicControl
                        data={res}
                        subtopicId={res._id}
                      />
                    </div>
                  );
                })}
              <BookContentLoadingAccordion
                isLoading={isLoadingSubtopic}
                status={data.subtopicRequestStatus}
                data={data.subtopics}
              />
            </div>
          </div>
        </div>
      </BookContentAccordion>
    </div>
  );
};

export default BookContentTopicControl;
