import React, { useContext, useEffect, useState } from 'react'
import Tooltip from '../ToolTip/ToolTip'
// import { FavContext } from '../../Contexts/FavContext'
import { AuthContext } from '../../Contexts/AuthContext'
import { toast } from 'react-toastify'
import {
  handleDislike,
  handlelike
} from '../../utils/Functions/requestHandlers/likesHandlers'
import { like } from '../../utils/API/Requests/genericRequest/like'

const LikeButton = ({ skillRequest, className, tooltipTex }) => {
  console.log(`rander likebuTTON id:${skillRequest.id}`)
  const [isLiked, setIsliked] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const toggleLike = () => {
    setIsliked(!isLiked)
  }

  useEffect(() => {
    if (currentUser?.user?.likes?.includes(skillRequest.id)) {
      setIsliked(true)
    }
  }, [currentUser, skillRequest.id])

  const handleClick = async () => {
    if (!currentUser) {
      toast.error('You need to be logged in to like items.')
      return
    }
    !isLiked
      ? await handlelike(toggleLike, skillRequest, currentUser)
      : handleDislike(toggleLike, skillRequest, currentUser)
  }

  //   : toast.error(
  //       `Removed ${skillRequest.name.split(' ')[0]}, from Favorites`
  //     )

  return (
    <Tooltip
      text={
        currentUser
          ? isLiked
            ? 'Click to dislike'
            : 'Click to add Favorites'
          : 'Go Register, to be able to add Favorites'
      }
    >
      <img
        onClick={currentUser && handleClick}
        className={className}
        src={
          isLiked
            ? 'https://res.cloudinary.com/digcf0lad/image/upload/v1730644816/heart_3_dxiiqs.png'
            : 'https://res.cloudinary.com/digcf0lad/image/upload/v1730644770/heart_2_ngrvzg.png'
        }
        alt='likeIcon'
      />
    </Tooltip>
  )
}

export default LikeButton
