import React, { useState } from "react";
import _ from "lodash";
import { defConfig, GET } from "../../../../config/RestAPI";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BookContentAccordion from "./BookContentAccordion";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookContentTopicControl from "./BookContentTopicControl";
import BookContentLoadingAccordion from "./BookContentLoadingAccordion";
const BookContentLessonControl = (props) => {
  const { id, classId, subjectId } = props;
  const [data, setData] = useState(props.data);

  const [hasRequestTopic, setHasRequestTopic] = useState(false);
  const [isLoadingTopic, setIsLoadingTopic] = useState(true);

  const requestChild = (id) => {
    if (!hasRequestTopic || data.topicRequestStatus === "error") {
      //get topic
      setIsLoadingTopic(true);
      GET(
        `/client/classrooms/book/topic?lessonId=${id}&classlistId=${classId}`,
        defConfig()
      )
        .then((r) => {
          let newData = {
            ...data,
            topics: r.data,
            topicRequestStatus: "success",
          };
          setData(newData);
          setIsLoadingTopic(false);
          setHasRequestTopic(true);
        })
        .catch((err) => {
          let newData = { ...data, topicRequestStatus: "error" };
          setData(newData);
          setIsLoadingTopic(false);
          setHasRequestTopic(true);
        });
    }
  };

  // console.log(data);
  return (
    <>
      <BookContentAccordion
        icon={<LocalLibraryIcon />}
        redirectIcon={
          <OpenInNewIcon className="cursor-pointer mr-16 fs-22 text-neutral-500 mt-2" />
        }
        type="LESSON"
        requestId={data._id}
        badgeColor="info-500"
        title={data.name}
        badgeText={data.progress}
        withExpand
        redirectTo={`/classroom/lesson-preview/${classId}/${subjectId}/${data._id}`}
        onOpened={requestChild}
        isLocked={data.isLocked}
        classId={classId}
      >
        <div className="ml-20">
          <div className="border-start">
            <div className="ml-20">
              {data.topics &&
                data.topics.map((r, i) => {
                  return (
                    <div className="pt-8" key={`topic-${r._id}`}>
                      <BookContentTopicControl
                        data={r}
                        classId={classId}
                        subjectId={subjectId}
                        lessonId={data._id}
                      />
                    </div>
                  );
                })}

              <BookContentLoadingAccordion
                isLoading={isLoadingTopic}
                status={data.topicRequestStatus}
                data={data.topics}
              />
            </div>
          </div>
        </div>
      </BookContentAccordion>
    </>
  );
};
export default BookContentLessonControl;
