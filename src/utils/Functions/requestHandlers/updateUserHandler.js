import { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthContext'
import { toast } from 'react-toastify'
import { updateRequest } from '../../API/Requests/UserEndpoints/update'

export const useUpdateUser = () => {
  const { handleAuthSuccess, currentUser } = useContext(AuthContext)
  // const navigate = useNavigate()
  const defaultValues = {
    name: currentUser?.user.name,
    email: currentUser?.user.email,
    skillToLearn: currentUser?.user.skillToLearn,
    origin: currentUser?.user.additionalInfo?.origin,
    age: currentUser?.user.additionalInfo?.age || '',
    whatsapp: currentUser?.user.additionalInfo?.contactInfo?.whatsapp || '',
    instagram: currentUser?.user.additionalInfo?.contactInfo?.instagram || ''
  }

  const submitUpdated = async (data) => {
    const formData = new FormData()

    const userFields = ['name', 'email', 'skillToLearn', 'profilePicture']
    userFields.forEach((field) => {
      if (field === 'profilePicture') {
        const file = data.profilePicture?.[0]
        if (file) {
          formData.append('profilePicture', file)
        }
      } else if (data[field]) {
        formData.append(field, data[field])
      }
    })

    const additionalInfoFields = ['origin', 'age', 'whatsapp', 'instagram']
    additionalInfoFields.forEach((field) => {
      if (data[field]) {
        if (field === 'whatsapp' || field === 'instagram') {
          formData.append(`additionalInfo.contactInfo.${field}`, data[field])
        } else {
          formData.append(`additionalInfo.${field}`, data[field])
        }
      }
    })

    try {
      const response = await updateRequest(formData, currentUser)
      if (response.error) {
        toast.error(response.error)
      } else {
        toast.success(
          `${
            response.user.name.split(' ')[0]
          }, your information was successfully updated `
        )

        const updateStore = {
          user: response.user,
          token: currentUser.token
        }

        handleAuthSuccess(updateStore)

        console.log('submitUpdated3237398728923DHK', response)

        // navigate('/SkillsPool')
      }
    } catch (error) {
      console.error('Error in submitUpdated:', error)
    }
  }

  return { submitUpdated, defaultValues }
}
