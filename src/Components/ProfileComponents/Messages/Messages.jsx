import React, { useEffect, useState } from 'react'
import './Messages.css'
import { useActiveComponent } from '../../../Contexts/ProfileContext'
import { format, set } from 'date-fns'
import { ReplyForm } from './ReplyForm/ReplyForm'
import { getElementById } from '../../../utils/API/Requests/genericRequest/getElementById'
import { Loading } from '../../Loading/Loading'

export const Messages = ({ currentUser }) => {
  const { selectedMessage } = useActiveComponent()
  const [messageDetails, setMessageDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true)
      try {
        const response = await getElementById(
          `/messages/${selectedMessage._id}`
        )
        setMessageDetails(response)
        setLoading(false)
        console.log('response', response)
      } catch (err) {
        console.error('Error fetching message details:', err)
      }
    }
    fetchMessage()
  }, [selectedMessage])

  return (
    <div className='messages flex'>
      {loading && <Loading />}

      {!loading && messageDetails?.originalMessage && (
        <div className='originalMessageCont flex'>
          <div className='receivedMessage flex'>
            <div className='flex headerMsg'>
              <h4>You</h4>
              <span className='dateMessage'>
                {messageDetails?.originalMessage.sentAt &&
                  `on ${format(
                    new Date(messageDetails.originalMessage.sentAt),
                    'dd/MM/yyyy'
                  )}, at ${format(
                    new Date(messageDetails.originalMessage.sentAt),
                    'HH:mm'
                  )}`}
              </span>
            </div>
            <p>{messageDetails.originalMessage.messageContent}</p>
          </div>
          <img
            className='senderImg'
            src={currentUser?.user.profilePicture}
            alt='Sender'
          />
        </div>
      )}
      {!loading && (
        <div className='receivedMessageCont flex'>
          <img
            className='senderImg'
            src={messageDetails?.sender.profilePicture}
            alt='Sender'
          />
          <div className='receivedMessage flex'>
            <div className='flex headerMsg'>
              <h4>{selectedMessage?.sender.name} </h4>
              <span className='dateMessage'>
                {selectedMessage?.sentAt &&
                  `on ${format(
                    new Date(selectedMessage?.sentAt),
                    'dd/MM/yyyy'
                  )}, at ${format(new Date(selectedMessage?.sentAt), 'HH:mm')}`}
              </span>
            </div>
            <p>{selectedMessage.messageContent}</p>
          </div>
        </div>
      )}

      {!loading && messageDetails?.reply && (
        <div className='replyMessageCont flex'>
          <div className='replyMessage flex'>
            <div className='flex headerMsg'>
              <h4>You</h4>
              <span className='dateMessage'>
                {messageDetails?.reply?.sentAt &&
                  `on ${format(
                    new Date(messageDetails?.reply.sentAt),
                    'dd/MM/yyyy'
                  )}, at ${format(
                    new Date(messageDetails?.reply.sentAt),
                    'HH:mm'
                  )}`}
              </span>
            </div>
            <p>{messageDetails?.reply.messageContent}</p>
          </div>
          <img
            className='senderImg'
            src={currentUser?.user.profilePicture}
            alt='Sender'
          />
        </div>
      )}

      {!selectedMessage.originalMessage && !messageDetails?.reply && (
        <ReplyForm originalMessage={selectedMessage} />
      )}
    </div>
  )
}
