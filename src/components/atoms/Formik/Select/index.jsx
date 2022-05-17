import React from 'react'
import { Field, ErrorMessage } from 'formik'
import './Select.scss'

function Select (props) {
  const { label, name, options, onInput, onChange, addClass, inputClass, isShadow, isSmall, isExSmall, isTaSmall, isTaExSmall, isMoSmall, isMoExSmall, isLabel, ...rest } = props

  const className = ["formFormik"];
  const inputClassName = ["form-select"];
  className.push(addClass);
  inputClassName.push(inputClass);

  if (isShadow) className.push("isShadow")
  if (isSmall) className.push("isSmall")
  if (isExSmall) className.push("isExSmall")
  if (isTaSmall) className.push("isTaSmall")
  if (isTaExSmall) className.push("isTaExSmall")
  if (isMoSmall) className.push("isMoSmall")
  if (isMoExSmall) className.push("isMoExSmall")

  return (
    <div className={className.join(" ")}>
    {
      isLabel && <label htmlFor={name} className="form-label tx-small-po">{label}</label>
    }
    <Field className={inputClassName.join(" ")} as='select' id={name} name={name} {...rest} >
      {
        ({
          field, meta: { touched, error }
        }) => <select className={ touched && error ? inputClassName.join(" error") : inputClassName.join(" ")} onChange={onChange} onInput={onInput} {...field}>
            {options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              )
            })}
        </select>
      }
    </Field>
  </div>
  )
}

export default Select