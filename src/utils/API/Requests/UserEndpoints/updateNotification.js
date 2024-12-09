import { API } from '../../API'

export const updateNotification = async (currentUser) => {
  const token = currentUser.token
  try {
    const updateNotification = { hasNewMessage: false }
    const response = await API({
      endpoint: `/users/${currentUser.user._id}`,
      method: 'PUT',
      body: updateNotification,
      token: token
    })

    if (response.error) {
      throw new Error(response.error || 'updateNotification failed')
    }
    console.log(' update Notification on User successfully:', response)

    return response
  } catch (error) {
    console.error('Error in updateNotification function:', error.message)
    return { error: error.message }
  }
}
