import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Box, Stack } from '@chakra-ui/react'
import SupportCard from './component/SupportCard'
import ContactCard from './component/ContactCard'

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <SupportCard 
      leftComponent={<ContactCard/>} / >
    </DashboardLayout>
  )
}


export default Support
