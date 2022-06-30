import React from "react";

const MultipleChoiceModalShow = (props) => {
  const { data } = props;
  const abjads = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="assessments-content-preview  px-40 pb-12 ">
      <div className="col-12 card-container ">
        <div className="card-content">
          <div className="question ">
            <div>
              {data.questions.map((res, ind) => {
                return (
                  <React.Fragment key={ind}>
                    {res.image ? (
                      <div className="text-center">
                        <img src={res.image} alt="" width="100%" />
                      </div>
                    ) : (
                      ""
                    )}

                    <div
                      className={`${ind > 0 ? "mt-16" : "mt-8"}`}
                      id={`questions[${ind}].userAnswer`}
                    >
                      <span>
                        {props.nomor}. {res.question}
                      </span>
                      {res.options.map((r, i) => {
                        let checked = false;
                        if (res.userAnswer.find((f) => f === r.text)) {
                          checked = true;
                        }

                        return (
                          <div
                            className={`my-8 d-flex  ml-12 ${
                              (checked && r.isAnswer) ||
                              (!checked && r.isAnswer)
                                ? "font-medium text-success-600"
                                : ""
                            }  
                            ${
                              checked &&
                              !r.isAnswer &&
                              "font-medium text-danger-500"
                            }  
                              
                              `}
                            key={i}
                          >
                            <div
                              className={` ${
                                checked && "border border-primary-500"
                              }  align-items-center text-center rounded ps-2 mr-16`}
                            >
                              <div className="mr-3 text-center">
                                {abjads[i]}.
                              </div>
                            </div>
                            {r.text}
                          </div>
                        );
                      })}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceModalShow;
