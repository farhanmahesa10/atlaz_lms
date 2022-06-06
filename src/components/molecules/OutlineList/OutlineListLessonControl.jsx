import React, { useEffect, useState } from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import OutlineListAccordion from "./OutlineListAccordion";
import OutlineListTopicControl from "./OutlineListTopicControl";
import OutlineListLoadingAccordion from "./OutlineListLoadingAccordion";
import { GET, defConfig } from "../../../config/RestAPI";
import { useParams } from "react-router-dom";
const OutlineListLessonControl = (props) => {
  const { classId, subjectId } = props;
  const [data, setData] = useState(props.data);

  const [hasRequestTopic, setHasRequestTopic] = useState(false);
  const [isLoadingTopic, setIsLoadingTopic] = useState(true);
  const [expand, setExpand] = useState(false);

  const params = useParams();
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

  useEffect(() => {
    if (data._id === params.lessonId) {
      requestChild(params.lessonId);
      setExpand(true);
    }
  }, []);
  return (
    <div className="pb-16">
      <OutlineListAccordion
        title={data.name}
        icon={<LocalLibraryIcon />}
        withExpand
        onOpened={requestChild}
        type="LESSON"
        requestId={data._id}
        isLocked={data.isLocked}
        defaultShow={expand}
      >
        <div
          className="ml-28 pt-8 border-start border-secondary-500 "
          key={`subject-`}
        >
          <div className="ml-28 ">
            {data.topics &&
              data.topics.map((r, i) => {
                return (
                  <div className="pt-8" key={`topic-${r._id}`}>
                    <OutlineListTopicControl
                      data={r}
                      classId={classId}
                      subjectId={subjectId}
                      lessonId={data._id}
                    />
                  </div>
                );
              })}
            <OutlineListLoadingAccordion
              isLoading={isLoadingTopic}
              status={data.topicRequestStatus}
              data={data.topics}
            />
          </div>
        </div>
      </OutlineListAccordion>
    </div>
  );
};

export default OutlineListLessonControl;
