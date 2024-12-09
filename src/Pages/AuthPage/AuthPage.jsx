import React, { useContext, useState } from 'react'
import Button from '../../Components/Button/Button'
import './AuthPage.css'
import { AuthContext } from '../../Contexts/AuthContext'
import { SwitcherForm } from '../../Components/SwitcherForm/SwitcherForm'
import { AuthForm } from '../../Components/AuthForm/AuthForm'

const AuthPage = () => {
  console.log('Register, render')
  const { isRegistered, toggleLogin } = useContext(AuthContext)

  return (
    <main className='authPage'>
      <Button
        className='button switcherFormButton-Movile'
        fnc={toggleLogin}
        children={isRegistered ? 'Go to Register' : 'Go to Login'}
      />
      <section
        className='auth-Section'
        style={{ flexDirection: isRegistered ? 'row' : 'row-reverse' }}
      >
        <SwitcherForm />
        <AuthForm />
      </section>
    </main>
  )
}

export default AuthPage
