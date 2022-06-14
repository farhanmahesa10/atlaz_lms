import React, { useEffect, useRef } from "react";

const BeginAssessmentTextEditor = (props) => {
  const data = props.data.contents;
  const contentRef = useRef();
  const createMarkup = () => {
    return { __html: data };
  };
  useEffect(() => {
    let imgTag = contentRef.current.querySelectorAll("img");
    imgTag.forEach((r) => {
      r.setAttribute("width", "100%");
      r.setAttribute("height", "100%");
      r.classList.add("radius-4");
    });
  });
  return (
    <>
      <div className="">
        <div ref={contentRef} dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </>
  );
};

export default BeginAssessmentTextEditor;
