import { FormControl, HStack, Text, FormLabel, Input, Card, Checkbox, Button, Stack, Box, Textarea, Flex } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Flex justify="center" align="center" height="100%">
       <Card p="6" borderRadius="Iron" h="full">
        <HStack flexDirection={{

         base: "column",
         md : "row",

        }}>

        <Text fontWeight={"medium"} fontSize={"sm"}>
          You will receive response within 24 hours of time of submit.

        </Text>
        <HStack>
        <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter Your Name"  />

        </FormControl>
        <FormControl>
        <FormLabel>SureName</FormLabel>
        <Input placeholder="Enter Your Name Surename"  />

        </FormControl>
        </HStack>
        <FormControl>
        <FormLabel>SureName</FormLabel>
        <Input type="email" placeholder="Enter Your Name Email"  />

        </FormControl>
        <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea  placeholder="Enter Your Name Message"  />

        </FormControl>
        <Checkbox defaultChecked fontSize="xs">
          I agree with
          <Box as="span" color="p.purple">
            {" "}
            Terms & Conditions.
          </Box>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">
            Send a Message
          </Button>
          <Button fontSize="sm" colorScheme='gray'>
            Book a Meeting
          </Button>
        </Stack>
        </HStack>
      </Card>
    </Flex>
  )
}

export default ContactCard
