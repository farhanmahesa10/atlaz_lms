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

  const sizing = () => {
    let size = props.size;
    let mdSize = props.mdSize;
    let lgSize = props.lgSize;
    let xlSize = props.xlSize;
    let fontSize = " ";
    let height = " ";

    if (!size && !mdSize && !lgSize && !xlSize) {
      fontSize += " font-normal ";
      height += " h-40 ";
    }

    if (size) {
      if (size === "xs") {
        fontSize += " font-xs ";
        height += " h-32 ";
      } else if (size === "sm") {
        fontSize += " font-sm ";
        height += " h-36 ";
      } else if (size === "normal") {
        fontSize += " font-normal ";
        height += " h-40 ";
      }
    }

    if (mdSize) {
      if (mdSize === "xs") {
        fontSize += " md-font-xs ";
        height += " md-h-32 ";
      } else if (mdSize === "sm") {
        fontSize += " md-font-sm ";
        height += " md-h-36 ";
      } else if (mdSize === "normal") {
        fontSize += " md-font-normal ";
        height += " md-h-40 ";
      }
    }

    if (lgSize) {
      if (lgSize === "xs") {
        fontSize += " lg-font-xs ";
        height += " lg-h-32 ";
      } else if (lgSize === "sm") {
        fontSize += " lg-font-sm ";
        height += " lg-h-36 ";
      } else if (lgSize === "normal") {
        fontSize += " lg-font-normal ";
        height += " lg-h-40 ";
      }
    }

    if (xlSize) {
      if (xlSize === "xs") {
        fontSize += " xl-font-xs ";
        height += " xl-h-32 ";
      } else if (xlSize === "sm") {
        fontSize += " xl-font-sm ";
        height += " xl-h-36 ";
      } else if (xlSize === "normal") {
        fontSize += " xl-font-normal ";
        height += " xl-h-40 ";
      }
    }

    return { height, fontSize };
  };

  const getCoverClassName = () => {
    let size = sizing();
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
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                autoComplete={props.autoComplete}
                className={getInputClassName()}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                autoFocus={props.autoFocus}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                onChange={props.onChange}
                onInput={props.onInput}
                maxLength={props.maxlength}
                minLength={props.minlength}
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
