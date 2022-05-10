import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";

const EmbedHtml5 = (props) => {
  const [data, setData] = useState(props.data);
  const [frameSize, setFrameSize] = useState(60);

  useEffect(() => {
    setFrameSize((data.contents.fileHeight / data.contents.fileWidth) * 100);
  }, []);

  const styleContainer = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    paddingTop: `${frameSize}%`,
  };
  const styleIframe = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  return (
    <>
      <div className="col-12 card-container ">
        <div className="card-content">
          <h5 className="mb-2">{data.contents.title}</h5>
          <Formik onSubmit={onSubmit} initialValues={{ tes: "" }}>
            {(formik) => (
              <Form>
                <div style={styleContainer} className="mb-16">
                  <iframe
                    style={styleIframe}
                    src={data.contents.documentPath}
                  ></iframe>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default EmbedHtml5;
