import React, { useRef } from "react";
import imgHeader1 from "../../../../assets/images/detail-preview-bg-1.png";
import imgHeader2 from "../../../../assets/images/detail-preview-bg-2.png";
import {
  BeginAssessmentLoading,
  ModalConfirmSubmitAssessment,
  OutlineList,
  ProgressNavbar,
} from "../../../molecules";
import { useTryAssessment } from "../../../../services";
import { Form, Formik } from "formik";
import MainFooter from "../../../Layout/Mainlayout/MainFooter";
import "./Assessments-preview.scss";
import { GlobalToast, ModalTrigger } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
const TryAssessmentOrg = () => {
  const {
    callBlock,
    initialValues,
    isLoading,
    subTopicData,
    redirectLink,
    count,
  } = useTryAssessment();
  let nomor = 0;

  return (
    <div className="Layout-preview-content">
      <MainLayout
        navbarBg="bg-white"
        navNoMenu
        redirectOnNavClose={redirectLink}
        title={subTopicData?.name}
        footerBg="bg-secondary-200"
      >
        <section className="sub-topic-detail-preview ">
          <img src={imgHeader1} className="image-header1 w-100" alt="" />
          <img src={imgHeader2} className="image-header2 w-100" alt="" />
          <div className="container ">
            {isLoading ? (
              <BeginAssessmentLoading />
            ) : (
              <div className="row justify-content-center mb-44">
                <div className="col-lg-8 col-12">
                  {
                    count > 0 ?
                    (<Formik
                      initialValues={initialValues}
                      enableReinitialize={true}
                    >
                      {(formik) => (
                        <Form>
                          <div
                            className="max-w-888 mt-20 px-24 md-px-48"
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
                          </div>
                        </Form>
                      )}
                    </Formik>)
                    : (<div
                      className="max-w-888 mt-20 px-24 md-px-48"
                      style={{ margin: "auto" }}
                    >
                      <div
                        className=" w-full max-w-888 radius-8 bg-white text-center"
                        style={{
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        <div className="py-24">
                        Data not found
                        </div>
                      </div>
                      </div>)
                  }
                  
                </div>
              </div>
            )}
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default TryAssessmentOrg;
