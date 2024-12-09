import React from 'react'
import './Loading.css'
export const Loading = () => {
  return (
    <div className='loadingContainer' style={{ position: 'absolute' }}>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>
  )
}
