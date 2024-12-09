import { dislike } from '../../API/Requests/genericRequest/dislike'
import { like } from '../../API/Requests/genericRequest/like'
import { toast } from 'react-toastify'

export const handlelike = async (
  toggleLike,
  skillRequest,

  currentUser
) => {
  try {
    const skillRequestId = skillRequest.id
    const currentUserId = currentUser.user._id

    const { response, response2, error } = await like(
      skillRequestId,
      currentUserId
    )

    if (error) {
      toast.error('Error updating likes.')
      return
    }
    toast.success(`${skillRequest.name.split(' ')[0]} added to your Favorites `)

    const updatedUser = {
      user: response,
      token: currentUser.token
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))

    toggleLike()
  } catch (error) {
    console.error('Error in handleLike:', error)
  }
}

export const handleDislike = async (
  toggleLike,
  skillRequest,

  currentUser
) => {
  try {
    const skillRequestId = skillRequest.id
    const currentUserId = currentUser.user._id

    const { response, response2, error } = await dislike(
      skillRequestId,
      currentUserId
    )

    if (error) {
      toast.error('Error updating likes.')
      return
    }
    toast.error(`Removed ${skillRequest.name.split(' ')[0]}, from Favorites`)

    const updatedUser = {
      user: response,
      token: currentUser.token
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))

    toggleLike()
  } catch (error) {
    console.error('Error in handleDisLike:', error)
  }
}
