import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import Button from '../Button/Button'
import Logo from '../Header/Logo/Logo'

export const SwitcherForm = () => {
  console.log('Swhitcher Rander')
  const { isRegistered, toggleLogin } = useContext(AuthContext)

  return (
    <article
      className={isRegistered ? 'artLogin' : 'artReg'}
      style={{
        backgroundImage: isRegistered
          ? `url('https://res.cloudinary.com/digcf0lad/image/upload/v1730026023/Background_Image_1_vcjlfr.webp')`
          : `url('https://res.cloudinary.com/digcf0lad/image/upload/v1727533147/18a4e9bd9160b9fd063c2d8ff65121d6_fj5g5p.jpg')`,
        backgroundSize: 'cover',
        width: '50%'
      }}
    >
      {' '}
      <div className='switchertTP'>
        <Logo />
        <h3 className='switchert'>
          {isRegistered ? 'Welcome Back' : 'Join Us'}
        </h3>
        <div className='switcherP'>
          {isRegistered ? (
            <>
              <p>
                Log in to share your skills, learn something new, and connect
                with a community of passionate learners.
              </p>

              <p className='switcherP-final'>
                Not registered? Join Us and start your skill exchange journey
                today!
              </p>
            </>
          ) : (
            <>
              <p>
                Connect with people who want to teach and learn. Share your
                skills, discover new talents, and grow together in a
                collaborative community.
              </p>

              <p className='switcherP-final'>
                If you are registered, go to Login.
              </p>
            </>
          )}
        </div>
        <Button
          fnc={toggleLogin}
          children={isRegistered ? 'Go to Register' : 'Go to Login'}
        />
      </div>
    </article>
  )
}
