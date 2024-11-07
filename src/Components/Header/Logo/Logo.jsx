import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img
        className='logo'
        src='https://res.cloudinary.com/digcf0lad/image/upload/v1711761580/Portafolio/logo_1_1_kczsvy.png'
        alt='logo'
      />
    </Link>
  )
}

export default Logo
