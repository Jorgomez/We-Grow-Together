import React, { createContext, useState } from 'react'
export const FavContext = createContext()

export const FavProvider = ({ children }) => {
  const [likes, setLikes] = useState({})

  const toggleLike = (skillRequestiD) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [skillRequestiD]: !prevLikes[skillRequestiD]
    }))
  }

  return (
    <FavContext.Provider value={{ likes, toggleLike }}>
      {children}
    </FavContext.Provider>
  )
}
