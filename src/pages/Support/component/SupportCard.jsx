import { Flex, Stack, Icon, Text, Card, HStack, FormControl, FormLabel, Input, Textarea, Checkbox, Button, Box} from '@chakra-ui/react';
import React from 'react'
import { IoMdMail } from "react-icons/io";


const SupportCard = ({ 
  leftComponent
}) => {
  return (

    
  
    <Flex gap={6} flexDir={{

      base: "column",
      xl:"row"
    }}>
      <Stack maxW="24rem">
        <Icon as={IoMdMail} color={"p.purple"} boxSize={6} />
        <Text fontWeight={"medium"} as="h1" textStyle={"h1"}>Contact Us</Text>
        <Text fontSize={"sm"} color={"black.60"}>Have a Question or just want to Know more? Feel free t reach out to us</Text>
      </Stack>

      <Card p="6" borderRadius="1rem" flexGrow={1}> 

      
      <Stack spacing={6}>
      <Text fontWeight={"medium"} fontSize="sm">you will receive response within 24 hours of time of submit</Text>
      <HStack>
        <FormControl>
          <FormLabel>Surname</FormLabel>
          <Input placeholder='Enter Your Surname..'></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder='Enter Your Name..'></Input>
        </FormControl>
      </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder='Enter Your Email..'></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder='Enter Your Email..'></Textarea>
        </FormControl>
        <Checkbox defaultChecked>
          <Text>
          I agree with<Box>Terms & Conditions.</Box>
          </Text>
        </Checkbox>
        <Stack>
           <Button bgColor='p.purple' color={"white"} fontSize="sm">
            Send a Message
           </Button>
           <Button fontSize="sm" colorScheme='gray'>Book a Meeting</Button>
        </Stack>

      </Stack>
      
      </Card>
    </Flex>
    
  )
}

export default SupportCard
