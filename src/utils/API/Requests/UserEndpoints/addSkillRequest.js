import { API } from '../../API'

export const addSkillReqToUser = async (skillRequestId, currentUserID) => {
  const newSkillReq = { skillRequests: [skillRequestId] }
  try {
    const response = await API({
      endpoint: `/users/addElementId/${currentUserID}`,
      method: 'PUT',
      body: newSkillReq,
      isJSON: true
    })
    if (response.error) {
      throw new Error(response.error || 'problems adding likes to user model ')
    }

    console.log(response)

    return { response }
  } catch (error) {
    console.error('Error addSkillReqToUser function:', error.message)
    return { error: error.message }
  }
}
