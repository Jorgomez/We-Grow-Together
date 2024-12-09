import React, { createContext, useState, useContext } from 'react'

const ActiveComponentContext = createContext()

export const ActiveComponentProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('userDetails')
  const [selectedMessage, setSelectedMessage] = useState(null)
  // const [conversation, setConversation] = useState([])
  return (
    <ActiveComponentContext.Provider
      value={{
        activeComponent,
        setActiveComponent,
        selectedMessage,
        setSelectedMessage
        // conversation,
        // setConversation
      }}
    >
      {children}
    </ActiveComponentContext.Provider>
  )
}

export const useActiveComponent = () => useContext(ActiveComponentContext)
