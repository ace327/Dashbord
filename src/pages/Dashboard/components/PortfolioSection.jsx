import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { HStack, Icon, Stack, Text, Tag, Button } from '@chakra-ui/react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


const PortfolioSection = () => {
  return (

    
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6" flexDir={{

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
          <Text fontSize="sm" >Toatl Portafolio view</Text>
         <Icon as={CiCircleInfo} fontSize="24px"></Icon> 
         </HStack>
         <Text textStyle="h2" fontWeight={"medium"} > 112,312.24</Text>
        </Stack>
      </HStack>
      <HStack bg="white" borderRadius="xl" p="6" color="black">
        <Stack>
         <HStack>
          <Text fontSize="sm" >Wallet Balance</Text>
        
         </HStack>

         <HStack>         <HStack><Text textStyle="h2" fontWeight={"medium"}> 22.39401000</Text><Tag colorScheme='gray'>BTC</Tag></HStack>
         <HStack><Text textStyle="h2" fontWeight={"medium"}> 1,300.00</Text><Tag colorScheme='gray'>INR</Tag></HStack>
</HStack>
        </Stack>
      </HStack>
    </HStack>



<HStack>
  <Button leftIcon= {<Icon as={FaArrowDown} />}>Deposit</Button>
  <Button rightIcon={<Icon as={FaArrowUp} /> }>Withdraw</Button>
</HStack>


</HStack>

  )
}

export default PortfolioSection 
