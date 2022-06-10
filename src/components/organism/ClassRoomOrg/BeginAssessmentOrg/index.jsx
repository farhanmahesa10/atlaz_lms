import React from "react";
import { BeginAssessmentLoading, ProgressNavbar } from "../../../molecules";
import { useBeginAssessment } from "../../../../services";
import { Form, Formik } from "formik";
import MainFooter from "../../../Layout/Mainlayout/MainFooter";
import "./Assessments-preview.scss";
const BeginAssessmentOrg = () => {
  const {
    filledQuestions,
    scrollToSection,
    callBlock,
    initialValues,
    onSubmit,
    isLoading,
    subTopicData,
    redirectLink,
    assessmentData,
  } = useBeginAssessment();
  let nomor = 0;
  return (
    <>
      {isLoading ? (
        <BeginAssessmentLoading />
      ) : (
        <div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
          <ProgressNavbar
            assessmentData={assessmentData}
            progressSetup={filledQuestions}
            subTopicData={subTopicData}
            filledQuestions={filledQuestions}
            scrollToSection={scrollToSection}
            redirectLink={redirectLink}
          />
          <div className=" justify-content-center w-full bg-secondary-100 ">
            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {(formik) => (
                <Form>
                  <div
                    className="max-w-888 mt-200  px-24 md-px-48"
                    style={{ margin: "auto" }}
                  >
                    <div
                      className=" w-full max-w-888 radius-8 bg-white"
                      style={{
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <div className="   begin-assessments">
                        {initialValues.map((r, i) => {
                          if (i === 0) {
                            nomor = 0;
                          }
                          if (
                            r.assessmentType.name.toLowerCase() !==
                              "text editor" &&
                            r.assessmentType.name.toLowerCase() !== "divider"
                          ) {
                            nomor += 1;
                          }
                          return callBlock(r, i, formik, nomor);
                        })}
                      </div>
                    </div>
                    <div className="text-end  mt-66 mb-44">
                      <button
                        className="btn-primary font-normal w-160 text-center"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <MainFooter bg="bg-secondary-100" />
        </div>
      )}
    </>
  );
};

export default BeginAssessmentOrg;
