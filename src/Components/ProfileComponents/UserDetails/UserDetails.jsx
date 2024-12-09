import React, { useContext, useState } from 'react'
import InputField from '../../InputField/InputField'
import { useForm } from 'react-hook-form'
import { Button } from '../../Button/Button'
import { format } from 'date-fns'
import './UserDetails.css'
import { HeroProfile } from '../MainContent/HeroProfile/HeroProfile'
import { useUpdateUser } from '../../../utils/Functions/requestHandlers/updateUserHandler'
import {
  validationAge,
  validationEmailProfile,
  validationNameProfile,
  validationPlace,
  validationSkillProfile
} from '../../../utils/Functions/validation'
import { toast } from 'react-toastify'
import { Loading } from '../../Loading/Loading'

export const UserDetails = ({ currentUser }) => {
  const { submitUpdated, defaultValues } = useUpdateUser()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const update = async (data) => {
    setLoading(true)
    const response = await submitUpdated(data)
    setLoading(false)
    console.log(data)
  }
  const handleCancel = () => {
    reset(defaultValues)
  }

  return (
    <form className='userDetails flex' onSubmit={handleSubmit(update)}>
      {loading && <Loading />}
      <HeroProfile
        currentUser={currentUser}
        register={register}
        errors={errors}
      />

      <InputField
        className={'inputProfile'}
        labelText='Name:'
        inputClassName={errors.name ? 'input-error' : ''}
        errors={errors}
        errorClassname='errorMessageProfile'
        inputName='name'
        value={currentUser?.user.name}
        {...register('name', validationNameProfile)}
      />
      <InputField
        className={'inputProfile'}
        labelText='Email:'
        type='email'
        inputClassName={errors.email ? 'input-error' : ''}
        errors={errors}
        errorClassname='errorMessageProfile'
        inputName='email'
        value={defaultValues.email}
        {...register('email', validationEmailProfile)}
      />
      <InputField
        className={'inputProfile'}
        labelText='Skill to learn:'
        type='text'
        inputClassName={errors.skillToLearn ? 'input-error' : ''}
        errors={errors}
        errorClassname='errorMessageProfile'
        inputName='skillToLearn'
        value={defaultValues.skillToLearn}
        {...register('skillToLearn', validationSkillProfile)}
      />
      <InputField
        className={'inputProfile'}
        labelText='Nacionality:'
        type='text'
        placeholder={
          currentUser?.user.additionalInfo?.origin ? '' : 'Let us know'
        }
        inputClassName={errors.origin ? 'input-error' : ''}
        errors={errors}
        errorClassname='errorMessageProfile'
        inputName='origin'
        {...register('origin', validationPlace)}
        value={defaultValues.origin}
      />
      <InputField
        className={'inputProfile'}
        labelText='Age:'
        type='text'
        placeholder={currentUser?.user.additionalInfo?.age ? '' : 'Let us know'}
        inputClassName={errors.age ? 'input-error' : ''}
        errors={errors}
        errorClassname='errorMessageProfile'
        inputName='age'
        value={defaultValues.age}
        {...register('age', validationAge)}
      />
      <InputField
        className={'inputProfile'}
        labelText='WhatsApp:'
        type='text'
        errors={errors}
        inputName='whatsapp'
        placeholder={
          currentUser?.user.additionalInfo?.whatsapp ? '' : 'Let us know'
        }
        value={defaultValues.whatsapp}
        {...register('whatsapp')}
      />
      <InputField
        className={'inputProfile'}
        labelText='Instagram:'
        type='text'
        placeholder={
          currentUser?.user.additionalInfo?.instagram ? '' : 'Let us know'
        }
        errors={errors}
        inputName='instagram'
        value={defaultValues.instagram}
        {...register('instagram')}
      />
      <div className={'regDateCont flex'}>
        <p className='label'>Reg. Date:</p>

        <p className='date'>
          {currentUser?.user.registrationDate
            ? format(new Date(currentUser.user.registrationDate), 'dd/MM/yyyy')
            : 'No date available'}
        </p>
      </div>
      <div
        className='flex'
        style={{
          width: '100%',

          justifyContent: 'space-around ',
          marginTop: '5%'
        }}
      >
        <Button
          className='button cancelEdit'
          children={'Cancel'}
          onClick={handleCancel}
          type={'reset'}
        />

        <Button
          className='button editUser'
          children={'Save Changes'}
          type={'submit'}
          disabled={loading}
        />
      </div>
    </form>
  )
}
