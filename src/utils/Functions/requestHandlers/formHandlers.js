import { toast } from 'react-toastify'
import { registerRequest } from '../../API/Requests/authEndpoints/register'
import { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthContext'
import { loginRequest } from '../../API/Requests/authEndpoints/login'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
  const { handleAuthSuccess, currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // const defaultValues = {
  //   // name: currentUser?.user.name || '',
  //   // email: currentUser?.user.email || '',
  //   // skillToLearn: currentUser?.user.skillToLearn || '',
  //   // origin: currentUser?.user.additionalInfo?.origin || '',
  //   // age: currentUser?.user.additionalInfo?.age || '',
  //   // whatsapp: currentUser?.user.additionalInfo?.contactInfo?.whatsapp || '',
  //   // instagram: currentUser?.user.additionalInfo?.contactInfo?.instagram || ''
  //   name: currentUser?.user.name,
  //   email: currentUser?.user.email,
  //   skillToLearn: currentUser?.user.skillToLearn,
  //   origin: currentUser?.user.additionalInfo?.origin,
  //   age: currentUser?.user.additionalInfo?.age,
  //   whatsapp: currentUser?.user.additionalInfo?.contactInfo?.whatsapp,
  //   instagram: currentUser?.user.additionalInfo?.contactInfo?.instagram
  // }

  const submitRegister = async (data) => {
    const formData = new FormData()
    const registerFields = [
      'userName',
      'email',
      'password',
      'skillToLearn',
      'profilePicture'
    ]
    registerFields.forEach((field) => {
      if (field === 'profilePicture' && data.profilePicture?.[0]) {
        formData.append('profilePicture', data.profilePicture[0])
      } else if (data[field]) {
        formData.append(field, data[field])
      }
    })

    try {
      const response = await registerRequest(formData)
      if (response.error) {
        toast.error(response.error)
      } else {
        const loginData = {
          email: data.email,
          password: data.password
        }
        try {
          const responseLogin = await loginRequest(loginData)

          if (responseLogin.error) {
            toast.error(responseLogin.error)
          } else {
            toast.success(
              `Welcome ${
                responseLogin.user.name.split(' ')[0].charAt(0).toUpperCase() +
                responseLogin.user.name.split(' ')[0].slice(1).toLowerCase()
              }, you're  successfully Registered and loged`
            )
            handleAuthSuccess(responseLogin)

            navigate('/SkillsPool')
          }
        } catch (error) {
          console.error('Error in submitLogin:', error)
        }
      }
    } catch (error) {
      console.error('Error in submitRegister:', error)
    }
  }
  return { submitRegister }
}

export const useLogin = () => {
  const { handleAuthSuccess } = useContext(AuthContext)
  const navigate = useNavigate()
  const submitLogin = async (data) => {
    const loginObjet = {
      email: data.emailLogin,
      password: data.passwordLogin
    }
    try {
      const response = await loginRequest(loginObjet)

      if (response.error) {
        toast.error(response.error)
      } else {
        toast.success(
          `Welcome ${
            response.user.name.split(' ')[0].charAt(0).toUpperCase() +
            response.user.name.split(' ')[0].slice(1).toLowerCase()
          }, you're successfully login`
        )

        handleAuthSuccess(response)
        navigate('/SkillsPool')
      }
    } catch (error) {
      console.error('Error in submitLogin:', error)
    }
  }

  return { submitLogin }
}
