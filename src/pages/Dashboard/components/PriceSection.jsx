import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HStack, Stack, Icon, Tag, Text, Button, Flex, Image } from '@chakra-ui/react'
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const PriceSection = () => {


    const timeStamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
    
  return (
    
      
      <CustomCard>
      <HStack>
      <Flex justify="space-between" align="start" bg="white" borderRadius="xl" p="6" flexDir={{

base: "column",
lg: "row"
}} spacing={{

base: 4,
xl: 0,
}}>
<HStack spacing={{
base:0,
xl:16,
}}>


<HStack bg="white" borderRadius="xl" p="6" color="black">
  <Stack>
   <HStack>
    <Text fontSize="sm" >Wallet Balance</Text>
   </HStack>


   <HStack><HStack><Text textStyle="h2" fontWeight={"medium"}> 22.39401000</Text><Tag colorScheme='gray'>BTC</Tag></HStack>
   <HStack color={"green.500"}>
    <Icon as={HiOutlineArrowUpRight} fontSize={"24"} color={"green.500"}></Icon><Text fontSize="sm" fontWeight={"medium"}> 22%</Text></HStack>
</HStack>
  </Stack>
</HStack>
</HStack>
</Flex>
<HStack>
  <Button leftIcon= {<Icon as={CiCirclePlus} />}>Buy</Button>
  <Button rightIcon={<Icon as={CiCircleMinus} /> }>Sell</Button>
</HStack>
      </HStack>

      <Tabs variant='soft-rounded' colorScheme='green'>
     <Flex justify={"end"} >
     <TabList bg="black.5" p="3px">
        {
            ["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab _selected={{bg: "white"}}  key={tab}  bg="white"fontSize={"sn"} p="6px" borderRadius={"4"}>{tab}</Tab>

            ))
        }
    
  </TabList>
     </Flex>
  <TabPanels>
    <TabPanel>
    <Image width={"100%"} src="./Graph.png" mt="50px"></Image>
      <HStack justify={'space-between'}> 
        {timeStamps.map((timestamp) => (
            <Text key={timestamp} fontSize="sm" color="black.80">
                {timestamp}
            </Text>
        ))}
      </HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
     
      </CustomCard>
   
  )
}

export default PriceSection
