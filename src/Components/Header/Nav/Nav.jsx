import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import useClickOutside from '../../../Hooks/useClickOutside'
import { AuthContext } from '../../../Contexts/AuthContext'

const Nav = ({ isMobile, closeMenu }) => {
  console.log('Nav, Render')
  const { isRegistered, currentUser, logout } = useContext(AuthContext)
  const menuRef = useRef(null)
  useClickOutside(menuRef, closeMenu)
  return (
    <nav ref={menuRef} className={`nav${isMobile ? 'Open' : ''}`}>
      <ul>
        <li>
          <NavLink to='/' onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/SkillsPool' onClick={closeMenu}>
            Skills Pool
          </NavLink>
        </li>

        {currentUser && (
          <li className='flex' style={{ gap: '20px' }}>
            <NavLink to='/Profile' onClick={closeMenu}>
              {currentUser.user.name.split(' ')[0].charAt(0).toUpperCase() +
                currentUser.user.name.split(' ')[0].slice(1).toLowerCase()}
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to='/Register'
            onClick={() => {
              if (isRegistered && currentUser) {
                logout()
              }
              closeMenu()
            }}
          >
            {isRegistered ? (currentUser ? 'Logout' : 'Login') : 'Register'}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
