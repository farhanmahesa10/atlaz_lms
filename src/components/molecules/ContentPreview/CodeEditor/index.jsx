import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { GET, defConfig }  from "../../../../config/RestAPI"

const CodeEditor = (props) => {
  const [data, setData] = useState(props.data.content);
  const [globalCss, setGlobalCss] = useState("");
  const contentRef = useRef();

  useEffect(() => {
    let imgTag = contentRef.current.querySelectorAll("img");
    imgTag.forEach((r) => {
      r.setAttribute("width", "100%");
      r.setAttribute("height", "100%");
      r.classList.add("radius-8");
    });

    GET("content/global_styles").then((r) => {
        setGlobalCss(r.content);
    });
  }, []);

  const createMarkup = (json) => {
    return { __html: json };
  };

  return (
    <>
      <div className="col-12 card-container ">
        <div className="card-content">
          <div
            ref={contentRef}
            dangerouslySetInnerHTML={createMarkup(data)}
          ></div>
          <Helmet>
            <style>{`${props.data.style}`}</style>
            <style>{`${globalCss}`}</style>
          </Helmet>
          <Helmet>
            <script>{`${props.data.script}`}</script>
          </Helmet>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
