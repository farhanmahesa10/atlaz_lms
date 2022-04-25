import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import "./inputDate.scss";
import { styled } from "@mui/material/styles";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Field } from "formik";
const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "8px 16px",
  },

  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d4d7db",
    },
    "&:hover fieldset": {
      borderColor: "#FDBF47",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FDBF47",
    },
  },
});

// const InputDate = (props) => {
//   const { formik, name } = props;
//   return (
//     <>
//       <CssTextField
//         id="custom-css-outlined-input"
//         type="datetime-local"
//         value=""
//         className="w-full "
//         onChange={(e) => {
//           formik.setFieldValue(name, e.target.value);
//         }}
//       />
//     </>
//   );
// };

const InputDate = (props) => {
  const { name, formik } = props;

  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="form-input input-date">
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
    </>
  );
};
export default InputDate;
