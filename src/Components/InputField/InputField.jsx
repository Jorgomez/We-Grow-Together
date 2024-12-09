import React, { forwardRef } from 'react'
import './InputField.css'

const InputField = forwardRef(
  (
    {
      labelText,
      className = 'inputCont',
      placeholder,
      required = true,
      type = 'text',
      inputClassName,
      errors = {},
      inputName,
      value,
      errorClassname = 'errorMessage',
      ...formProps
    },
    ref
  ) => {
    const firstError = Object.keys(errors)[0]

    return (
      <div className={className}>
        {labelText && <label className='label'>{labelText}</label>}
        <div className='inputErrorCont'>
          <input
            className={`input ${inputClassName}`}
            type={type}
            placeholder={placeholder}
            {...formProps}
            ref={ref}
            defaultValue={value}
          />
          {firstError === inputName && errors[inputName]?.message && (
            <p id={`${inputName}-error`} className={errorClassname}>
              {errors[inputName].message}
            </p>
          )}
        </div>
      </div>
    )
  }
)

export default InputField
