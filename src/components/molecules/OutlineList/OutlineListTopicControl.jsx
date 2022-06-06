import React, { useEffect, useState } from "react";
import { GET, defConfig } from "../../../config/RestAPI";
import OutlineListAccordion from "./OutlineListAccordion";
import OutlineListSubtopicControl from "./OutlineListSubtopicControl";
import OutlineListLoadingAccordion from "./OutlineListLoadingAccordion";
import { useParams } from "react-router-dom";

const OutlineListTopicControl = (props) => {
  const { classId, subjectId, lessonId } = props;
  const [data, setData] = useState(props.data);
  const [hasRequestSubtopic, setHasRequestSubtopic] = useState(false);
  const [isLoadingSubtopic, setIsLoadingSubtopic] = useState(true);
  const [expand, setExpand] = useState(false);
  const params = useParams();

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
  useEffect(() => {
    if (data._id === params.topicId) {
      requestChild(params.topicId);
      setExpand(true);
    }
  }, []);
  return (
    <OutlineListAccordion
      title={data.name}
      withExpand
      onOpened={requestChild}
      type="TOPIC"
      requestId={data._id}
      isLocked={data.isLocked}
      defaultShow={expand}
    >
      <div
        className="ml-16 pt-8 border-start border-secondary-500 "
        key={`subject-`}
      >
        <div className="ml-24 ">
          {data.subtopics &&
            data.subtopics.map((r, i) => {
              return (
                <div className="pt-8" key={`topic-${r._id}`}>
                  <OutlineListSubtopicControl
                    data={r}
                    classId={classId}
                    subjectId={subjectId}
                    lessonId={lessonId}
                    topicId={data._id}
                  />
                </div>
              );
            })}
          <OutlineListLoadingAccordion
            isLoading={isLoadingSubtopic}
            status={data.subtopicRequestStatus}
            data={data.subtopics}
          />
        </div>
      </div>
    </OutlineListAccordion>
  );
};

export default OutlineListTopicControl;
