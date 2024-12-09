import {
  extendTheme,
  ChakraProvider,
  FormControl,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Button,
  Textarea,
  FormLabel,
  ModalFooter,
  Flex,
  Image,
  Text,
  Checkbox
} from '@chakra-ui/react'
import React, { useState } from 'react'
import ContactInputs from './ContactInputs/ContactInputs'
import { AuthContext } from '../../Contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { validationMessage } from '../../utils/Functions/validation'
import { submitMessage } from '../../utils/Functions/requestHandlers/messageHandler'

export const MessageModal = ({
  isOpen,
  onClose,
  currentUser,
  skillRequest
}) => {
  const [shareContact, setShareContact] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({})

  if (!currentUser) {
    return
  }

  const submit = async (data) => {
    console.log(data)
    console.log('Share contact?', shareContact)

    console.log('skilllllll?', skillRequest)
    await submitMessage({ data, currentUser, skillRequest, shareContact })

    closeModal()
  }

  const closeModal = () => {
    reset()
    setShareContact(false)
    onClose()
  }

  return (
    <ChakraProvider resetCSS={false} cssVarsRoot='#chakra-root'>
      <div id='chakra-root'>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <form onSubmit={handleSubmit(submit)}>
            <ModalContent
              maxWidth={{ base: '90%', sm: '80%', md: '50%', lg: '40%' }}
              width='100%'
            >
              <ModalHeader>
                <Flex
                  align='center'
                  gap={2}
                  justify={'space-around'}
                  width={'100%'}
                >
                  <Image
                    borderRadius='full'
                    border={'2px solid grey'}
                    boxSize='80px'
                    src={
                      currentUser.user.profilePicture
                        ? currentUser.user.profilePicture
                        : 'https://res.cloudinary.com/digcf0lad/image/upload/v1730501785/project10/profileUsers/aafegrqpkdfwxwuepia6.png'
                    }
                    // alt={`${}'s profile`}
                  />
                  <Text
                    fontWeight='bold'
                    textAlign={'Center'}
                    maxWidth={{ base: '30%', sm: '80%' }}
                    fontSize={{
                      base: '12px',
                      sm: '14px',
                      md: '16px',
                      lg: '18px'
                    }}
                  >
                    Message to {skillRequest.user.name.split(' ')[0]}
                  </Text>
                  <Image
                    borderRadius='full'
                    boxSize='80px'
                    src={skillRequest.picture}
                    border={'2px solid grey'}
                  />
                </Flex>
              </ModalHeader>
              <ModalBody>
                <FormControl>
                  <FormLabel htmlFor='message' fontSize={''} color={'grey'}>
                    Describe your interest here:
                  </FormLabel>
                  <Textarea
                    // id='message'
                    {...register('message', validationMessage)}
                    placeholder=' Let them know here!💡'
                    fontSize={'10px'}
                    padding={'5px'}
                    height={'15svh'}
                    border={errors.message ? 'red' : 'none'}
                  />
                  {errors.message && (
                    <Text color='red.500' fontSize='xs'>
                      {errors.message.message}
                    </Text>
                  )}
                  <Flex gap={2} marginTop={'5px'}>
                    {' '}
                    <Checkbox
                      marginLeft={'2px'}
                      isChecked={shareContact}
                      onChange={(e) => {
                        const updatedShareContact = !shareContact
                        console.log('Checkbox toggled:', updatedShareContact)
                        setShareContact(updatedShareContact)
                      }}
                      size={'sm'}
                      // borderRadius={'var(--chakra-radii-sm)'}

                      // borderColor='gray.300'
                    />
                    <Text fontSize={'x-small'}>
                      Would yo like to share your contacts?
                    </Text>
                  </Flex>
                  {shareContact && (
                    <ContactInputs
                      register={register}
                      currentUser={currentUser}
                      shareContact={shareContact}
                    />
                  )}
                </FormControl>
              </ModalBody>
              <ModalFooter flexDir={'row'} gap={3}>
                <Button
                  onClick={closeModal}
                  height={'fit-content'}
                  width={'80px'}
                  padding={'1px 10px'}
                  fontWeight={'normal'}
                  // color={'white'}
                  cursor={'pointer'}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  cursor={'pointer'}
                  colorScheme='blue'
                  height={'fit-content'}
                  padding={'1px 10px'}
                  fontWeight={'normal'}
                  width={'80px'}
                >
                  Send
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      </div>
    </ChakraProvider>
  )
}
