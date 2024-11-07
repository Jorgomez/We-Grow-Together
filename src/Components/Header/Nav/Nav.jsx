import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import useClickOutside from '../../../Hooks/useClickOutside'
import { AuthContext } from '../../../Contexts/AuthContext'

const Nav = ({ isMobile, closeMenu }) => {
  console.log('Nav, Render')
  const { isLogin, userInfo } = useContext(AuthContext)

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
        {userInfo && (
          <li>
            <NavLink to='/Favorites' onClick={closeMenu}>
              Favorites
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to='/Register' onClick={closeMenu}>
            {isLogin
              ? userInfo
                ? userInfo.userName.split(' ')[0]
                : 'Login'
              : 'Register'}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
