import { createMessageReq } from '../../API/Requests/MessageEndpoints/createMessageReq'
import { toast } from 'react-toastify'
export const submitMessage = async ({
  data,
  currentUser,
  skillRequest,
  shareContact,
  OriginalMessage
}) => {
  const contactInfo = shareContact
    ? Object.fromEntries(
        Object.entries({
          whatsapp: data.whatsApp,
          instagram: data.instagram,
          email: data.email
        }).filter(([_, value]) => value)
      )
    : null

  const messageObjet = {
    recipient: OriginalMessage
      ? OriginalMessage.sender._id
      : skillRequest.user._id,
    skillRequest: skillRequest._id,
    messageContent: data.message,
    ...(OriginalMessage && { originalMessage: OriginalMessage._id }),
    ...(contactInfo && { contactInfo })
  }
  console.log('Message Object to Send:', messageObjet)
  try {
    const response = await createMessageReq(
      messageObjet,
      currentUser,
      OriginalMessage
    )

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success(
        ` Message sended to ${
          OriginalMessage
            ? OriginalMessage.sender.name.split(' ')[0]
            : skillRequest.user.name.split(' ')[0]
        },`
      )

      return response
    }
  } catch (error) {
    console.error('Error in submitMessage function:', error)
  }
}
