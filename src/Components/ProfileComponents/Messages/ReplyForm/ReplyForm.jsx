import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../../Contexts/AuthContext'
import { submitMessage } from '../../../../utils/Functions/requestHandlers/messageHandler'
import { useActiveComponent } from '../../../../Contexts/ProfileContext'

export const ReplyForm = ({ originalMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({})
  const { currentUser } = useContext(AuthContext)

  const { setSelectedMessage } = useActiveComponent()

  const submit = async (data) => {
    const reply = await submitMessage({
      data,
      currentUser,
      skillRequest: originalMessage.skillRequest,
      OriginalMessage: originalMessage
    })

    const updatedMessage = { ...originalMessage, reply: { ...reply } } // Copia profunda
    setSelectedMessage(updatedMessage)

    console.log(' que guardadmos', updatedMessage)
    setSelectedMessage(updatedMessage)
    reset()
  }

  return (
    <form className='replyInput' onSubmit={handleSubmit(submit)}>
      <textarea
        className='replyTextarea'
        placeholder='Write your reply here...'
        {...register('message', { required: 'Write a message to send it' })}
      />

      <button className='sendReplyButton'>Send Reply</button>
    </form>
  )
}
