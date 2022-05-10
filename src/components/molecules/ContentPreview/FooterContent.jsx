import React, { useEffect, useState } from "react";
import { Spellcheck, EmojiObjectsOutlined, Replay } from "@mui/icons-material";

const FooterContent = (props) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const data = props.data;
  return (
    <div className="row">
        Footer
      {/* {showExplanation ? (
        <div className="bg-primary100 p-16 radius-14 col-12">
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
          <Buttons
            type={`submit`}
            className={` ${
              props.formik.isSubmitting ? " btnDisable" : "btnPrimary"
            } py-8 mr-8 mt-16 btnSmall xs-w-full `}
            control="button"
            btnPrimary
            btnRegular
            btnMoExSmall
            btnDisable={props.formik.isSubmitting}
            disabled={props.formik.isSubmitting}
            name={
              <>
                <Spellcheck />
                <span className="pl-8">
                  {!props.formik.isSubmitting
                    ? props.btnSubmitText
                      ? props.btnSubmitText
                      : " Submit & Check"
                    : "Loading..."}
                </span>
              </>
            }
          />
        ) : (
          <>
            <span>
            </span>
            <Buttons
              type="button"
              className="btnOutline py-8 mr-8 mt-16 btnSmall xs-w-full"
              control="button"
              onClick={() => {
                props.onRetry();
                setShowExplanation(false);
              }}
              name={
                <>
                  <Replay />
                  <span className="pl-8"> Retry</span>
                </>
              }
            />

            <Buttons
              type="button"
              className={`btnOutline py-8 mr-8 mt-16 btnSmall xs-w-full`}
              control="button"
              onClick={() => setShowExplanation(true)}
              name={
                <>
                  <EmojiObjectsOutlined />
                  <span className="pl-8">Explanation</span>
                </>
              }
            />
          </>
        )}
      </div> */}
    </div>
  );
};

export default FooterContent;
