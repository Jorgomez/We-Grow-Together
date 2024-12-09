import React, { useEffect, useRef, useState } from 'react'
import { getElementById } from '../../../utils/API/Requests/genericRequest/getElementById'
import { NavLink, useLocation } from 'react-router-dom'
import { updateNotification } from '../../../utils/API/Requests/UserEndpoints/updateNotification'
import { useNotification } from '../../../Contexts/NotificationContext'
import useClickOutside from '../../../Hooks/useClickOutside'

export const Notification = ({ currentUser }) => {
  console.log('render notification')
  const {
    notification,
    setNotification,
    hasUnreadNotification,
    setHasUnreadNotification
  } = useNotification()

  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const notRef = useRef(null)

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await getElementById(`/users/${currentUser.user._id}`)

        setNotification(response.hasNewMessage)
        setHasUnreadNotification(response.hasNewMessage)
        // const lastMessage =
        //   response.messages && response.messages.length > 0
        //     ? response.messages[response.messages.length - 1]
        //     : null

        console.log('response', response)
      } catch (err) {
        console.error('Error fetching fetchNotification :', err)
      }
    }
    fetchNotification()
  }, [location])

  const toggleMenu = async () => {
    if (!isOpen && hasUnreadNotification) {
      try {
        await updateNotification(currentUser)
        setHasUnreadNotification(false)
      } catch (err) {
        console.error('Error updating notification:', err)
      }
    }
    setIsOpen(!isOpen)
  }

  useClickOutside(notRef, () => setIsOpen(false))

  return (
    <div
      ref={notRef}
      className='flex'
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <img
        src='https://res.cloudinary.com/digcf0lad/image/upload/v1733525494/bell_4_g2rjo9.png'
        alt='Notification Bell'
        style={{
          width: '25px',
          cursor: 'pointer'
        }}
        onClick={toggleMenu}
      />

      {hasUnreadNotification && (
        <p
          style={{
            textAlign: 'center',
            width: '20px',
            height: '20px',
            fontSize: '15px',
            color: 'red',
            position: 'absolute',
            borderRadius: '50%',
            background: 'white',
            right: '-10px',
            top: '-3px'
          }}
        >
          1
        </p>
      )}

      {isOpen && (
        <div
          className='notification'
          style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        >
          {notification ? (
            <NavLink to='/Profile'>
              <p style={{ textDecoration: 'underline' }}>
                You have a new message. Click to read
              </p>
            </NavLink>
          ) : (
            <p>No notifications</p>
          )}
        </div>
      )}
    </div>
  )
}
