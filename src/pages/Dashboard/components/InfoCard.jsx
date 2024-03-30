import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({ imgUrl, text, tagText, inverted}) => {
  return (
   <CustomCard 
   bgImage={imgUrl} 
   bgSize="cover" 
   bgColor={inverted ? "#5F00D9" : "white"}
   bgRepeat={"no-repeat"}>
    <Tag 
    color={!inverted ? "white" : "black.80"}
    bg={!inverted ? "#5F00D9" : "white"}
    borderRadius="full">{tagText}</Tag>

    <Text mt="4" textStyle="h5"
    color={inverted ? "white" : "black.80"}>{text}</Text>
   </CustomCard>
  )
}

export default InfoCard
