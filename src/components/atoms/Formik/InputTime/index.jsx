import React, { useRef, useState } from "react";
import "./inputTime.scss";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const InputTime = (props) => {
  const { name, formik, minDate, maxDate, minTime, maxTime } = props;

  const [startDate, setStartDate] = useState(null);

  const meta = formik.getFieldMeta(name);

  if (maxDate) {
    // console.log("tesss");
  }

  return (
    <>
      <div
        className={`form-input${
          meta.touched && meta.error ? "-error" : ""
        } input-date`}
      >
        {props.label && (
          <label htmlFor="" className="font-sm-bold ">
            {props.label}
          </label>
        )}
        <div className={`input-area ${props.label && "mt-4"}`}>
          <ReactDatePicker
            selected={startDate}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            minTime={
              minDate
                ? moment(minDate).add("15", "minutes").toDate()
                : setHours(setMinutes(moment().toDate(), 0), 0)
            }
            maxTime={
              maxDate
                ? maxDate
                : setHours(setMinutes(moment().toDate(), 59), 23)
            }
            className="input-control  py-8 pl-8 radius-8 font-sm"
            onChange={(date) => {
              formik.setFieldValue(name, date);
              setStartDate(date);
              if (props.onInput) {
                props.onInput(date);
              }
            }}
            placeholderText={props.placeholder}
            name={name}
          />

          <div className="bg-neutral-100 d-flex align-items-center px-8 py-6 cursor-pointer">
            <AccessTimeIcon
              onClick={(e) => {
                document.querySelector(`input[name=${name}]`).click();
              }}
            />
          </div>
        </div>
      </div>
      {meta.touched && meta.error && (
        <span className="text-danger-500 font-sm">{meta.error}</span>
      )}
    </>
  );
};

export default InputTime;
