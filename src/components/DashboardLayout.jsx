import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import SideDrawer from './SideDrawer'


const DashboardLayout = ({title, children}) => {


  const {isOpen, onClose , onOpen} = useDisclosure();
  return (
      <Flex>
     <Box display={{ base: "none", lg: "flex"}}>
     <Sidenav  />

     </Box>

     <SideDrawer isOpen={isOpen} onClose={onClose} />
          <Box flexGrow={1}>
      <TopNav title={title} onOpen={onOpen} color="black"/>
      <Container mt="6"maxW={"70rem"} bg="#ff000003" >{children}</Container>
    </Box>
     </Flex>
  )
}

export default DashboardLayout
