import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Stack, Text, Flex, Box, Icon, Grid, Divider, Button } from '@chakra-ui/react'
import { FaRupeeSign } from "react-icons/fa";
import { FaBitcoinSign } from "react-icons/fa6";

const Transactions = () => {

  const transaction = [

    {
    id: "1",
    icon: FaRupeeSign,
    text: "Inr Deposit",
    amount: "+ ₹81,123.10",
    timeStamp: "2022-06-09 7:06 PM",

  },
    {
    id:"2",
    icon: FaBitcoinSign,
    text: "BTC Sell",
    amount: "- 12.48513391 BTC",
    timeStamp: "2022-05-27 12:32 PM",

  },
    {
    id: "3",
    icon: FaRupeeSign,
    text: "Inr Deposit",
    amount: "+ ₹81,123.10",
    timeStamp: "2022-06-09 7:06 PM",

  },

];



  return (
    
      <CustomCard h="full"> 

       <Text fontSize= "sn" color="black.80"></Text>
       <Stack>
        {transaction.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i==! 0 && <Divider  />}

<Flex  gap={"4"} >
            <Grid placeItems={"center"} boxSize={10} bg="black.5" borderRadius="full">

              <Icon as={transaction.icon} color={"black"}></Icon>


            </Grid>

            <Flex jusitfy="space-between" w="full" gap={"4"}>
              <Stack spacing={"0"}>
                <Text textStyle="h6" color="black.80">
                  {transaction.text}
                </Text>
                <Text fontSize="sm" color="black.40">
                  {transaction.text}
                </Text>
              </Stack>
              <Text textStyle="h6" color="black.80">
                  {transaction.amount}
                </Text>
            </Flex>



          </Flex>
          </Fragment>
        ))}
       </Stack>

       <Button w="full" colorSchema="gray" mt="6">View All</Button>
      </CustomCard>
    
  )
}

export default Transactions

