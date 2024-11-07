import React from 'react'
import './SkillsPool.css'
import { UserCard } from '../../Components/UserCard/UserCard'
import { users } from '../../Data/users'
import { Link } from 'react-router-dom'

const SkillsPool = () => {
  console.log('Rander Skill Pool')
  return (
    <main className='skillsPool'>
      <h2>Find your Mentor</h2>
      <section className='userCardsCont'>
        {users.map((user) => (
          <Link
            key={user.id}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <UserCard user={user} />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default SkillsPool
