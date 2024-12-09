import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

import Header from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import AuthPage from './Pages/AuthPage/AuthPage'
import SkillsPool from './Pages/SkillsPool/SkillsPool'
import { Profile } from './Pages/Profile/Profile'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ChakraProvider } from '@chakra-ui/react'

export const App = () => {
  console.log('APP, Render ')
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<AuthPage />} />
        <Route path='/SkillsPool' element={<SkillsPool />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <Footer />
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar />
    </>
  )
}
