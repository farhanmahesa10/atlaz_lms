import React, { useRef, useState } from "react";
import { Field } from "formik";
function InputImage(props) {
  const inputRef = useRef();

  return (
    <div className={""}>
      {props.label && <label>{props.label}</label>}
      <Field className={""} id={""} name={props.fakeName}>
        {({ form, field, meta: { touched, error } }) => {
          let { setFieldValue } = form;
          return (
            <>
              <input
                type="file"
                accept={"image/*"}
                className="d-none"
                // onClick={onClick}
                ref={inputRef}
                onInput={(e) => {
                  let file = e.target.files[0];
                  let reader = new FileReader();
                  reader.onloadend = () => {
                    var result = reader.result;
                    setFieldValue(props.imageName, result);
                  };
                  reader.readAsDataURL(file);
                }}
                {...field}
              />
              <div
                onClick={() => {
                  inputRef.current.click();
                }}
              >
                {props.component}
              </div>
            </>
          );
        }}
      </Field>
    </div>
  );
}

export default InputImage;
