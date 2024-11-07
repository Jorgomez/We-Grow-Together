import React from 'react'
import InputField from '../InputField/InputField'

export const LoginInputs = ({ refs, errors }) => {
  console.log('loging Form, render')
  return (
    <>
      <InputField
        ref={refs.iName}
        labelText='Full Name'
        placeholder='Write your full name'
        inputClassName={errors.name ? 'input-error' : ''}
      />

      <InputField
        ref={refs.iPassword}
        labelText='Password'
        placeholder='password'
        type='password'
        inputClassName={errors.password ? 'input-error' : ''}
      />
    </>
  )
}
