import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { LoginInputs } from '../LoginForm/LoginInputs'
import { RegisterInputs } from '../RegisterInputs/RegisterInputs'
import Button from '../Button/Button'
import { useAuthForm } from '../../Hooks/useAuthForm'
import {
  handleLoginSubmit,
  handleRegisterSubmit
} from '../../utils/Functions/formHandlers'
import ErrorsMessagesForm from '../ErrorMessagesForm/ErrorsMessagesForm'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthForm = () => {
  console.log('AuthForm render')
  const { isLogin, registerUser } = useContext(AuthContext)
  const { refs, validateInputs, errors } = useAuthForm()
  const navigate = useNavigate()
  // const handleSubmit = isLogin
  //   ? handleLoginSubmit(refs, validateInputs)
  //   : handleRegisterSubmit(refs, validateInputs, navigate, registerUser)

  const handleSubmit = isLogin
    ? () => {
        toast.error(
          `Santi/Manu, button disabled, I'm working on this functionality. `
        )
      }
    : handleRegisterSubmit(refs, validateInputs, navigate, registerUser)
  return (
    <form className='reg-LogForm'>
      {/* {isLogin && <Logo />} */}
      <h2 className='authTitle'>
        {isLogin ? 'Login Here!' : 'Register Here!'}
      </h2>
      {isLogin ? (
        <LoginInputs refs={refs} errors={errors} />
      ) : (
        <RegisterInputs refs={refs} errors={errors} />
      )}
      <ErrorsMessagesForm errors={errors} />
      <Button
        fnc={handleSubmit}
        disabled={isLogin}
        children={isLogin ? 'Login' : 'Register'}
        TooltipTex={isLogin && 'Santi/Manu, functionality in progress'}
      />
    </form>
  )
}
