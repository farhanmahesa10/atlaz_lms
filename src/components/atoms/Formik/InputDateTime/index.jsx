import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import "./inputDate.scss";
import { styled } from "@mui/material/styles";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Field } from "formik";
import moment from "moment";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const InputDateTime = (props) => {
  const { name, formik, minDate, maxDate, minTime, maxTime } = props;

  const [startDate, setStartDate] = useState(null);

  const meta = formik.getFieldMeta(name);

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
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            minDate={minDate ? minDate : null}
            maxDate={maxDate ? maxDate : null}
            minTime={
              minTime ? minTime : setHours(setMinutes(moment().toDate(), 0), 0)
            }
            maxTime={
              maxTime
                ? maxTime
                : setHours(setMinutes(moment().toDate(), 59), 23)
            }
            // minTime={setHours(setMinutes(new Date(), 0), 17)}
            // maxTime={setHours(setMinutes(new Date(), 30), 20)}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="input-control  py-8 pl-8 radius-8 font-sm"
            onChange={(date) => {
              setStartDate(date);
              formik.setFieldValue(name, date);
              if (props.onInput) {
                props.onInput(date);
              }
            }}
            placeholderText={props.placeholder}
            name={name}
          />

          <div className="bg-neutral-100 d-flex align-items-center px-8 py-6 cursor-pointer">
            <CalendarTodayIcon
              onClick={(e) => {
                document.querySelector(`input[name=${name}]`).click();
              }}
            />
          </div>
        </div>
      </div>
      {meta.touched && meta.error && (
        <span className="text-danger-500">{meta.error}</span>
      )}
    </>
  );
};
export default InputDateTime;
