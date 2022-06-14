import React, { useEffect, useState } from "react";
import { Spellcheck, EmojiObjectsOutlined, Replay } from "@mui/icons-material";

const FooterContent = (props) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const { data, submitRef } = props;
  console.log("ex", props.explanation);
  return (
    <div className="row footer-content">
      {showExplanation ? (
        <div className="col-12">
          <div className="bg-primary-100 p-16 radius-14 mb-16">
            <p className="font-bold mb-8">Explanation</p>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {props.explanation ? props.explanation : "-"}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="col-12 ">
        {!props.buttonToggle ? (
          <button
            ref={submitRef}
            type={!props.isSubmitting ? "submit" : "button"}
            className={` ${
              props.isSubmitting ? " btn-disable" : "btn-primary"
            } py-8 mr-8 xs-w-full font-small`}
          >
            {
              <>
                <Spellcheck />
                <span className="pl-8">
                  {!props.isSubmitting
                    ? props.btnSubmitText
                      ? props.btnSubmitText
                      : " Submit & Check"
                    : "Loading..."}
                </span>
              </>
            }
          </button>
        ) : (
          <div className="d-flex">
            <button
              type="button"
              className="btn-outline py-8 mr-8 xs-w-full font-small"
              onClick={() => {
                props.onRetry();
                setShowExplanation(false);
              }}
            >
              {
                <>
                  <Replay />
                  <span className="pl-8"> Retry</span>
                </>
              }
            </button>
            {props.explanation && (
              <button
                type="button"
                className="btn-outline py-8 mr-8 xs-w-full font-small"
                onClick={() => setShowExplanation(true)}
              >
                {
                  <>
                    <EmojiObjectsOutlined />
                    <span className="pl-8">Explanation</span>
                  </>
                }
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterContent;
