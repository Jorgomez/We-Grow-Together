import React from 'react'
import InputField from '../InputField/InputField'

export const LoginInputs = ({ register, errors }) => {
  console.log('loging Form, render')
  return (
    <>
      <InputField
        labelText='Email'
        placeholder='Write your email'
        inputClassName={errors.emailLogin ? 'input-error' : ''}
        errors={errors}
        inputName='emailLogin'
        {...register('emailLogin')}
      />
      <InputField
        labelText='Password'
        placeholder='password'
        type='password'
        inputClassName={errors.passwordLogin ? 'input-error' : ''}
        errors={errors}
        inputName='passwordLogin'
        {...register('passwordLogin')}
      />
    </>
  )
}
