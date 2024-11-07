import React, { useContext } from 'react'
import Button from '../../Components/Button/Button'
import './AuthPage.css'
import { AuthContext } from '../../Contexts/AuthContext'
import { SwitcherForm } from '../../Components/SwitcherForm/SwitcherForm'
import { AuthForm } from '../../Components/AuthForm/AuthForm'

const AuthPage = () => {
  console.log('Register, render')
  const { isLogin, toggleLogin } = useContext(AuthContext)

  return (
    <main className='authPage'>
      <Button
        className='button switcherFormButton-Movile'
        fnc={toggleLogin}
        children={isLogin ? 'Go to Register' : 'Go to Login'}
      />
      <section
        className='auth-Section'
        style={{ flexDirection: isLogin ? 'row' : 'row-reverse' }}
      >
        <SwitcherForm />
        <AuthForm />
      </section>
    </main>
  )
}

export default AuthPage
