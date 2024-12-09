import React, { useContext, useState } from 'react'

import { UserDetails } from '../UserDetails/UserDetails'
import { AuthContext } from '../../../Contexts/AuthContext'
import { CreateSkillRequest } from '../CreateSkillReq/CreateSkillReq'
import { Messages } from '../Messages/Messages'
import { useActiveComponent } from '../../../Contexts/ProfileContext'

export const MainContent = () => {
  const { currentUser } = useContext(AuthContext)
  const { activeComponent } = useActiveComponent()

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'userDetails':
        return <UserDetails currentUser={currentUser} />
      case 'createSkillRequest':
        return <CreateSkillRequest currentUser={currentUser} />
      case 'messages':
        return <Messages currentUser={currentUser} />
      default:
        return <UserDetails />
    }
  }

  return (
    <section className='mainContent flex'>
      {' '}
      {renderActiveComponent('userDetails')}
    </section>
  )
}
