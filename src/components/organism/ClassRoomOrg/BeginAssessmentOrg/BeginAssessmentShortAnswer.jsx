import React from "react";
import { FormikControl } from "../../../atoms";
const BeginAssessmentShortAnswer = (props) => {
  const data = props.data;

  return (
    <div className="assessments-content-preview ">
      <div className="col-12 card-container ">
        <div className="card-content">
          <div className=" ">
            <div className=" ">
              {data.questions.map((r, i) => {
                return (
                  <div
                    key={i}
                    className="mb-3"
                    id={`${props.index}.questions[${i}].userAnswer`}
                  >
                    {r.image ? (
                      <div className="text-center mb-16">
                        <img src={r.image} alt="" width="100%" />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className={`${i > 0 ? "mt-32" : ""} `}>
                      <span>
                        {props.nomor}. {r.question}
                      </span>
                      <div className="ml-16 mt-8">
                        <FormikControl
                          control="input"
                          type="text"
                          autoComplete="off"
                          name={`${props.index}.questions[${i}].userAnswer`}
                          onInput={(e) => {
                            // proces disini tinggal kirim set is field dan name nya mau diisi tru atau false
                            let setIsfilled = false;
                            if (e.target.value.length > 0) {
                              setIsfilled = true;
                            }
                            props.onSendProgress(
                              `${props.index}.questions[${i}].userAnswer`,
                              setIsfilled
                            );
                          }}
                          placeholder="Enter the answer here"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginAssessmentShortAnswer;
