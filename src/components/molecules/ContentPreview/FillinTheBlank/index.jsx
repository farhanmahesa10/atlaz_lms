import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import FooterContent from "../FooterContent";

const FillinTheBlank = (props) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState({
    instruction: "",
    template: 1,
    image: "/images/rabbit.png",
    questionAnswerT1: [
      {
        sentence: "Fajrul is ",
        isAnswer: false,
      },
      {
        sentence: "playing",
        isAnswer: true,
        answer: "",
      },
      {
        sentence: "basketball at court, while Farhan is ",
        isAnswer: false,
      },
      {
        sentence: "running",
        isAnswer: true,
        answer: "",
      },
      {
        sentence: " at park. The weather is good today",
        isAnswer: false,
      },
    ],
    questionAnswerT2: [
      {
        col1: "",
        col2: "",
      },
    ],
    corection: "",
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="col-12 card-container mb-40">
        <div className="card-content">
          <div className="text-center mb-2">
            <img src={data.image} alt="" width="100%" />
          </div>
          <div className="align-items-end fill-in-the-blank-question">
            <Formik
              initialValues={data}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              <Form>
                {data.template === 1 ? (
                  <>
                    {data.questionAnswerT1.map((r, i) => {
                      return (
                        <React.Fragment key={i}>
                          {!r.isAnswer ? (
                            r.sentence
                          ) : (
                            <>
                              <Field name={`questionAnswerT1[${i}].sentence`}>
                                {({
                                  field, 
                                  form: { touched, errors }, 
                                  meta,
                                }) => {
                                  return <AutoGrowInput {...field} />;
                                }}
                              </Field>
                            </>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Form>
            </Formik>
          </div>
        </div>

        <FooterContent title="Fill in The Blank" />
      </div>
    </>
  );
};
const AutoGrowInput = ({ value, onChange, name }) => {
  return (
    <div
      className="mx-2"
      style={{
        display: "inline-grid",
        alignItems: "center",
        justifyItems: "start",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 4,
        height: "100%",
      }}
    >
      <input
        style={{
          gridArea: "1 / 1 / 2 / 2",
          width: "100%",
          padding: 0,
          border: "none",
        }}
        name={name}
        value={value}
        onChange={onChange}
        className="fill-in-the-blank-input "
      />
      <span
        style={{
          gridArea: "1 / 1 / 2 / 2",
          visibility: "hidden",
        }}
      >
        {value}
      </span>
    </div>
  );
};
export default FillinTheBlank;
