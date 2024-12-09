import { API } from '../../API'

export const createMessageReq = async (
  message,
  currentUser,
  OriginalMessage
) => {
  const token = currentUser.token

  try {
    const response = await API({
      endpoint: '/messages/',
      method: 'POST',
      body: message,
      token
    })

    if (response.error) {
      throw new Error(response.error || 'Message creation failed')
    }

    console.log('Message created successfully:', response)

    const newMessage = { messages: [response._id] }
    const response1 = await API({
      endpoint: `/users/addElementId/${response.recipient}`,
      method: 'PUT',
      body: newMessage
    })
    if (response1.error) {
      throw new Error(response1.error || 'problems adding messageId to user  ')
    }
    console.log('MessageId added successfully to User:', response1)

    if (OriginalMessage) {
      const replyId = { reply: response._id }
      const response2 = await API({
        endpoint: `/messages/${OriginalMessage._id}`,
        method: 'PUT',
        body: replyId
      })
      if (response2.error) {
        throw new Error(
          response2.error || 'problems adding reply  to message  '
        )
      }
      console.log(
        'MessageId added successfully to reply on Message:',
        response2
      )
    }

    return { response, response1 }
  } catch (error) {
    console.error('Error in Message Creation Function:', error.message)
    return { error: error.message }
  }
}
