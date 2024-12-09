import { API } from '../../API'

export const dislike = async (skillRequestId, currentUserID) => {
  const idToRemoveFromUser = { likes: skillRequestId }
  try {
    const response = await API({
      endpoint: `/users/disLike/${currentUserID}`,
      method: 'PUT',
      body: idToRemoveFromUser,
      isJSON: true
    })
    if (response.error) {
      throw new Error(response.error || 'problems adding likes to user model ')
    }
    // removeLoading()

    const idToRemoveFromSkillReq = { likes: currentUserID }
    const response2 = await API({
      endpoint: `/skillRequests/disLike/${skillRequestId}`,
      method: 'PUT',
      body: idToRemoveFromSkillReq,
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
