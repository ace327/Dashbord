import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Tag,
  } from '@chakra-ui/react'
const TransactionTable = () => {

  const tableData = [

    {
        id:"HD82NA2H",
        data: "2023-06-20",
        time: "07:00",
        type: {

            name:"INR Deposit",
            tag: "E-transfer",

        },

        amount: "+ ₹81,123.10",
        status: "pending",
    },

    {
        id: "HD82NA4H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "INR Widthdraw",
          tag: "Wire Transfer",
        },
        amount: "-₹55,123",
        status: "processing",
      },
      {
        id: "HD82NA5H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Buy",
          tag: "BTC",
        },
        amount: "12.0554484 BTC",
        status: "cancelled",
      },
      {
        id: "HD82NA6H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Sell",
          tag: "BTC",
        },
        amount: "-2.0554484 BTC",
        status: "completed",
      },
      {
        id: "HD82NA7H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "BTC Deposit",
        },
        amount: "+15.5000000",
        status: "pending",
      },
      {
        id: "HD82NA8H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "BTC Widthdraw",
        },
        amount: "-5.05555544",
        status: "completed",
      },
  ];

  const statusColor = {

    pending: "#797E82",
    processing: "#F5A500",
    completed: "#059669",
    cancelled: "#DC2626"
  }





  return (
    <TableContainer>
    <Table variant='simple' colorScheme='gray'>
      
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Date & Time</Th>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
          
          
        </Tr>
      </Thead>
      <Tbody>

        {
            tableData.map((data) => (
                <Tr key = {data.id}>
                    <Td> {data.id}</Td>
                    <Td>
                        <Stack spacing={0}>
                            <text fontSize="sm" fontWeight={"medium"}>{data.date}</text>
                            <text>{data.time}</text>
                        </Stack>
                    </Td>
                    <Td> <Stack spacing={0}>
                            <text fontSize={"sm"} fontWeight={"medium"} >{data.type.name}</text>
                            <text fontSize={"xs"} color="black.60">{data.type?.tag}</text>
                        </Stack>
                        </Td>

                    <Td>{data.amount}</Td>
                    <Td><Tag bg={statusColor[data.status]} color="white" borderRadius="full">    
                        {data.status}
                        
                        </Tag>
                        
                        </Td>
                </Tr>
            ))
        }
      </Tbody>
      
    </Table>
  </TableContainer>
  )
}

export default TransactionTable
