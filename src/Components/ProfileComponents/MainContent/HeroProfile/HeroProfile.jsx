import React, { useContext } from 'react'
import { AuthContext } from '../../../../Contexts/AuthContext'
import { capitalizeWords } from '../../../../utils/Functions/capitalizeWords'
import InputField from '../../../InputField/InputField'
import { validationProfilePicture } from '../../../../utils/Functions/validation'
import Tooltip from '../../../ToolTip/ToolTip'

export const HeroProfile = ({ currentUser, register, errors }) => {
  return (
    <div className='flex heroProfileCont'>
      {' '}
      <div style={{ position: 'relative', display: 'flex' }}>
        <img
          src={currentUser?.user.profilePicture}
          alt='User Profile img'
          className='userProfileImg'
          style={{
            padding: '3px',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            objectFit: 'cover',
            background:
              'linear-gradient(135deg, #e0f2fe, #60a5fa,#2563eb, #0f172a  )'
          }}
        />

        <div className='inputFileButton'>
          <Tooltip text='Formats: JPG, PNG, GIF. Max: 3MB.'>
            <InputField
              className={'inputProfilePicutre'}
              type='file'
              inputClassName={errors?.profilePicture ? 'input-error' : ''}
              errors={errors}
              inputName='profilePicture'
              {...register('profilePicture', validationProfilePicture)}
            />
          </Tooltip>
        </div>
      </div>
      <h2>{currentUser && capitalizeWords(currentUser.user.name)} </h2>
    </div>
  )
}
