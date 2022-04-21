import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Divider, FormikControl } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import { useActivateAssessment } from "../../../../services";
import RemoveIcon from "@mui/icons-material/Remove";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const ActivateAssessmentOrg = () => {
  const {
    initialValues,
    createForm,
    selectAllStatus,
    setSelectAllStatus,
    showAssessmentList,
    setShowAssessmentList,
    formikRef,
  } = useActivateAssessment();

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white" navNoMenu>
      <div className="mx-48 mt-16">
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={(values) => {
            console.log(values);
          }}
          isChange={(e) => {
            console.log("oke");
          }}
        >
          {(formik) => (
            <Form>
              <h4>Activate Assessment</h4>
              <Divider lineColor={"bg-primary-500 w-32 h-2"} />
              <div className="row mt-48">
                {createForm.map((r, i) => {
                  return (
                    <React.Fragment key={i}>
                      <AssessmentForm
                        formik={formik}
                        title={r.title}
                        desc={r.desc}
                        name={r.name}
                        placeholder={r.placeholder}
                        onShowAssessmentList={setShowAssessmentList}
                        options={r.data}
                      />
                    </React.Fragment>
                  );
                })}
              </div>

              {showAssessmentList && (
                <div>
                  <div className="d-flex align-items-center">
                    {selectAllStatus === "none" ? (
                      <CheckBoxOutlineBlankIcon
                        className=" cursor-pointer text-neutral-300  h-18 w-18 fs-16 radius-4"
                        onClick={() => {
                          setSelectAllStatus("checked");
                        }}
                      />
                    ) : selectAllStatus === "min" ? (
                      <RemoveIcon
                        className="bg-success-500 cursor-pointer text-white h-18 w-18 fs-14 radius-4"
                        onClick={() => {
                          setSelectAllStatus("none");
                        }}
                      />
                    ) : (
                      <CheckIcon
                        className="bg-success-500 cursor-pointer text-white h-18 w-18 fs-14 radius-4"
                        onClick={() => {
                          setSelectAllStatus("none");
                        }}
                      />
                    )}

                    {/* <input type="checkbox" className=" form-check-input" />{" "} */}
                    <span className="ml-2">Select All</span>
                  </div>
                  <Divider parentClassName="my-32" />

                  <div className="row">
                    {/* reading */}
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-20">
                        <FormikControl
                          control="checkbox"
                          name={"checkReading"}
                          placeholder={"placeholder"}
                          onInput={() => {
                            setSelectAllStatus("min");
                          }}
                        />
                        <div className="h-32 bg-secondary-300 radius-p-100 w-32 d-flex align-items-center justify-content-center ml-16">
                          <WysiwygIcon className="fs-18" />
                        </div>
                        <h6 className="ml-8">Reading Assessment</h6>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            control="datetime"
                            name={"startReading"}
                            placeholder={"placeholder"}
                            formik={formik}
                            label="Start Date & Time"
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            label="End Date & Time"
                            control="datetime"
                            name={"endReading"}
                            placeholder={"placeholder"}
                            formik={formik}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            disabled
                            label="Total Duration"
                            control="input"
                            size="sm"
                            name={"endReading"}
                            placeholder={"0d 0hr 10min"}
                          />
                        </div>
                        <div className="col-12">
                          <Divider
                            lineColor={"bg-secondary-500 "}
                            height="h-2"
                            parentClassName={"mb-24"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* listerning */}
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-20">
                        <FormikControl
                          control="checkbox"
                          name={"checkListening"}
                          placeholder={"placeholder"}
                          onInput={() => {
                            setSelectAllStatus("min");
                          }}
                        />
                        <div className="h-32 bg-secondary-300 radius-p-100 w-32 d-flex align-items-center justify-content-center ml-16">
                          <WysiwygIcon className="fs-18" />
                        </div>
                        <h6 className="ml-8">Listening Assessment</h6>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            control="datetime"
                            name={"startListening"}
                            placeholder={"placeholder"}
                            formik={formik}
                            label="Start Date & Time"
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            label="End Date & Time"
                            control="datetime"
                            name={"endListening"}
                            placeholder={"placeholder"}
                            formik={formik}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            disabled
                            label="Total Duration"
                            control="input"
                            size="sm"
                            name={"endListening"}
                            placeholder={"0d 0hr 10min"}
                          />
                        </div>
                        <div className="col-12">
                          <Divider
                            lineColor={"bg-secondary-500 "}
                            height="h-2"
                            parentClassName={"mb-24"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Speaking */}

                    <div className="col-12">
                      <div className="d-flex align-items-center mb-20">
                        <FormikControl
                          control="checkbox"
                          name={"checkSpeaking"}
                          placeholder={"placeholder"}
                          onInput={() => {
                            setSelectAllStatus("min");
                          }}
                        />
                        <div className="h-32 bg-secondary-300 radius-p-100 w-32 d-flex align-items-center justify-content-center ml-16">
                          <WysiwygIcon className="fs-18" />
                        </div>
                        <h6 className="ml-8">Speaking Assessment</h6>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            control="datetime"
                            name={"startSpeaking"}
                            placeholder={"placeholder"}
                            formik={formik}
                            label="Start Date & Time"
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            label="End Date & Time"
                            control="datetime"
                            name={"endSpeaking"}
                            placeholder={"placeholder"}
                            formik={formik}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            disabled
                            label="Total Duration"
                            control="input"
                            size="sm"
                            name={"endSpeaking"}
                            placeholder={"0d 0hr 10min"}
                          />
                        </div>
                        <div className="col-12">
                          <Divider
                            lineColor={"bg-secondary-500 "}
                            height="h-2"
                            parentClassName={"mb-24"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Writing */}

                    <div className="col-12">
                      <div className="d-flex align-items-center mb-20">
                        <FormikControl
                          control="checkbox"
                          name={"checkWriting"}
                          placeholder={"placeholder"}
                          onInput={() => {
                            setSelectAllStatus("min");
                          }}
                        />
                        <div className="h-32 bg-secondary-300 radius-p-100 w-32 d-flex align-items-center justify-content-center ml-16">
                          <WysiwygIcon className="fs-18" />
                        </div>
                        <h6 className="ml-8">Writing Assessment</h6>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            control="datetime"
                            name={"startWriting"}
                            placeholder={"placeholder"}
                            formik={formik}
                            label="Start Date & Time"
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            label="End Date & Time"
                            control="datetime"
                            name={"endWriting"}
                            placeholder={"placeholder"}
                            formik={formik}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mb-24">
                          <FormikControl
                            disabled
                            label="Total Duration"
                            control="input"
                            size="sm"
                            name={"endWriting"}
                            placeholder={"0d 0hr 10min"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button type="submit">ssss</button>
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
};

const AssessmentForm = (props) => {
  const { formik, title, desc, name, options, placeholder } = props;

  useEffect(() => {
    let { subject, lesson, assessment, assessmentClass } = formik.values;

    if (
      subject !== "" &&
      lesson !== "" &&
      assessment !== "" &&
      assessmentClass !== ""
    ) {
      props.onShowAssessmentList(true);
    } else {
      props.onShowAssessmentList(false);
    }
  }, [formik]);

  return (
    <div className="col-12  mb-24 md-mb-40">
      <div className="row">
        <div className="col-12 col-md-4 mb-8 md-mb-0">
          <p className="font-sm-bold">{title}</p>
          <p className="font-xs">{desc}</p>
        </div>
        <div className="col-12 col-md-8 ">
          <div>
            <FormikControl
              control="select"
              name={name}
              options={props.options && props.options}
              formik={formik}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const dateTimeForm = (props) => {
  const { formik } = props;

  return (
    <div className="col-12">
      <div className="d-flex align-items-center mb-20">
        <FormikControl
          control="checkbox"
          name={"checkWriting"}
          placeholder={"placeholder"}
          onInput={() => {
            // setSelectAllStatus("min");
          }}
        />
        <div className="h-32 bg-secondary-300 radius-p-100 w-32 d-flex align-items-center justify-content-center ml-16">
          <WysiwygIcon className="fs-18" />
        </div>
        <h6 className="ml-8">Writing Assessment</h6>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-4 mb-24">
          <FormikControl
            control="datetime"
            name={"startWriting"}
            placeholder={"placeholder"}
            formik={formik}
            label="Start Date & Time"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-4 mb-24">
          <FormikControl
            label="End Date & Time"
            control="datetime"
            name={"endWriting"}
            placeholder={"placeholder"}
            formik={formik}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-4 mb-24">
          <FormikControl
            disabled
            label="Total Duration"
            control="input"
            size="sm"
            name={"endWriting"}
            placeholder={"0d 0hr 10min"}
          />
        </div>
      </div>
    </div>
  );
};
export default ActivateAssessmentOrg;
