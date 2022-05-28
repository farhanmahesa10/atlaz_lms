import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Divider, FormikControl, GlobalToast } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import { useActivateAssessment } from "../../../../services";
import RemoveIcon from "@mui/icons-material/Remove";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import _ from "lodash";
import ActiveAssessmentPreview from "./ActiveAssessmentPreview";
import moment from "moment";
import { ActiveAssessmentSubtopicLoading } from "../../../molecules";
import {
  ActiveAssessmentForm,
  ActiveAssessmentFormLoading,
} from "../../../molecules";
import { connect } from "react-redux";
const ActivateAssessmentOrg = () => {
  const {
    initialValues,
    createForm,
    selectAllStatus,
    setSelectAllStatus,
    showAssessmentList,
    setShowAssessmentList,
    changeCheked,
    onSubmit,
    showPreview,
    previewData,
    validationSchema,
    firstLoading,
    subtopicData,
    isSubtopicLoading,
    setShowPreview,
    publishData,
    params,
  } = useActivateAssessment();

  return (
    <MainLayout
      maxWidth="1440px"
      navbarBg="bg-white"
      navNoMenu
      redirectOnNavClose={`/classroom/assessment/${params.classId}/${params.subjectId}/dashboard`}
      isNeedConfirm={true}
    >
      <>
        <div className={`${!showPreview ? "d-none" : ""}`}>
          <ActiveAssessmentPreview
            data={previewData.data}
            subjectName={previewData.subjectName}
            lessonName={previewData.lessonName}
            topicName={previewData.topicName}
            setShowPreview={setShowPreview}
            onSubmit={publishData}
          />
        </div>

        <div className={`mx-48 mt-16 ${showPreview ? "d-none" : ""}`}>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <Form>
                <h4>Activate Assessment</h4>
                <Divider lineColor={"bg-primary-500 w-32 h-2"} />
                <div className="row mt-48">
                  {firstLoading ? (
                    <ActiveAssessmentFormLoading />
                  ) : (
                    createForm.map((r, i) => {
                      return (
                        <React.Fragment key={i}>
                          <ActiveAssessmentForm
                            formik={formik}
                            title={r.title}
                            desc={r.desc}
                            name={r.name}
                            isMulti={r.isMulti}
                            placeholder={r.placeholder}
                            onShowAssessmentList={setShowAssessmentList}
                            options={r.data}
                            defaultValue={r.defaultValue}
                            inputType={r.inputType}
                            hideSelectedOptions={r.hideSelectedOptions}
                            closeMenuOnSelect={r.closeMenuOnSelect}
                            isDisabled={r.isDisabled}
                            onInputChange={r.onInputChange}
                            loadingState={r.loadingState}
                          />
                        </React.Fragment>
                      );
                    })
                  )}
                </div>
                {showAssessmentList && (
                  <div>
                    <div className="d-flex align-items-center">
                      {selectAllStatus === "none" ? (
                        <CheckBoxOutlineBlankIcon
                          className=" cursor-pointer text-neutral-300  h-18 w-18 fs-16 radius-4"
                          onClick={() => {
                            setSelectAllStatus("checked");
                            changeCheked(formik, true);
                          }}
                        />
                      ) : selectAllStatus === "min" ? (
                        <RemoveIcon
                          className="bg-info-500 cursor-pointer text-white h-18 w-18 fs-14 radius-4"
                          onClick={() => {
                            setSelectAllStatus("none");
                            changeCheked(formik, false);
                          }}
                        />
                      ) : (
                        <CheckIcon
                          className="bg-info-500 cursor-pointer text-white h-18 w-18 fs-14 radius-4"
                          onClick={() => {
                            setSelectAllStatus("none");
                            changeCheked(formik, false);
                          }}
                        />
                      )}

                      {/* <input type="checkbox" className=" form-check-input" />{" "} */}
                      <span className="ml-2">Select All</span>
                    </div>
                    <Divider parentClassName="my-32" />

                    <div className="row">
                      {isSubtopicLoading ? (
                        <ActiveAssessmentSubtopicLoading />
                      ) : (
                        subtopicData.map((res, ind) => {
                          if (res.type.toLowerCase() === "manual grading") {
                            return (
                              <DateTimeForm
                                checkBoxName={`subtopic[${ind}].checkbox`}
                                startDateName={`subtopic[${ind}].startDateTime`}
                                endDateName={`subtopic[${ind}].endDateTime`}
                                durationName={`subtopic[${ind}].duration`}
                                title={res.name}
                                formik={formik}
                                subtopicData={subtopicData}
                                onChangeSelectChecked={(val) =>
                                  setSelectAllStatus(val)
                                }
                                key={`b-${res._id}`}
                              />
                            );
                          } else {
                            return (
                              <TimeForm
                                checkBoxName={`subtopic[${ind}].checkbox`}
                                dateName={`subtopic[${ind}].assessmentDate`}
                                startTimeName={`subtopic[${ind}].startTime`}
                                endTimeName={`subtopic[${ind}].endTime`}
                                durationName={`subtopic[${ind}].duration`}
                                title={res.name}
                                formik={formik}
                                subtopicData={subtopicData}
                                onChangeSelectChecked={(val) =>
                                  setSelectAllStatus(val)
                                }
                                key={`b-${res._id}`}
                              />
                            );
                          }
                        })
                      )}

                      <div className="col-12 text-end mt-16">
                        <button
                          type="submit"
                          className="btn-outline font-normal mr-24"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn-primary font-normal px-37"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </>
    </MainLayout>
  );
};

const DateTimeForm = (props) => {
  const [startDef, setStartDef] = useState("");
  const [endDef, setEndDef] = useState("");
  const [minTime, setMinTime] = useState(null);
  const [maxTime, setMaxTime] = useState(null);

  const {
    formik,
    checkBoxName,
    startDateName,
    endDateName,
    durationName,
    title,
    subtopicData,
  } = props;

  //checkbox control
  useEffect(() => {
    let formikValues = formik.values;
    let tempCheckStatus = true;

    let trueCase = formikValues.subtopic.filter((r) => r.checkbox === true);
    let falseCase = formikValues.subtopic.filter((r) => r.checkbox === false);

    if (trueCase.length === subtopicData.length) {
      props.onChangeSelectChecked("checked");
    } else if (trueCase.length > 0 || falseCase > 0) {
      props.onChangeSelectChecked("min");
    } else {
      props.onChangeSelectChecked("none");
    }
    handleMinTime();
    handleMaxTime();
  }, [formik]);

  const handleDateChange = (val, isStart = true) => {
    let values = formik.values;
    let start = "";
    let end = "";
    if (isStart) {
      start = val;
      end = _.get(values, endDateName);
    } else {
      start = _.get(values, startDateName);
      end = val;
    }

    if (start && end) {
      let startMoment = moment(start);
      let endMoment = moment(end);
      let duration = moment.duration(endMoment.diff(startMoment));
      let day = duration._data.days;
      let hour = duration._data.hours;
      let minute = duration._data.minutes;
      if (startMoment < endMoment) {
        let result = `${day > 0 ? day : "0"}d ${hour > 0 ? hour : "0"}hr ${
          minute > 0 ? minute : "0"
        }min`;
        formik.setFieldValue(durationName, result);
        // console.log(result);
      } else {
        let result = `0d 0hr 0min`;
        formik.setFieldValue(durationName, result);
      }
      // console.log(day + "d ", hour + "hr ", minute + "min");
    }

    // let diff = start.diff(end);
  };

  const handleMinTime = () => {
    let minDateTime = formik.getFieldProps(startDateName).value;
    let maxDateTime = formik.getFieldProps(endDateName).value;
    if (
      moment(minDateTime).format("Y-M-D") ===
      moment(maxDateTime).format("Y-M-D")
    ) {
      let minResult = moment(minDateTime).add(1, "minutes").toDate();
      setMinTime(minResult);
    } else {
      setMinTime(null);
    }
  };
  const handleMaxTime = () => {
    let minDateTime = formik.getFieldProps(startDateName).value;
    let maxDateTime = formik.getFieldProps(endDateName).value;

    if (
      moment(minDateTime).format("Y-M-D") ===
      moment(maxDateTime).format("Y-M-D")
    ) {
      setMaxTime(moment(maxDateTime).add(1, "minutes").toDate());
    } else {
      setMaxTime(null);
    }
  };

  return (
    <div className="col-12">
      <div className="d-flex align-items-center mb-20">
        <FormikControl
          control="checkbox"
          name={checkBoxName}
          placeholder={"Select date & time"}
        />
        <div className="h-32 bg-secondary-300 radius-p-100 w-32 d-flex align-items-center justify-content-center ml-16">
          <WysiwygIcon className="fs-18" />
        </div>
        <h6 className="ml-8">{title}</h6>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-4 mb-24">
          <FormikControl
            control="datetime"
            name={startDateName}
            placeholder={"Select date & time"}
            formik={formik}
            onInput={(val) => {
              setStartDef(val);
              handleDateChange(val);
            }}
            maxDate={
              formik.getFieldProps(endDateName).value
                ? formik.getFieldProps(endDateName).value
                : null
            }
            maxTime={maxTime}
            label="Start Date & Time"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-4 mb-24">
          <FormikControl
            label="End Date & Time"
            control="datetime"
            name={endDateName}
            placeholder={"Select date & time"}
            formik={formik}
            minDate={
              formik.getFieldProps(startDateName).value
                ? formik.getFieldProps(startDateName).value
                : null
            }
            minTime={minTime}
            onInput={(val) => {
              setEndDef(val);
              handleDateChange(val, false);
            }}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-4 mb-24">
          <FormikControl
            disabled
            label="Total Duration"
            control="input"
            size="sm"
            name={durationName}
            placeholder={"0d 0hr 0min"}
          />
        </div>
      </div>
    </div>
  );
};

const TimeForm = (props) => {
  const [startDef, setStartDef] = useState("");
  const [endDef, setEndDef] = useState("");

  const {
    formik,
    checkBoxName,
    dateName,
    startTimeName,
    endTimeName,
    durationName,
    title,
  } = props;

  //checkbox control
  useEffect(() => {
    let formikValues = formik.values;
    if (
      formikValues.checkReading === true &&
      formikValues.checkListening === true &&
      formikValues.checkSpeaking === true &&
      formikValues.checkWriting === true
    ) {
      props.onChangeSelectChecked("checked");
    } else if (
      formikValues.checkReading === true ||
      formikValues.checkListening === true ||
      formikValues.checkSpeaking === true ||
      formikValues.checkWriting === true
    ) {
      props.onChangeSelectChecked("min");
    } else if (
      formikValues.checkReading === false &&
      formikValues.checkListening === false &&
      formikValues.checkSpeaking === false &&
      formikValues.checkWriting === false
    ) {
      props.onChangeSelectChecked("none");
    }
  }, [formik]);

  const handleDateChange = (val, isStart = true) => {
    let values = formik.values;
    let start = "";
    let end = "";
    if (isStart) {
      start = val;
      end = _.get(values, endTimeName);
    } else {
      start = _.get(values, startTimeName);
      end = val;
    }

    if (start && end) {
      let startMoment = moment(start);
      let endMoment = moment(end);
      let duration = moment.duration(endMoment.diff(startMoment));
      let day = duration._data.days;
      let hour = duration._data.hours;
      let minute = duration._data.minutes;
      if (startMoment < endMoment) {
        let result = `${day > 0 ? day : "0"}d ${hour > 0 ? hour : "0"}hr ${
          minute > 0 ? minute : "0"
        }min`;
        formik.setFieldValue(durationName, result);
        // console.log(result);
      } else {
        let result = `0d 0hr 0min`;
        formik.setFieldValue(durationName, result);
      }
      // console.log(day + "d ", hour + "hr ", minute + "min");
    }
    // let diff = start.diff(end);
  };

  return (
    <div className="col-12">
      <div className="d-flex align-items-center mb-20">
        <FormikControl
          control="checkbox"
          name={checkBoxName}
          placeholder={"Select date & time"}
        />
        <div className="h-32 bg-secondary-300 radius-p-100 w-32 d-flex align-items-center justify-content-center ml-16">
          <WysiwygIcon className="fs-18" />
        </div>
        <h6 className="ml-8">{title}</h6>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-3 mb-24">
          <FormikControl
            control="date"
            name={dateName}
            placeholder={"Select date "}
            formik={formik}
            onInput={(val) => {
              setStartDef(val);
              handleDateChange(val);
            }}
            minDate={moment().toDate()}
            label="Assessment date"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-24">
          <FormikControl
            label="Start Time"
            control="time"
            name={startTimeName}
            placeholder={"Select  time"}
            formik={formik}
            maxDate={
              formik.getFieldProps(endTimeName).value
                ? formik.getFieldProps(endTimeName).value
                : null
            }
            onInput={(val) => {
              setEndDef(val);
              handleDateChange(val, true);
            }}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-24">
          <FormikControl
            label="End Time"
            control="time"
            name={endTimeName}
            placeholder={"Select  time"}
            formik={formik}
            minDate={
              formik.getFieldProps(startTimeName).value
                ? formik.getFieldProps(startTimeName).value
                : null
            }
            onInput={(val) => {
              setEndDef(val);
              handleDateChange(val, false);
            }}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-24">
          <FormikControl
            disabled
            label="Total Duration"
            control="input"
            size="sm"
            name={durationName}
            placeholder={"0d 0hr 0min"}
          />
        </div>
      </div>
    </div>
  );
};
export default connect()(ActivateAssessmentOrg);
