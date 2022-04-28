import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Divider, FormikControl } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import { useActivateAssessment } from "../../../../services";
import RemoveIcon from "@mui/icons-material/Remove";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import moment from "moment";
import _ from "lodash";
import ActiveAssessmentPreview from "./ActiveAssessmentPreview";

const ActivateAssessmentOrg = () => {
  const {
    initialValues,
    createForm,
    selectAllStatus,
    setSelectAllStatus,
    showAssessmentList,
    setShowAssessmentList,
    formDateTime,
    changeCheked,
    onSubmit,
    showPreview,
    previewData,
    validationSchema,
  } = useActivateAssessment();

  return (
    <MainLayout
      maxWidth="1440px"
      navbarBg="bg-white"
      navNoMenu
      redirectOnNavClose="/classroom/assessment/1/2/dashboard"
      isNeedConfirm={true}
    >
      {showPreview && <ActiveAssessmentPreview />}
      {!showPreview && (
        <div className="mx-48 mt-16">
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
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
                          isMulti={r.isMulti}
                          placeholder={r.placeholder}
                          onShowAssessmentList={setShowAssessmentList}
                          options={r.data}
                          defaultValue={r.defaultValue}
                          inputType={r.inputType}
                          hideSelectedOptions={r.hideSelectedOptions}
                          closeMenuOnSelect={r.closeMenuOnSelect}
                          isDisabled={r.isDisabled}
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
                      {formDateTime.map((res, ind) => {
                        return (
                          <DateTimeForm
                            checkBoxName={res.checkBoxName}
                            startDateName={res.startDateName}
                            endDateName={res.endDateName}
                            durationName={res.durationName}
                            title={res.title}
                            formik={formik}
                            onChangeSelectChecked={(val) =>
                              setSelectAllStatus(val)
                            }
                            key={`b-${ind}`}
                          />
                        );
                      })}
                      <div className="col-12 text-end">
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
                <button type="submit">sadasd</button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </MainLayout>
  );
};

const AssessmentForm = (props) => {
  const {
    formik,
    title,
    desc,
    name,
    options,
    placeholder,
    isMulti,
    inputType,
    hideSelectedOptions,
    closeMenuOnSelect,
    defaultValue,
    isDisabled,
  } = props;

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    let { subject, lesson, assessment, assessmentClass } = formik.values;
    if (
      subject !== "" &&
      lesson !== "" &&
      assessment !== "" &&
      assessmentClass.length !== 0
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
              isMulti={isMulti}
              defaultValue={defaultValue}
              inputType={inputType}
              isDisabled={isDisabled}
              hideSelectedOptions={hideSelectedOptions}
              closeMenuOnSelect={closeMenuOnSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DateTimeForm = (props) => {
  const [startDef, setStartDef] = useState("");
  const [endDef, setEndDef] = useState("");

  const {
    formik,
    checkBoxName,
    startDateName,
    endDateName,
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
export default ActivateAssessmentOrg;
