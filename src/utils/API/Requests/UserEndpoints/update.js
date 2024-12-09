import { API } from '../../API'

export const updateRequest = async (formData, currentUser) => {
  const token = currentUser.token

  try {
    const response = await API({
      endpoint: `/users/${currentUser.user._id}`,
      method: 'PUT',
      body: formData,
      isJSON: false,
      token
    })

    if (response.error) {
      throw new Error(response.error || 'Updated failed')
    }
    console.log('User updated successfully:', response)

    return response
  } catch (error) {
    console.error('Error in updateRequest:', error.message)
    return { error: error.message }
  }
}
