import { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthContext'
import { createSkllReq } from '../../API/Requests/SkillsRequestEndpoints/createSkillReq'
import { toast } from 'react-toastify'
import { addSkillReqToUser } from '../../API/Requests/UserEndpoints/addSkillRequest'

export const useCreateSkillReq = () => {
  const { currentUser, handleAuthSuccess } = useContext(AuthContext)
  const submitCreateSkillReq = async (data) => {
    const formData = new FormData()

    const skillReqFields = [
      'skillToLearn',
      'skillToTeach',
      'mode',
      'availability',
      'city',
      'country',
      'additionalInfo',
      'picture',
      'useProfilePicture'
    ]
    skillReqFields.forEach((field) => {
      if (field === 'city' || field === 'country') {
        formData.append(`location.${field}`, data[field])
      }
      if (field === 'picture') {
        if (data.useProfilePicture) {
          formData.append('picture', currentUser.user.profilePicture)
        } else if (data.picture?.[0]) {
          formData.append('picture', data.picture[0])
        } else {
          formData.append(
            'picture',
            'https://res.cloudinary.com/digcf0lad/image/upload/v1711051610/west_bowl_asp_mkvrd1.jpg'
          )
        }
      } else if (data[field]) {
        formData.append(field, data[field])
      }
    })

    try {
      const response = await createSkllReq(formData, currentUser)
      if (response.error) {
        toast.error(response.error)
        return null
      } else {
        // toast.success(
        //   `${
        //     currentUser.user.name.split(' ')[0]
        //   },  your new skill is up to come. Congrats!!`
        // )
        const addSkillReqResponse = await addSkillReqToUser(
          response._id,
          currentUser.user._id
        )

        if (addSkillReqResponse.error) {
          console.log(addSkillReqResponse.error)
        } else {
          console.log(
            'Skill request added to your profile!',
            addSkillReqResponse.response
          )

          const updateStore = {
            user: addSkillReqResponse.response,
            token: currentUser.token
          }

          handleAuthSuccess(updateStore)
        }

        return response
      }
    } catch (error) {
      console.error('Error in submitCreateSkillReq:', error)
    }
  }

  return { submitCreateSkillReq }
}
