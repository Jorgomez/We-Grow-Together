import React, { useContext, useState, useRef } from 'react'
import { useActiveComponent } from '../../../Contexts/ProfileContext'
import { AuthContext } from '../../../Contexts/AuthContext'
import './Asides.css'
import { useNotification } from '../../../Contexts/NotificationContext'
import { updateNotification } from '../../../utils/API/Requests/UserEndpoints/updateNotification'
import useClickOutside from '../../../Hooks/useClickOutside'
import { NavLink } from 'react-router-dom'
export const AsideLeft = () => {
  const { setActiveComponent, setSelectedMessage } = useActiveComponent()
  const [showMessages, setShowMessages] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const { setHasUnreadNotification, setNotification } = useNotification()
  const listRef = useRef(null)
  const messages = currentUser?.user.messages
  console.log(messages)

  const handleMessageList = async () => {
    setShowMessages(!showMessages)
    try {
      const response = await updateNotification(currentUser)
      setNotification(response.user.hasNewMessage)
      setHasUnreadNotification(response.user.hasNewMessage)
      console.log('handleMessageList', response)
    } catch (err) {
      console.error('Error updating notification:', err)
    }
  }

  const handleSelectMessage = (message) => {
    setSelectedMessage(message)

    setActiveComponent('messages')
  }

  useClickOutside(listRef, () => setShowMessages(false))
  return (
    <aside className='left flex' style={{ position: 'relative' }}>
      <h3
        style={{
          marginTop: '20%',
          marginBottom: '10%',
          width: '60%'
        }}
      >
        PROFILE
      </h3>

      <ul
        className='flex profileOptionsCont'
        style={{
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <li
          className='profileOptions flex'
          onClick={() => setActiveComponent('userDetails')}
        >
          <img
            className='iconAside'
            src='https://res.cloudinary.com/digcf0lad/image/upload/v1732881959/user_pn4rof.png'
            alt='iconUser'
          />{' '}
          <p>Your Details</p>
        </li>

        <li
          className='profileOptions flex'
          onClick={() => setActiveComponent('createSkillRequest')}
        >
          <img
            className='iconAside'
            src='https://res.cloudinary.com/digcf0lad/image/upload/v1732881683/add_w3uqre.png'
            alt='iconCreateEvent'
          />{' '}
          <p>Create Skill Req</p>
        </li>
        <li
          className='profileOptions flex'
          onClick={handleMessageList}
          ref={listRef}
          style={{ position: 'relative' }}
        >
          <img
            className='iconAside'
            src='https://res.cloudinary.com/digcf0lad/image/upload/v1732882145/email_lcveej.png'
            alt='iconMessages'
          />
          <p>Messages</p>
        </li>
        {showMessages && (
          <ul className='messageList'>
            {messages?.length > 0 ? (
              messages.map((message) => (
                <li
                  key={message._id}
                  className='messageItem flex'
                  onClick={() => handleSelectMessage(message)}
                >
                  <img
                    className='senderPicture'
                    src={message?.sender.profilePicture}
                    alt='sender img profile'
                  />
                  <p>{message.sender.name}</p>
                </li>
              ))
            ) : (
              <li className='messageItem flex'>
                <p className='noMessages'>No messages to display</p>
              </li>
            )}
          </ul>
        )}
      </ul>
    </aside>
  )
}

export const AsideRight = () => {
  const { setActiveComponent } = useActiveComponent()

  return (
    <aside className='right'>
      {' '}
      <ul className='flex profileActionsCont'>
        <li
          className='profileActions createReq flex'
          onClick={() => setActiveComponent('createSkillRequest')}
        >
          <img
            className='iconAsideRight'
            src='https://res.cloudinary.com/digcf0lad/image/upload/v1732881683/add_w3uqre.png'
            alt='iconCreateEvent'
          />{' '}
          <h4>Create Skill Request</h4>
        </li>
        <NavLink to={'/skillsPool'}>
          <li className='profileActions flex backToSkillPool'>
            <p className='deleteAccount'>Go to Skill Pool</p>
          </li>
        </NavLink>
      </ul>
    </aside>
  )
}
