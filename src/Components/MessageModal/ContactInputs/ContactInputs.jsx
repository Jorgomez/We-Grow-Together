import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { Flex, Input, Box, Text } from '@chakra-ui/react'

const ContactInputs = ({ register, currentUser }) => {
  return (
    <Flex direction='column' gap={2} marginTop={'10px'}>
      {/* WhatsApp */}
      <Flex align='center' gap={2}>
        <Box as={FaWhatsapp} color='#25D366' />
        <Input
          {...register('whatsApp')}
          fontSize={'x-small'}
          padding={'3px'}
          placeholder='WhatsApp'
          height={'fit-content'}
          width={'40%'}
          defaultValue={currentUser.user.additionalInfo?.contactInfo.whatsapp}
        />
      </Flex>

      {/* Instagram */}
      <Flex align='center' gap={2}>
        <Box as={FaInstagram} color='#E4405F' />
        <Input
          {...register('instagram')}
          fontSize={'x-small'}
          padding={'3px'}
          placeholder='Instagram'
          width={'40%'}
          height={'fit-content'}
        />
      </Flex>

      {/* Email */}
      <Flex align='center' gap={2}>
        <Box as={HiMail} color='#0072C6' />
        <Input
          {...register('email')}
          fontSize={'x-small'}
          padding={'3px'}
          placeholder='Email'
          width={'40%'}
          height={'fit-content'}
          defaultValue={currentUser.user.email}
        />
      </Flex>
    </Flex>
  )
}

export default ContactInputs
