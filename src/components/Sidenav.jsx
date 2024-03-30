import React from 'react'
import { Box, HStack, Icon, Text , Stack, Heading} from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDownUp } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Sidenav = () => {


  const navLinks = [

    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    
    {

      icon: TbArrowsDownUp,
      text:"Transaction",
      link: "/transaction",

    },


  ];

  console.log("hii");

  

  


  return (
  
  <Stack boxShadow={{

    base:"none",
    lg:"lg",
  }} maxW="16rem" h="100vh" bg="white" justify="space-between " >
   <Box>
    
   <Heading textAlign="center" fontSize="20px" as="h1" p1="3.5rem">
      @DOSOMECODING
      </Heading>
      
      <Box mt="6" mx="3">

       {navLinks.map((nav, index) => (

        <Link to={nav.link}>

          
         <HStack borderRadius="10px" key={index} py="3" px="4" _hover={
           
           {
             bg:"#F3F3F7",
             cover:"#171717"
            }
            
            
          } color="#797E82">

      <Icon as={nav.icon} />
      <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>

    </HStack>
        </Link>
         
   ))}
   </Box>
   
   </Box>

   <Box mt="6" mx="3" mb="6">

    <Link to="/support">



   <HStack borderRadius="10px" py="3" px="4" _hover={
     
     {
       bg:"#F3F3F7",
       cover:"#171717"
      }
      
      
    } color="#797E82">

<Icon as= {BiSupport} fontSize="24px"/>
<Text fontSize="14px" fontWeight="medium">Support</Text>

</HStack>
    
    </Link>

   
  </Box>

   </Stack>

)

}


export default Sidenav
