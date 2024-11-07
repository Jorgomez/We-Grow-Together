import React, { createContext, useState } from 'react'

export const FavContext = createContext()

export const FavProvider = ({ children }) => {
  const [likes, setLikes] = useState({})

  const toggleLike = (userId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [userId]: !prevLikes[userId]
    }))
  }

  return (
    <FavContext.Provider value={{ likes, toggleLike }}>
      {children}
    </FavContext.Provider>
  )
}
