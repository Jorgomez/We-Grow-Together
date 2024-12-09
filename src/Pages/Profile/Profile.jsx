import React from 'react'
import './Profile.css'
import {
  AsideLeft,
  AsideRight
} from '../../Components/ProfileComponents/Asides/Asides'
import { MainContent } from '../../Components/ProfileComponents/MainContent/MainContent'

export const Profile = () => {
  return (
    <main
      className='profile flex'
      // style={{ border: '1px solid white' }}
    >
      <AsideLeft />
      <MainContent />
      <AsideRight />
    </main>
  )
}
