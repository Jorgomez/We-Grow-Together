import React from 'react'
import './InputField.css'
const InputField = React.forwardRef(
  (
    {
      labelText,
      className = 'inputCont',
      placeholder,
      required = true,
      type = 'text',
      inputClassName
    },
    ref
  ) => {
    return (
      <div className={className}>
        {labelText && <label className='label'>{labelText}</label>}
        <input
          ref={ref}
          className={`input ${inputClassName}`}
          type={type}
          required={required}
          placeholder={placeholder}
        />
      </div>
    )
  }
)

export default InputField
