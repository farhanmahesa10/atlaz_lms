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
    if (contentRef.current) {
      let ul = contentRef.current.querySelectorAll("ul");
      let ol = contentRef.current.querySelectorAll("ol");

      if (ul) {
        ul.forEach((r) => {
          // r.style.listStyleType = "inherit";
          r.style.paddingLeft = "20px";
        });
      }
      if (ol) {
        ol.forEach((r) => {
          // r.style.listStyleType = "inherit";
          r.style.paddingLeft = "20px";
        });
      }
    }
  });
  return (
    <>
      <div className="assessments-content-preview">
        <div ref={contentRef} dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </>
  );
};

export default BeginAssessmentTextEditor;
