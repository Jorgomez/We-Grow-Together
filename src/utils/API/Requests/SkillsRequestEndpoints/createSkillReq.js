import { API } from '../../API'

export const createSkllReq = async (formData, currentUser) => {
  const token = currentUser.token

  try {
    const response = await API({
      endpoint: '/skillRequests/',
      method: 'POST',
      body: formData,
      isJSON: false,
      token: token
    })

    if (response.error) {
      throw new Error(response.error || 'createSkllReq failed')
    }

    console.log('Skill request created successfully:', response)

    return response
  } catch (error) {
    console.error('Error in createSkillReq:', error.message)
    return { error: error.message }
  }
}
