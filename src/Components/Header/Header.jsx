import React, { useContext, useState } from 'react'
import './Header.css'
import Nav from './Nav/Nav'
import Logo from './Logo/Logo'
import MenuMoBile from './MenuMovile/MenuMovile'
import { Notification } from './Notification/Notification'
import { AuthContext } from '../../Contexts/AuthContext'

export const Header = () => {
  console.log('Header, Render ')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const { currentUser } = useContext(AuthContext)

  return (
    <header>
      <div className='logoNavCont'>
        <Logo />
        <Nav isMobile={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      </div>
      {currentUser && <Notification currentUser={currentUser} />}

      <MenuMoBile onClick={toggleMenu} />
    </header>
  )
}

export default Header
