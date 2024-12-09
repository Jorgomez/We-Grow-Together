import { useForm } from 'react-hook-form'
import { RegisterInputs } from '../RegisterInputs/RegisterInputs'
import Button from '../Button/Button'
import { AuthContext } from '../../Contexts/AuthContext'
import { useContext, useState } from 'react'
import { LoginInputs } from '../LoginForm/LoginInputs'
import {
  useLogin,
  useRegister
} from '../../utils/Functions/requestHandlers/formHandlers'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

export const AuthForm = () => {
  console.log('AuthForm render')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { isRegistered } = useContext(AuthContext)
  const { submitRegister } = useRegister()
  const { submitLogin } = useLogin()
  const [loading, setLoading] = useState(false)
  const submit = async (data) => {
    setLoading(true)
    if (isRegistered) {
      await submitLogin(data)
    } else {
      await submitRegister(data)
    }
    setLoading(false)
  }

  return (
    <form className='reg-LogForm' onSubmit={handleSubmit(submit)}>
      {loading && <Loading />}
      <h2 className='authTitle'>
        {isRegistered ? 'Login Here!' : 'Register Here!'}
      </h2>
      {isRegistered ? (
        <LoginInputs register={register} errors={errors} />
      ) : (
        <RegisterInputs register={register} errors={errors} />
      )}

      <Button children={isRegistered ? 'Login' : 'Register'} />
    </form>
  )
}
