import React, { useContext, useEffect } from 'react'
import Tooltip from '../ToolTip/ToolTip'
import { FavContext } from '../../Contexts/FavContext'
import { AuthContext } from '../../Contexts/AuthContext'
import { toast } from 'react-toastify'

const LikeButton = ({ user, className, tooltipTex }) => {
  console.log(`rander likebuTTON id:${user.id}`)
  const { likes, toggleLike } = useContext(FavContext)
  const isLiked = likes[user.id] || false
  const { userInfo } = useContext(AuthContext)
  const handleClick = () => {
    toggleLike(user.id)

    !isLiked
      ? toast.success(`${user.name.split(' ')[0]} added to your Favorites `)
      : toast.error(`Removed ${user.name.split(' ')[0]},from Favorites`)

    console.log('user liekd', user)
  }

  return (
    <Tooltip
      text={
        userInfo
          ? isLiked
            ? 'Click to dislike'
            : 'Click to add Favorites'
          : 'Go Register, to be able to add Favorites'
      }
    >
      <img
        onClick={userInfo && handleClick}
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
