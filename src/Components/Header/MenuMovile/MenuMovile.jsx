import React from 'react'

const MenuMoBile = ({ onClick }) => {
  const handleClick = (event) => {
    event.stopPropagation()
    onClick()
  }
  return (
    <img
      src='https://res.cloudinary.com/digcf0lad/image/upload/v1711759520/Portafolio/Group_8_hfldi5.png'
      alt='Menu'
      className='menu-icon'
      onClick={handleClick}
    />
  )
}

export default MenuMoBile
