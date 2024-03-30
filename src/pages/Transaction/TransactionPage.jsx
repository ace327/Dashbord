import React from 'react'
import {Card, Flex, Button, Icon, Tabs, TabList, Tab, TabIndicator, TabPanel, TabPanels, Tag, InputLeftElement, Input, InputGroup, HStack} from "@chakra-ui/react"
import DashboardLayout from '../../components/DashboardLayout'
import { FaDownload } from "react-icons/fa6";
import TransactionTable from './components/TransactionTable';
import { CiSearch } from "react-icons/ci";


const TransactionPage = () => {


  const tabs = [
    
    
    {

    name: "ALL",
    count: "349",
  },
    {

    name: "Deposit",
    count: "144",
  },
    {

    name: "Widthdraw",
    count: "55",
  },
    {

    name: "Trade",
    count: "50",
  },



  ]

  return (

        <DashboardLayout title={"Transaction"}>


            <Flex justify={"end"} mt="6">
                <Button leftIcon={<Icon as={FaDownload} />} bgColor={"#5F00D9"} color={"white"}>Export CVV</Button>
            </Flex>

      <Card borderRadius="1rem">
      <Tabs position="relative" variant="unstyled">
    <TabList pt="4" display={"flex"} w="full" justifyContent={"space-between"}>
        <HStack >
        {
            tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="2">
                    {tab.name} <Tag colorScheme="gray" borderRadius="full"> {tab.count} </Tag>
                </Tab>
            ))
        }
        </HStack>

<InputGroup maxW={"200px"} justifySelf={"end"}  pr="2">
    <InputLeftElement pointerEvents='none'>
        <Icon as={CiSearch} />
      
    </InputLeftElement>
    <Input type='tel' placeholder='Search...' />
  </InputGroup>
      
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <TransactionTable />
      </TabPanel>
      <TabPanel>
        <TransactionTable />
      </TabPanel>
      <TabPanel>
        <TransactionTable />
      </TabPanel>
    </TabPanels>
  </Tabs>
    </Card>
        </DashboardLayout>
  )
}

export default TransactionPage
