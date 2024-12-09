import React, { useState } from 'react'
import InputField from '../../InputField/InputField'
import Button from '../../Button/Button'
import './CreateSkillReq.css'
import {
  validationAdditionlInfo,
  validationPlace,
  validationProfilePicture,
  validationSkill
} from '../../../utils/Functions/validation'
import { useForm } from 'react-hook-form'
import { useCreateSkillReq } from '../../../utils/Functions/requestHandlers/createSkillReqHandler'
import { background } from '@chakra-ui/react'
import { SkillRequestModal } from '../../CreatedSkillReqModal/CreatedSkillReqModal'
import Tooltip from '../../ToolTip/ToolTip'

export const CreateSkillRequest = ({ currentUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const [useProfilePicture, setUseProfilePicture] = useState(false)
  const { submitCreateSkillReq } = useCreateSkillReq()
  const [skillRequest, setSkillRequest] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const submit = async (data) => {
    // await submitUpdated(data)
    const newSkillRequest = await submitCreateSkillReq(data)
    if (newSkillRequest) {
      setSkillRequest(newSkillRequest)
      setIsModalOpen(true)
    }
  }

  const handleCheckboxChange = (e) => {
    setUseProfilePicture(e.target.checked)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <form className='createSkillReq flex' onSubmit={handleSubmit(submit)}>
        <div
          className='titleCont flex
      '
          style={{ justifyContent: 'center' }}
        >
          <h3>Create Skill Request</h3>
        </div>

        <InputField
          className={'inputProfile'}
          labelText='Skill goal:'
          inputName='skillToLearn'
          value={currentUser?.user.skillToLearn}
          {...register('skillToLearn', validationSkill)}
          inputClassName={errors.skillToLearn ? 'input-error' : ''}
          errors={errors}
          errorClassname='errorMessageProfile'
        />

        <InputField
          className={'inputProfile'}
          labelText='Skill to Share:'
          inputName='skillToTeach'
          placeholder='What would you like to learn?'
          {...register('skillToTeach', validationSkill)}
          inputClassName={errors.skillToTeach ? 'input-error' : ''}
          errors={errors}
          errorClassname='errorMessageProfile'
        />

        <div className='inputProfile'>
          <label htmlFor='filterType'>Mode:</label>

          <select
            className={`input ${errors.mode ? 'input-error' : ''}`}
            id='filterType'
            {...register('mode', { required: 'Select a Mode' })}
          >
            <option value=''>- Select Mode -</option>
            <option value='online'>Online</option>
            <option value='in-person'>In Person</option>
            <option value='both'>Both</option>
          </select>
        </div>
        <label htmlFor='location'>Location:</label>
        <InputField
          className={'inputProfile'}
          labelText='Town:'
          inputName='city'
          placeholder='Byron Bay'
          {...register('city', {
            ...validationPlace,
            required: 'this field is required'
          })}
          inputClassName={errors.city ? 'input-error' : ''}
          errors={errors}
        />
        <InputField
          className={'inputProfile'}
          labelText='Country:'
          inputName='country'
          placeholder='Australia'
          {...register('country', {
            ...validationPlace,
            required: 'this field is required'
          })}
          inputClassName={errors.country ? 'input-error' : ''}
          errors={errors}
        />

        <InputField
          type='textTarea'
          className={'inputProfile'}
          labelText='Availability:'
          inputName='availability'
          placeholder='Weekends after 15:00'
          {...register('availability', {
            required: 'this field is required'
          })}
          inputClassName={errors.availability ? 'input-error' : ''}
          errors={errors}
        />

        <div className='inputProfile' id='textTareaCont'>
          <label htmlFor='additionalInfo'>Extra notes: </label>

          <div className='inputErrorCont'>
            <textarea
              className={`input ${errors.additionalInfo ? 'input-error' : ''}`}
              id='additionalInfo'
              placeholder='Tell us more about your goal...'
              {...register('additionalInfo', validationAdditionlInfo)}
            ></textarea>
            {errors.additionalInfo && (
              <p className='errorMessageProfile'>
                {errors.additionalInfo.message}
              </p>
            )}
          </div>
        </div>

        <div
          className='inputPictureCont flex
      '
        >
          <label>Picture:</label>
          <div className='inputErrorContPicture'>
            <Tooltip text='Formats: JPG, PNG, GIF. Max: 3MB.'>
              <input
                type='file'
                className={`inputPicture input${
                  errors.picture ? 'input-error' : ''
                }`}
                {...register('picture', validationProfilePicture)}
                errors={errors}
                disabled={useProfilePicture}
              />
            </Tooltip>

            {errors.picture && (
              <p className='errorMessagePicture'>{errors.picture.message}</p>
            )}
          </div>
          <input
            type='checkbox'
            id='checkbox'
            {...register('useProfilePicture')}
            onChange={handleCheckboxChange}
            checked={useProfilePicture}
          />
          <label className='usePicture' style={{ textWrap: 'nowrap' }}>
            Use Profile Picture{' '}
          </label>
        </div>
        <div
          className='flex buttonContain'
          style={{
            justifyContent: 'space-evenly'
          }}
        >
          <Button
            className='button cancelCreate'
            children={'Cancel'}
            type={'reset'}
          />
          <Button
            className='button createSkillReq'
            children={'Create'}
            type={'submit'}
          />
        </div>
      </form>

      <SkillRequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        skillRequest={skillRequest}
        currentUser={currentUser}
      />
    </>
  )
}
