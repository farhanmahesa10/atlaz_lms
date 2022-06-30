import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
const SingleChoiceModalShow = (props) => {
  const { data } = props;

  return (
    <div className="assessment-single-choice px-40 ">
      {data.questions.map((r, i) => {
        return (
          <React.Fragment key={i}>
            {r.image ? (
              <div className="text-center mb-24">
                <img src={r.image} alt="" width="100%" className="radius-4" />
              </div>
            ) : (
              ""
            )}
            <div className="row gx-0">
              <div className="col-12  mb-16 tx-body-hl">
                {props.nomor}. {r.question}
              </div>
              {r.options.map((res, ind) => {
                return (
                  <React.Fragment key={ind}>
                    <div className=" col-12">
                      <div
                        className={`${
                          r.options.length !== ind + 1 ? "mb-8 " : ""
                        }questions[${i}].userAnswer`}
                      >
                        <label className=" rounded mr-8 w-full">
                          <input
                            type="radio"
                            name={`questions[${i}].userAnswer`}
                            value={`${ind}`}
                            className={`radio-custom `}
                            checked={
                              ind === parseInt(r.userAnswer) ? true : false
                            }
                            readOnly
                          />
                          <div
                            className="custom d-flex justify-content-between align-items-center px-24 py-16 radius-14  border bg-white "
                            style={{ cursor: "context-menu" }}
                          >
                            <span>{res.text}</span>{" "}
                            <span className="isChecked">
                              <CheckCircleRoundedIcon className="text-success-600" />
                            </span>
                            <span className="noChecked">
                              <RadioButtonUncheckedRoundedIcon className="text-neutral-200" />
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SingleChoiceModalShow;
