import React, { useContext } from 'react'
import './UserCard.css'
import { getCountryCode } from '../../utils/Functions/getCountryCode'
import Tooltip from '../ToolTip/ToolTip'
import LikeButton from '../LikeButton/LikeButton'
import { AuthContext } from '../../Contexts/AuthContext'

export const UserCard = ({ user }) => {
  console.log(`rander UserCard id:${user.id}`)
  const { userInfo } = useContext(AuthContext)
  const isLongName = user.userName.length > 16
  return (
    <article className='userCard'>
      <div className='leftUserInfo'>
        <div className='imgNameCont'>
          <img className='profileImg' src={user.picture} alt='userPicture' />
          <h3
            style={{ fontSize: isLongName ? '0.9rem' : '1rem' }}
            className='nameUserCard'
          >
            {user.userName}
          </h3>
        </div>
        <ul className='iconsProfileCardCont'>
          <li>
            <Tooltip text={'Santi/Manu, Functionality in progress'}>
              <img
                className='iconsProfileCard'
                src='https://res.cloudinary.com/digcf0lad/image/upload/v1730644625/chat_w0wcea.png'
                alt='contact'
              />
            </Tooltip>
          </li>
          <li>
            <Tooltip
              text={
                userInfo
                  ? user.availability
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
              user={{ id: user.id, name: user.userName }}
              className='iconsProfileCard'
              // tooltipTex={
              //   userInfo
              //     ? ('Click, to add Favorites')
              //     : 'Go Register, to be able to add Favorites'
              // }
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
            <p>{user.location.city}, </p>

            <p>{getCountryCode(user.location.country)}</p>
          </h4>
        </div>
        <div className='skillsInfoCont'>
          <h4>Skill to Learn:</h4>
          <ul>
            {user.toLearn.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h4>Skill to teach:</h4>
          <ul>
            {user.toTeach.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='aditionalInfoCont'>
          <h4>Aditional Info:</h4>
          <p>{user.aditionalInfo}</p>
        </div>
      </div>
    </article>
  )
}
