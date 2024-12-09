import React, { createContext, useState, useContext } from 'react'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null) //
  const [hasUnreadNotification, setHasUnreadNotification] = useState(null)
  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        hasUnreadNotification,
        setHasUnreadNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext)
}
