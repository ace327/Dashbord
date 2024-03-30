import { Container, Flex, Menu, MenuButton, MenuItem, MenuList , Heading , Button, HStack, Icon, Box} from '@chakra-ui/react'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


const TopNav = ({title , onOpen}) => {
  return (

    <Box w={"100%"} >


    <HStack w="100%" backgroundColor={"whitesmoke"} h="16" justify={'space-between'} px="32" display={"flex"} >
      <Icon as={IoMdMenu} onClick={onOpen} display={{ base: "block" , lg: "none"}}/>
        <Container display={"flex"} justifyContent={"space-between"}>
            <Heading fontSize={"28px"} color="black">{title}</Heading>

            <Menu>
  <MenuButton as={Button} >
    <Icon as={ FaUserCircle} fontSize={"24px"} color="black" />
  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <MenuItem>Support</MenuItem>
   
  </MenuList>
</Menu>




        </Container>
      
    </HStack>
    </Box>
  )
}

export default TopNav
