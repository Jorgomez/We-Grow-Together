import { createContext, useReducer, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  const toggleLogin = () => setIsLogin((prev) => !prev)

  const registerUser = (userData) => {
    setUserInfo(userData)
    setIsLogin(true)
  }

  // const logoutUser = () => {
  //   setUser(null);
  //   setIsLogin(false);
  // };

  return (
    <AuthContext.Provider
      value={{ isLogin, toggleLogin, userInfo, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
