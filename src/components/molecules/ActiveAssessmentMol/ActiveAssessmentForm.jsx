import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { FormikControl } from "../../atoms";

const ActiveAssessmentForm = (props) => {
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
    onInputChange,
    loadingState,
  } = props;

  useEffect(() => {
    let { subject, lesson, topic, classlist } = formik.values;
    if (
      subject !== "" &&
      lesson !== "" &&
      topic !== "" &&
      classlist.length !== 0
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
          {loadingState ? (
            <Skeleton width={"100%"} height="36px" />
          ) : (
            <div>
              <FormikControl
                control="select"
                className="border border-secondary-500 radius-8"
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
                onInputChange={(val) => {
                  if (onInputChange) {
                    onInputChange(formik, val);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveAssessmentForm;
