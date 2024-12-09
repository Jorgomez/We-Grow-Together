import { API } from '../../API'

export const like = async (skillRequestId, currentUserID) => {
  const newLikeUser = { likes: [skillRequestId] }
  try {
    const response = await API({
      endpoint: `/users/addElementId/${currentUserID}`,
      method: 'PUT',
      body: newLikeUser,
      isJSON: true
    })
    if (response.error) {
      throw new Error(response.error || 'problems adding likes to user model ')
    }
    // removeLoading()

    const newLikeSkillReq = { likes: [currentUserID] }
    const response2 = await API({
      endpoint: `/skillRequests/like/${skillRequestId}`,
      method: 'PUT',
      body: newLikeSkillReq,
      isJSON: true
      // token
    })

    if (response2.error) {
      throw new Error(
        response.error || 'problems adding likes to SkillReq model'
      )
    }

    console.log(response, response2)

    return { response, response2 }
  } catch (error) {
    console.error('Error adding likes function:', error.message)
    return { error: error.message }
  }
}
