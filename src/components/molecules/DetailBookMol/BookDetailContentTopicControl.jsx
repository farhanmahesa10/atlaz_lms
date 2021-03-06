import React, { useState } from "react";
import BookDetailContentAccordion from "./BookDetailContentAccordion";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import BookDetailContentLoadingAccordion from "./BookDetailContentLoadingAccordion";

import BookDetailContentSubtopicControl from "./BookDetailContentSubtopicControl";
import { defConfig, GET } from "../../../config/RestAPI";
const BookDetailContentTopicControl = (props) => {
  const { subjectId, lessonId } = props;
  const [data, setData] = useState(props.data);
  const [hasRequestSubtopic, setHasRequestSubtopic] = useState(false);
  const [isLoadingSubtopic, setIsLoadingSubtopic] = useState(true);

  const requestChild = (id) => {
    if (!hasRequestSubtopic || data.subtopicRequestStatus === "error") {
      //get subtopic
      setIsLoadingSubtopic(true);
      GET(`/booklist/child?topicId=${id}`, defConfig())
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
      <BookDetailContentAccordion
        icon={<LabelImportantIcon />}
        badgeColor="success-600"
        // badgeText={data.progress}
        title={data.name}
        type="TOPIC"
        // isLocked={data.isLocked}
        requestId={data._id}
        onOpened={requestChild}
        withExpand
        // classId={classId}
      >
        <div className="ml-20">
          <div className="border-start">
            <div className="ml-20">
              {data.subtopics &&
                data.subtopics.map((res, ind) => {
                  return (
                    <div className="pt-8" key={"subtopic" + res._id}>
                      <BookDetailContentSubtopicControl
                        data={res}
                        subtopicId={res._id}
                        // classId={classId}
                        subjectId={subjectId}
                        lessonId={lessonId}
                        topicId={data._id}
                      />
                    </div>
                  );
                })}
              <BookDetailContentLoadingAccordion
                isLoading={isLoadingSubtopic}
                status={data.subtopicRequestStatus}
                data={data.subtopics}
              />
            </div>
          </div>
        </div>
      </BookDetailContentAccordion>
    </div>
  );
};

export default BookDetailContentTopicControl;
