import React, { useState } from "react";
import _ from "lodash";
import { defConfig, GET } from "../../../config/RestAPI";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BookDetailContentAccordion from "./BookDetailContentAccordion";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookDetailContentTopicControl from "./BookDetailContentTopicControl";
import BookDetailContentLoadingAccordion from "./BookDetailContentLoadingAccordion";
const BookDetailContentLessonControl = (props) => {
  const { id, subjectId } = props;
  const [data, setData] = useState(props.data);

  const [hasRequestTopic, setHasRequestTopic] = useState(false);
  const [isLoadingTopic, setIsLoadingTopic] = useState(true);

  const requestChild = (id) => {
    if (!hasRequestTopic || data.topicRequestStatus === "error") {
      //get topic
      setIsLoadingTopic(true);
      GET(`/booklist/child?lessonId=${id}`, defConfig())
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
      <BookDetailContentAccordion
        icon={<LocalLibraryIcon />}
        redirectIcon={
          <OpenInNewIcon className="cursor-pointer mr-16 fs-22 text-neutral-500 mt-2" />
        }
        type="LESSON"
        requestId={data._id}
        badgeColor="info-500"
        title={data.name}
        // badgeText={data.progress}
        withExpand
        // redirectTo={`/classroom/lesson-preview/${classId}/${subjectId}/${data._id}`}
        onOpened={requestChild}
        // isLocked={data.isLocked}
        // classId={classId}
      >
        <div className="ml-20">
          <div className="border-start">
            <div className="ml-20">
              {data.topics &&
                data.topics.map((r, i) => {
                  return (
                    <div className="pt-8" key={`topic-${r._id}`}>
                      <BookDetailContentTopicControl
                        data={r}
                        // classId={classId}
                        subjectId={subjectId}
                        lessonId={data._id}
                      />
                    </div>
                  );
                })}

              <BookDetailContentLoadingAccordion
                isLoading={isLoadingTopic}
                status={data.topicRequestStatus}
                data={data.topics}
              />
            </div>
          </div>
        </div>
      </BookDetailContentAccordion>
    </>
  );
};
export default BookDetailContentLessonControl;
