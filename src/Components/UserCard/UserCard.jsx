import React, { useContext, useState } from 'react'
import './UserCard.css'
import { getCountryCode } from '../../utils/Functions/getCountryCode'
import Tooltip from '../ToolTip/ToolTip'
import LikeButton from '../LikeButton/LikeButton'
import { AuthContext } from '../../Contexts/AuthContext'
import { MessageModal } from '../MessageModal/MessageModal'
import { useDisclosure } from '@chakra-ui/react'

export const UserCard = ({ skillRequest }) => {
  console.log(`rander UserCard id:${skillRequest._id}`)
  const { currentUser } = useContext(AuthContext)
  const isLongName = skillRequest.user.name.length > 16
  const hasSkillRequests = currentUser?.user.skillRequests.length > 0

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <article className='userCard'>
      <div className='leftUserInfo'>
        <div className='imgNameCont'>
          <img
            className='profileImg'
            src={skillRequest.picture}
            alt='userPicture'
          />
          <h3
            style={{ fontSize: isLongName ? '0.9rem' : '1rem' }}
            className='nameUserCard'
          >
            {skillRequest.user.name}
          </h3>
        </div>
        <ul className='iconsProfileCardCont'>
          <li>
            <Tooltip
              text={
                currentUser
                  ? hasSkillRequests
                    ? `Get in touch whit ${
                        skillRequest.user.name.split(' ')[0]
                      } `
                    : 'Upload a Skill Request to get in touch '
                  : 'Register/Login & Upload a Skill Request to get in touch'
              }
            >
              <img
                className='iconsProfileCard'
                src='https://res.cloudinary.com/digcf0lad/image/upload/v1730644625/chat_w0wcea.png'
                alt='contact'
                onClick={hasSkillRequests ? onOpen : undefined}
                style={{ cursor: 'pointer' }}
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip
              text={
                currentUser
                  ? skillRequest.availability
                  : 'Go Register, to check availability '
              }
            >
              <img
                className='iconsProfileCard'
                src='https://res.cloudinary.com/digcf0lad/image/upload/v1730644472/correct_rzswmk.png'
                alt='calendar img'
              />
            </Tooltip>
          </li>
          <li>
            <LikeButton
              skillRequest={{
                id: skillRequest._id,
                name: skillRequest.user.name
              }}
              className='iconsProfileCard'
            />
          </li>
        </ul>
      </div>
      <div className='rightUserInfo'>
        <div className='locationContainer'>
          <img
            className='locationIcon'
            src='https://res.cloudinary.com/digcf0lad/image/upload/v1730638325/pin_g12yr1.png'
            alt='locationIcon'
          />
          <h4 className='locationTitle'>
            <p>{skillRequest.location.city}</p>
            <p>{getCountryCode(skillRequest.location.country)}</p>
          </h4>
        </div>

        <div className='skillsInfoCont'>
          <h4>Skill to Learn:</h4>
          <ul>
            {/* {user.toLearn.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))} */}
            <li>{skillRequest.skillToLearn}</li>
          </ul>
          <h4>Skill to teach:</h4>
          <ul>
            {/* {user.toTeach.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))} */}
            <li>{skillRequest.skillToTeach}</li>
          </ul>
        </div>
        <div className='mode'>
          <h4>Mode:</h4>
          <Tooltip
            text={
              skillRequest.mode === 'online'
                ? 'Remote'
                : skillRequest.mode === 'in-person'
                ? 'Face to face'
                : 'Face to face or Remote'
            }
          >
            {skillRequest.mode === 'both' ? (
              <div>
                <img
                  src='https://res.cloudinary.com/digcf0lad/image/upload/v1732146536/student_2_gqpvg6.png'
                  alt='Remote'
                  style={{ marginRight: '8px' }}
                />
                <img
                  src='https://res.cloudinary.com/digcf0lad/image/upload/v1732187964/happy-children_5_nlic9h.png'
                  alt='Face to Face'
                />
              </div>
            ) : (
              <img
                src={
                  skillRequest.mode === 'online'
                    ? 'https://res.cloudinary.com/digcf0lad/image/upload/v1732146536/student_2_gqpvg6.png'
                    : 'https://res.cloudinary.com/digcf0lad/image/upload/v1732187964/happy-children_5_nlic9h.png'
                }
                alt={skillRequest.mode === 'online' ? 'Remote' : 'Face to Face'}
              />
            )}
          </Tooltip>
        </div>
        <div className='aditionalInfoCont'>
          <h4>Aditional Info:</h4>
          <p>{skillRequest.additionalInfo}</p>
        </div>
      </div>

      <MessageModal
        isOpen={isOpen}
        onClose={onClose}
        currentUser={currentUser}
        skillRequest={skillRequest}
      />
    </article>
  )
}
