import React, { useEffect, useRef, useState } from "react";

const TextEditor = (props) => {
  const content = props.data.contents;
  const contentRef = useRef();
  const createMarkup = () => {
    return { __html: JSON.parse(content) };
  };
  useEffect(() => {
    let imgTag = contentRef.current.querySelectorAll("img");
    imgTag.forEach((r) => {
      r.setAttribute("width", "100%");
      r.setAttribute("height", "100%");
      r.classList.add("radius-8");
    });
  });
  return (
    <>
      <div className="col-12 card-container">
        <div
          className="card-content"
          ref={contentRef}
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
      </div>
    </>
  );
};
export default TextEditor;
