import React, { useEffect, useRef, useState } from "react";
import { Field, Form, Formik } from "formik";
import FooterContent from "../FooterContent";
import Textarea from "react-expanding-textarea";
import { defConfig, POST } from "../../../../config/RestAPI";
import Skeleton from "react-loading-skeleton";

const Essay = (props) => {
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);
  const textareaRef = useRef(null);
  const data = props.data;

  const [firstInitAnswer, setFirstInitAnswer] = useState(false);
  const [initAnswer, setInitAnswer] = useState(null);
  const submitRef = useRef();

  useEffect(() => {
    if (data.userAnswers) {
      setInitAnswer({ answer: data.userAnswers.answer });
    } else {
      setInitAnswer({ answer: "" });
    }
  }, []);
  useEffect(() => {
    if (initAnswer && !firstInitAnswer && data.userAnswers) {
      submitRef.current.click();
      setFirstInitAnswer(true);
    }
  }, [initAnswer]);
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    let req = {
      contentId: data._id,
      contentType: data.contentType.name,
      userAnswers: values,
    };
    POST(`/client/activity/set_practice_student`, req, defConfig())
      .then((r, i) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      })
      .catch((err) => {
        setSubmitting(false);
        setButtonToggleFooter(true);
      });
    setSubmitting(false);
    setButtonToggleFooter(true);
  };

  if (!initAnswer) {
    // handle deleyed formik
    return (
      <div className="p-16">
        <Skeleton width={"100%"} height="200px" />
      </div>
    );
  }

  return (
    <div className="card-container">
      <div className="card-content">
        <Formik
          initialValues={initAnswer}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formik) => (
            <Form className="formFormik ">
              <div className="mb-16">
                {data.instruction ? (
                  <h5 className="mb-16">{data.instruction}</h5>
                ) : (
                  ""
                )}
                <p className="mb-16">{data.contents.annotation}</p>
                {data.contents.image ? (
                  <div className="text-center mb-16">
                    <img src={data.contents.image} alt="" width="100%" />
                  </div>
                ) : (
                  ""
                )}

                <Field name="answer">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <div className="px-24 bg-info-100">
                        <Textarea
                          className="textarea"
                          {...field}
                          id=""
                          cols="7"
                          rows="7"
                          onChange={(e) => {
                            formik.setFieldValue("answer", e.target.value);
                          }}
                        />
                      </div>
                    );
                  }}
                </Field>
              </div>
              <FooterContent
                formik={formik}
                isSubmitting={formik.isSubmitting}
                data={data}
                btnSubmitText={"Submit"}
                buttonToggle={buttonToggleFooter}
                explanation={data.contents.correctionText}
                onRetry={() => {
                  setButtonToggleFooter(false);
                  formik.resetForm();
                  setInitAnswer({ answer: "" });
                }}
                submitRef={submitRef}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Essay;
