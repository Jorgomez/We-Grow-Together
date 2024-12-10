import React from 'react'
import './Home.css'
import MainSearch from '../../Components/MainSearch/MainSearch'

const Home = () => {
  console.log('home, render')

  return (
    <main className='home'>
      <h2 className='hero-text'>Let's Grow together </h2>
      <MainSearch />
    </main>
  )
}

export default Home
