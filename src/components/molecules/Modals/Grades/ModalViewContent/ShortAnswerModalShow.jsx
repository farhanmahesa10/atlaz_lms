import React from "react";

const ShortAnswerModalShow = (props) => {
  const { data } = props;
  return (
    <div className="px-40 pb-12 ">
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
                <div className=" border border-neutral-100 radius-4 p-8">
                  <p className="font-sm md-font-normal">
                    She have 2 siblings behind her
                  </p>
                </div>
                <p className="text-neutral-200 font-xs md-font-sm">
                  Answer :{" "}
                  <span className="text-success-600"> {r.userAnswer}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShortAnswerModalShow;
