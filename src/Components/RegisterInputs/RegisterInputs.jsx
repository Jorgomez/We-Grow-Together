import React from 'react'
import InputField from '../InputField/InputField'
import {
  validationEmail,
  validationName,
  validationPassword,
  validationProfilePicture,
  validationSkill
} from '../../utils/Functions/validation'
import Tooltip from '../ToolTip/ToolTip'

export const RegisterInputs = ({ register, errors }) => {
  console.log('RegForm, render', errors)

  return (
    <>
      <InputField
        labelText='Full Name'
        placeholder='Write your full name'
        inputClassName={errors.userName ? 'input-error' : ''}
        errors={errors}
        inputName='userName'
        {...register('userName', validationName)}
        aria-describedby='userName-error'
      />

      <InputField
        labelText='Email'
        placeholder='ex: orto@gmail.com'
        type='email'
        inputClassName={errors.email ? 'input-error' : ''}
        errors={errors}
        inputName='email'
        {...register('email', validationEmail)}
      />

      <InputField
        labelText='Password'
        placeholder='password'
        type='password'
        inputClassName={errors.password ? 'input-error' : ''}
        errors={errors}
        inputName='password'
        {...register('password', validationPassword)}
      />
      <InputField
        labelText='Skill to learn'
        placeholder='e.g., Photography, Surf lesson, Spanish'
        type='text'
        inputClassName={errors.skillToLearn ? 'input-error' : ''}
        errors={errors}
        inputName='skillToLearn'
        {...register('skillToLearn', validationSkill)}
      />
      <Tooltip text='Formats: JPG, PNG, GIF. Max: 3MB.'>
        <InputField
          labelText='Profile Picture'
          type='file'
          required={false}
          inputClassName={errors.profilePicture ? 'input-error' : ''}
          errors={errors}
          inputName='profilePicture'
          {...register('profilePicture', validationProfilePicture)}
        />
      </Tooltip>
    </>
  )
}
