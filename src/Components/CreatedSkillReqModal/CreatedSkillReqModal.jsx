// SkillRequestModal.js
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ChakraProvider
} from '@chakra-ui/react'
import { UserCard } from '../../Components/UserCard/UserCard'
export const SkillRequestModal = ({
  isOpen,
  onClose,
  skillRequest,
  currentUser
}) => {
  if (!skillRequest) return null

  return (
    <ChakraProvider resetCSS={false} cssVarsRoot='#chakra-root'>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        maxWidth={{ base: '90%', sm: '70%', md: '70%', lg: '60%' }} // Ajuste para pantallas pequeñas
      >
        <ModalOverlay />
        <ModalContent
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <ModalHeader
            display='flex'
            alignItems='center'
            justifyContent='center'
            fontSize={{ base: '1.0rem', md: '1.3rem' }}
            fontWeight='bold'
          >
            Congrats, a new skill is on the way!{' '}
          </ModalHeader>
          <ModalBody>
            <UserCard skillRequest={skillRequest} />
          </ModalBody>
          <ModalFooter display='flex' justifyContent='flex-end' width='100%'>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
