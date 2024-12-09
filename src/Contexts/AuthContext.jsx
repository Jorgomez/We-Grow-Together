import { createContext, useEffect, useReducer, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user')
    if (userLocalStorage) {
      setCurrentUser(JSON.parse(userLocalStorage))
      setIsRegistered(true)
    }
  }, [])
  const handleAuthSuccess = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setCurrentUser(userData)
    setIsRegistered(true)
  }

  const logout = () => {
    localStorage.clear()
    setCurrentUser(null)
    setIsRegistered(false)
  }

  const toggleLogin = () => setIsRegistered((prev) => !prev)

  return (
    <AuthContext.Provider
      value={{
        isRegistered,
        toggleLogin,
        currentUser,
        handleAuthSuccess,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
