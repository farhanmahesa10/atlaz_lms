import React from "react";
import { Field } from "formik";
const InputIcon = (props) => {
  // props
  //size = ['xs','sm','normal === undefined']
  //name = input name
  //label = label
  //coverClassname = class for cover div
  //inputClassname = class for input
  //iconClassname = class for first icon
  //icon2Classname = class for second icon
  //icon = first icon
  //onChange
  //onInput
  //readOnly
  //autofocus
  //default value
  //disabled
  //icon 2 = second icon

  const sizing = (size) => {
    switch (size) {
      case "xs":
        return {
          fontSize: "font-xs",
          height: "h-32",
        };
      case "sm":
        return {
          fontSize: "font-sm",
          height: "h-36",
        };

      default:
        return {
          fontSize: "font-normal",
          height: "h-40",
        };
    }
  };

  const getCoverClassName = () => {
    let size = sizing(props.size);
    let str = " input-area  " + props.coverClassName;
    str += ` ${size.height} ${size.fontSize}`;

    if (props.disabled) {
      str += ` bg-neutral-100 `;
    } else {
      str += ` bg-white `;
    }
    return str;
  };

  const getIconClassName = () => {
    let defaultClass =
      " px-16  h-p-100 d-flex align-items-center radius-tl-4 radius-bl-4 ";
    let str = defaultClass + props.iconClassName;
    if (props.disabled) str += " bg-neutral-100 ";
    return str;
  };

  const getIcon2ClassName = () => {
    let defaultClass = " px-16  h-p-100 d-flex align-items-center ";
    let str = defaultClass + props.icon2ClassName;
    if (props.disabled) str += " bg-neutral-100 ";
    return str;
  };

  const getInputClassName = () => {
    let size = sizing(props.size);
    let defaultClass = `w-full input-control radius-8 py-8 `;
    let str = defaultClass + props.inputClassName;
    if (!props.icon) {
      str += " pl-16 ";
    }
    if (!props.icon2) {
      str += " pr-16 ";
    }

    str += ` ${size.fontSize}`;

    if (props.disabled) str += " bg-neutral-100 ";
    return str;
  };

  return (
    <Field name={props.name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => (
        <>
          <div
            className={`form-input${
              meta.touched && meta.error ? "-error" : ""
            } text-start `}
          >
            <label className="font-sm-bold ">{props.label}</label>
            <div className={` ${getCoverClassName()} ${props.label && "mt-4"}`}>
              {props.icon && (
                <span className={`${getIconClassName()} `}>{props.icon}</span>
              )}
              <input
                type={props.type}
                autoComplete={props.autoComplete}
                className={getInputClassName()}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                autoFocus={props.autoFocus}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                onChange={props.onChange}
                onInput={props.onInput}
                maxlength={props.maxlength}
                minlength={props.minlength}
                {...field}
              />
              {props.icon2 && (
                <span className={getIcon2ClassName()}>{props.icon2}</span>
              )}
            </div>
            {meta.touched && meta.error && (
              <span className="text-danger-500">{meta.error}</span>
            )}
          </div>
        </>
      )}
    </Field>
  );
};

export default InputIcon;
