import React, { useState } from 'react'
import './Header.css'
import Nav from './Nav/Nav'
import Logo from './Logo/Logo'
import MenuMoBile from './MenuMovile/MenuMovile'

export const Header = () => {
  console.log('Header, Render ')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header>
      <Logo />
      <Nav isMobile={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      <MenuMoBile onClick={toggleMenu} />
    </header>
  )
}

export default Header
