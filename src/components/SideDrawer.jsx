import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    Button
  } from '@chakra-ui/react'
import Sidenav from './Sidenav'

const SideDrawer = ({ isOpen, onClose}) => {
 

  
    return (
      <>
        
        <Drawer
          isOpen={isOpen}
          placement='left'
         
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="black" />
           
  
            <DrawerBody>
            <Sidenav  />
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideDrawer
