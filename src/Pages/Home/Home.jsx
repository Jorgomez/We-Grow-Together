import React from 'react'
import './Home.css'
import MainSearch from '../../Components/MainSearch/MainSearch'

const Home = () => {
  console.log('home, render')

  return (
    <main className='home'>
      <h2 className='hero-text'>Let's Grow together </h2>
      <MainSearch />

      <div className='abstract'>
        <img
          src='https://res.cloudinary.com/digcf0lad/image/upload/v1733837033/Group_24_v4jjbo.webp'
          alt=''
        />
      </div>
    </main>
  )
}

export default Home
