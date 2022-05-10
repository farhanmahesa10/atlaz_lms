import React, { useState } from "react";
import FormikControl from "../../../atoms/Formik/FormikControl";
import FooterContent from "../FooterContent";
import { Form, Formik } from "formik";
import { Check, Clear } from "@mui/icons-material";

const SingleChoice = (props) => {
  const [buttonToggleFooter, setButtonToggleFooter] = useState(false);
  const [explanation, setExplanation] = useState(
    "isini tempat correction text yang diisi pada saat pembuatan soal.  Second Explanation"
  );
  const [explanationProcess, setexplanationProcess] = useState(false);

  const data = props.data;

  const optionPattern = (options) => {
    let opts = [
      {
        key: "Choose",
        value: "",
      },
    ];
    options.map((r, i) => {
      opts.push({
        key: r.text,
        value: i,
      });
    });
    return opts;
  };

  const patternAnswer = () => {
    let answers = [];
    data.questions.map((r) => {
      answers.push("");
    });
    return { answers };
  };

  const initAnswer = patternAnswer();
  const clearIcon = () => {
    let questionIndex = 0;
    for (let question of data.questions) {
      document
        .querySelector(`.true-${data._id}-${question._id}`)
        .classList.add("d-none");
      document
        .querySelector(`.false-${data._id}-${question._id}`)
        .classList.add("d-none");
      document
        .querySelector(`.correction-${data._id}-${question._id}`)
        .classList.add("d-none");
      document
        .querySelector(`.select-${data._id}-${question._id}`)
        .classList.remove("outline-success");
      document
        .querySelector(`.select-${data._id}-${question._id}`)
        .classList.remove("outline-danger");
      questionIndex++;
    }
  };
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    setButtonToggleFooter(true);
    // console.log(values);

    let questionIndex = 0;
    for (let question of data.questions) {
      if (values.answers[questionIndex] === String(question.answer)) {
        let doc = document.querySelector(`.true-${data._id}-${question._id}`);
        doc.classList.remove("d-none");
        document
          .querySelector(`.select-${data._id}-${question._id}`)
          .classList.add("outline-success");
      } else {
        document
          .querySelector(`.false-${data._id}-${question._id}`)
          .classList.remove("d-none");
        document
          .querySelector(`.correction-${data._id}-${question._id}`)
          .classList.remove("d-none");
        document
          .querySelector(`.select-${data._id}-${question._id}`)
          .classList.add("outline-danger");
      }

      questionIndex++;
    }
  };

  return (
    <>
      <div className="col-12 card-container ">
        <div className="card-content">
          <Formik
            initialValues={initAnswer}
            // validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {(formik) => (
              <Form className="formFormik">
                {data.instruction ? (
                  <p className="tx-header5 mb-16">{data.instruction}</p>
                ) : (
                  ""
                )}
                <table className="table  table-borderless">
                  <thead className=" ">
                    <tr>
                      <th
                        scope="col "
                        className="tx-small-po bg-secondary200 radius-tl-8"
                      >
                        Question
                      </th>
                      <th
                        scope="col "
                        className="tx-small-po bg-secondary200 radius-tr-8"
                      >
                        Answer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.questions.map((r, i) => {
                      return (
                        <tr
                          className="table-content align-items-center "
                          key={i}
                        >
                          <td className="tx-small pt-3 d-flex text-align-center">
                            <span
                              className={`d-none mr-4 true-${data._id}-${r._id}`}
                            >
                              <Check style={{ color: "var(--success600)" }} />
                            </span>
                            <span
                              className={`d-none mr-4 false-${data._id}-${r._id}`}
                            >
                              <Clear style={{ color: "var(--danger500)" }} />
                            </span>
                            {r.question}
                          </td>

                          <td>
                            <FormikControl
                              control="select"
                              name={`answers[${i}]`}
                              addClass={`select-${data._id}-${r._id}`}
                              isExSmall
                              options={optionPattern(r.options)}
                            />
                            <span
                              className={`d-none tx-ex-small mr-4 correction-${data._id}-${r._id}`}
                            >
                              <span className="neutral200">Correction : </span>{" "}
                              {r.options[r.answer].text}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <FooterContent
                  formik={formik}
                  data={data}
                  buttonToggle={buttonToggleFooter}
                  explanation={data.correctionText}
                  onRetry={() => {
                    setButtonToggleFooter(false);
                    clearIcon();
                    formik.resetForm();
                  }}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default SingleChoice;
