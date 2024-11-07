import React, { useContext } from 'react'
import { FavContext } from '../../Contexts/FavContext'
import { users } from '../../Data/users'
import { UserCard } from '../../Components/UserCard/UserCard'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import './Favorites.css'

const Favorites = () => {
  const { likes } = useContext(FavContext)
  const favoriteUsers = users.filter((user) => likes[user.id])

  const navigate = useNavigate()

  const navigateToPool = () => {
    navigate('/SkillsPool')
  }

  // console.log(favoriteUsers)

  return (
    <main className='favorites'>
      <h2>Profiles You’ll Love</h2>
      <section className='interestingsUsersCont'>
        {favoriteUsers.length > 0 ? (
          favoriteUsers.map((user) => (
            <Link
              key={user.id}
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <UserCard user={user} />{' '}
            </Link>
          ))
        ) : (
          <>
            <h3 className='noFavoritesYet'>
              No favorites here... yet! Start exploring.
            </h3>
            <Button fnc={navigateToPool} children={'Go to Skills Pool'} />
          </>
        )}
      </section>
    </main>
  )
}

export default Favorites
