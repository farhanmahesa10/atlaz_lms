import React, { useEffect, useState } from "react";
import { GET, defConfig } from "../../../config/RestAPI";
import OutlineListAccordionMyBookList from "./OutlineListAccordionMyBookList";
import OutlineListSubtopicControlMyBookList from "./OutlineListSubtopicControlMyBookList";
import OutlineListLoadingAccordionMyBookList from "./OutlineListLoadingAccordionMyBookList";
import { useParams } from "react-router-dom";

const OutlineListTopicControlMyBookList = (props) => {
  const { subjectId, lessonId } = props;
  const [data, setData] = useState(props.data);
  const [hasRequestSubtopic, setHasRequestSubtopic] = useState(false);
  const [isLoadingSubtopic, setIsLoadingSubtopic] = useState(true);
  const [expand, setExpand] = useState(false);
  const params = useParams();

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
  useEffect(() => {
    if (data._id === params.topicId) {
      requestChild(params.topicId);
      setExpand(true);
    }
  }, []);
  return (
    <OutlineListAccordionMyBookList
      title={data.name}
      withExpand
      onOpened={requestChild}
      type="TOPIC"
      requestId={data._id}
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
                  <OutlineListSubtopicControlMyBookList
                    data={r}
                    subjectId={subjectId}
                    lessonId={lessonId}
                    topicId={data._id}
                  />
                </div>
              );
            })}
          <OutlineListLoadingAccordionMyBookList
            isLoading={isLoadingSubtopic}
            status={data.subtopicRequestStatus}
            data={data.subtopics}
          />
        </div>
      </div>
    </OutlineListAccordionMyBookList>
  );
};

export default OutlineListTopicControlMyBookList;
