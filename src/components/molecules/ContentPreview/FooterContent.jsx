import React, { useEffect, useState } from "react";
import { Spellcheck, EmojiObjectsOutlined, Replay } from "@mui/icons-material";

const FooterContent = (props) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const data = props.data;
  return (
    <div className="row footer-content">
      {showExplanation ? (
        <div className="bg-primary-100 p-16 radius-14 col-12">
          <p className="tx-body-po mb-8">Explanation</p>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {props.explanation ? props.explanation : "-"}
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="col-12 ">
        {!props.buttonToggle ? (
          <button
            type="submit"
            className={` ${props.isSubmitting ? " btn-disable" : "btn-primary"
              } py-8 mr-8 xs-w-full font-small`} >
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
          <>
            <span>
            </span>
            <button
              type="button"
              className="btn-outline py-8 mr-8 mt-16 btn-small xs-w-full"
              onClick={() => {
                props.onRetry();
                setShowExplanation(false);
              }} >
              {
                <>
                  <Replay />
                  <span className="pl-8"> Retry</span>
                </>
              }
            </button>

            <button
              type="button"
              className="btn-outline py-8 mr-8 mt-16 btn-small xs-w-full"
              onClick={() => setShowExplanation(true)} >
              {
                <>
                  <EmojiObjectsOutlined />
                  <span className="pl-8">Explanation</span>
                </>
              }
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FooterContent;
