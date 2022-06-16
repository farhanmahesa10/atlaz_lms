import React, { useState } from "react";
import { ReactAudioRecorder } from "@sarafhbk/react-audio-recorder";
import { Audio } from "../../../atoms";
import CachedIcon from "@mui/icons-material/Cached";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import StopIcon from "@mui/icons-material/Stop";
const BeginAssessmentRecording = (props) => {
  const { data, index, formik, setFieldValue } = props;
  const [base64Result, setBase64Result] = useState("");
  const [base64UrlStill, setBase64UrlStill] = useState("");
  const [recordStatus, setRecordStatus] = useState("Idle");
  const blobToBase64 = (blobUrl) => {
    fetch(blobUrl).then((r) => {
      r.blob().then((re) => {
        let convertBlob = new Promise((resolve, _) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(re);
        });
        convertBlob.then((res) => {
          setBase64Result(res);
          setFieldValue(`[${index}].userAnswer`, res);
          props.onSendProgress(`[${index}].userAnswer`, true);
        });
      });
    });
  };
  return (
    <>
      <div className=" p-24 radius-16">
        <div className="col-12 ">
          <ReactAudioRecorder
            render={({
              timer,
              stopRecording,
              startRecording,
              resumeRecording,
              pauseRecording,
              audioResult,
              status,
              errorMessage,
            }) => {
              //
              if (audioResult) {
                if (audioResult !== base64UrlStill) {
                  setBase64UrlStill(audioResult); //ini berisi url blob
                  blobToBase64(audioResult); //ini meng konvert ke blob dan base 64
                  setRecordStatus("Recorded");
                }
              }
              return (
                <>
                  <div className={`row gx-0 [${index}].userAnswer`}>
                    <div className="col-12 text-center pt-64 pb-32 border-bottom">
                      {recordStatus === "Recorded" && status != "recording" ? (
                        <Audio src={base64Result} />
                      ) : (
                        <h1>
                          {new Date(timer * 1000).toISOString().substr(14, 5)}
                        </h1>
                      )}
                      <p className="mt-24 neutral300">
                        {status === "recording" ? "Recording" : recordStatus}
                      </p>
                    </div>
                    <div className="col-12 text-center pt-32 pb-24">
                      <div className="d-flex justify-content-center">
                        {status === "recording" ? (
                          <div className="radius-p-100 d-flex align-items-center   cursor-pointer justify-content-center h-64 w-64">
                            <div className="recording-animation d-flex justify-content-center align-items-center bg-secondary-500 radius-p-100">
                              <div
                                className="bg-danger-400 d-flex align-items-center cursor-pointer justify-content-center radius-p-100 text-white "
                                style={{ height: "48px", width: "48px" }}
                                onClick={() => {
                                  stopRecording();
                                  // blobToBase64();
                                }}
                              >
                                <StopIcon />
                              </div>
                            </div>
                          </div>
                        ) : recordStatus === "Recorded" ? (
                          <div className="radius-p-100 bg-secondary-300 d-flex align-items-center cursor-pointer justify-content-center  h-64 w-64">
                            <div
                              className="bg-white  border border-info-500 d-flex align-items-center cursor-pointer justify-content-center radius-p-100 text-white  h-48 w-48"
                              onClick={() => {
                                setRecordStatus("Idle");
                                blobToBase64(null);
                              }}
                            >
                              <CachedIcon className="text-info-500 " />
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="radius-p-100 bg-white d-flex align-items-center cursor-pointer justify-content-center  h-64 w-64">
                              <div
                                className="bg-danger-400 d-flex align-items-center cursor-pointer justify-content-center radius-p-100 text-white h-48 w-48"
                                onClick={() => {
                                  startRecording();
                                }}
                              >
                                <KeyboardVoiceIcon />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <p className="text-center text-neutral-300 mb-32">
                      {status === "recording"
                        ? "Click to stop record"
                        : recordStatus === "Recorded"
                        ? "Click to retry recording "
                        : "Click to record"}
                    </p>
                  </div>
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BeginAssessmentRecording;
