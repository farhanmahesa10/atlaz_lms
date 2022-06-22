import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OutlineListAccordionMyBookList from "./OutlineListAccordionMyBookList";
const OutlineListSubtopicControlMyBookList = (props) => {
  const { subjectId, lessonId, topicId } = props;
  const [data, setData] = useState(props.data);
  const [expand, setExpand] = useState(false);
  const params = useParams();
  useEffect(() => {
    if (data._id === params.id) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }, [params.id]);

  let linkId = `${subjectId}/${lessonId}/${topicId}/${data._id}`;
  let link = `/my-book-list/practice/${linkId}`;
  return (
    <>
      {data && (
        <OutlineListAccordionMyBookList
          title={data.name}
          type="SUBTOPIC"
          requestId={data._id}
          redirectTo={link}
          defaultShow={expand}
        />
      )}
    </>
  );
};

export default OutlineListSubtopicControlMyBookList;
