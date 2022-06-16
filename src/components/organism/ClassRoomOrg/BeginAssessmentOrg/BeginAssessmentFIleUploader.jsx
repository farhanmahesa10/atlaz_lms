import React, { useEffect, useRef, useState } from "react";

const BeginAssessmentFIleUploader = (props) => {
  const { data, index, formik, setFieldValue, setManualValidation } = props;
  const inpRef = useRef();
  const [fileName, setFileName] = useState("");
  const [validationFormat, setValidationFormat] = useState(false);
  const [validationSize, setValidationSize] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!validationFormat || !validationSize) {
      setManualValidation(false);
    } else {
      setManualValidation(true);
    }
    console.log(formik);
  }, [validationSize, validationFormat]);

  return (
    <>
      <div className={`[${index}].userAnswer.base64File  p-24`}>
        <div className="card-content ">
          <div
            className="w-full border border-neutral-100 radius-8 h-full d-flex"
            onClick={() => inpRef.current.click()}
          >
            <div className="bg-neutral-100  p-8 radius-tl-8 d-flex justify-content-center align-items-center cursor-pointer hover-bg-neutral-200 radius-bl-8 w-116 mr-16 ">
              Choose file
            </div>
            <div className="d-flex align-items-center justify-content-center ">
              {fileName ? (
                <span>{fileName}</span>
              ) : (
                <span className="text-neutral-200">No file choosen</span>
              )}
            </div>
          </div>
          <input
            className=" d-none"
            type="file"
            ref={inpRef}
            name={`[${index}].userAnswer.fakeFile`}
            onInput={(e) => {
              props.onSendProgress(`[${index}].userAnswer.base64File`, true);
              let file = e.target.files[0];
              if (file) {
                let extension = file.name.split(".").pop();
                if (file.size > 5000000) {
                  setValidationSize(false);
                } else {
                  setValidationSize(true);
                }

                if (
                  extension.toLowerCase() !== "docx" &&
                  extension.toLowerCase() !== "doc" &&
                  extension.toLowerCase() !== "doc"
                ) {
                  setValidationFormat(false);
                } else {
                  setValidationFormat(true);
                }
                setFirstRender(false);
                setFileName(file && file.name);
                let reader = new FileReader();
                reader.onloadend = () => {
                  var result = reader.result;
                  setFieldValue(`[${index}].userAnswer.base64File`, result);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <div className="tx-small neutral200">
            <p
              className={` ${
                !validationFormat && !firstRender && "text-danger-400"
              }`}
            >
              Format file : pdf, doc, docx
            </p>

            <p
              className={` ${
                !validationSize && !firstRender && "text-danger-400"
              }`}
            >
              File size : &lt; 5mb
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeginAssessmentFIleUploader;
