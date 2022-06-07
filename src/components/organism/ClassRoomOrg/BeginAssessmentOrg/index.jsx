import React from "react";
import { ProgressNavbar } from "../../../molecules";
import { useBeginAssessment } from "../../../../services";
import { Form, Formik } from "formik";
import MainFooter from "../../../Layout/Mainlayout/MainFooter";
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
  } = useBeginAssessment();

  return (
    <div className=" ">
      <ProgressNavbar
        progressSetup={filledQuestions}
        subTopicData={subTopicData}
        filledQuestions={filledQuestions}
        scrollToSection={scrollToSection}
        redirectLink={redirectLink}
      />
      <div className="d-flex justify-content-center w-full bg-secondary-100 ">
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formik) => (
            <Form>
              <div className="max-w-888 mt-200 px-24 md-px-48">
                <div
                  className=" w-full radius-8 bg-white"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
                >
                  <div className="col-12  preview-block ">
                    {isLoading
                      ? "Loading..."
                      : initialValues.map((r, i) => {
                          return callBlock(r, i, formik);
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
  );
};

export default BeginAssessmentOrg;
