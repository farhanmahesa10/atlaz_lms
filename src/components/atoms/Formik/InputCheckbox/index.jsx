import { Field } from "formik";
import React from "react";

const InputCheckbox = (props) => {
  return (
    <div className={`d-flex align-items-center `}>
      <Field name={props.name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <>
            <input
              type="checkbox"
              checked={field.value ? true : false}
              className=" form-check-input"
              onChange={props.onChange}
              onInput={props.onInput}
              id={props.name}
              {...field}
            />
            {props.label && (
              <label
                htmlFor={props.name}
                className={`ml-8 cursor-pointer  ${props.labelClassName}`}
              >
                {props.label}
              </label>
            )}
          </>
        )}
      </Field>
    </div>
  );
};

export default InputCheckbox;
