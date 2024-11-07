import React from 'react'
import InputField from '../InputField/InputField'

export const RegisterInputs = ({ refs, errors }) => {
  console.log('RegForm, render')
  return (
    <>
      <InputField
        ref={refs.iName}
        labelText='Full Name'
        placeholder='Write your full name'
        inputClassName={errors.name ? 'input-error' : ''}
      />
      <InputField
        ref={refs.iEmail}
        labelText='Email'
        placeholder='ex: orto@gmail.com'
        type='email'
        inputClassName={errors.email ? 'input-error' : ''}
      />
      <InputField
        ref={refs.iPassword}
        labelText='Password'
        placeholder='password'
        type='password'
        inputClassName={errors.password ? 'input-error' : ''}
      />
      <InputField
        ref={refs.iSkillToLearn}
        labelText='Skill to learn'
        placeholder='e.g., Photography, Surf lesson, Spanish'
        type='text'
        inputClassName={errors.skillToLearn ? 'input-error' : ''}
      />
      <InputField
        ref={refs.iSkillToTeach}
        labelText='Skill to share'
        placeholder='e.g., yoga, Skate, Breathing'
        type='text'
        inputClassName={errors.skillToTeach ? 'input-error' : ''}
      />
      <InputField
        ref={refs.iPicture}
        labelText='Profile Picture'
        type='file'
        required={false}
        inputClassName={errors.profilePicture ? 'input-error' : ''}
      />
    </>
  )
}
