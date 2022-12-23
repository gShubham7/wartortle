// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
 
// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Image,
//   SimpleGrid,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
 

// const tok =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzliM2ViMzVkY2EyODRkNGVkZmNjZWMiLCJpYXQiOjE2NzEzMzc4NDEsImV4cCI6MTY3MTc2OTg0MX0.gAyGngbn3cF5P1hv5kKD7O0aLjDdEuAmTtV04Q6Fu9g";
 
// function Cart() {
//  const [data,setData]=useState([])
 
 
//   return (
  
//     <div className="cart_main">
//       <Box w={{ base: "100%", md: "95%", lg: "90%" }} m="auto">
       

//         <SimpleGrid
//           marginTop={"3%"}
//           columns={{ sm: 1, md: 2, lg: 4 }}
//           spacing={4}
//         >
//           { data?.map((el, i) => {
//               if (i >= 0) {
//                 if (i === 10) {
//                   return ;
//                 }
           
 
//                 return (
//                   <Box className={styles.careCard} key={el._id}>
//                     <Link href="" >
//                       {" "}
//                       <Image
//                         borderRadius="5px 5px 0 0"
//                         w="100%"
//                         src=""
//                       ></Image>
//                     </Link>

//                     <Stack p="20px" bgColor="gray.200" textAlign="left">
//                       <Text fontSize="xl" noOfLines={1} color="black">
//                         { }
//                       </Text>
//                       <Flex
//                         fontSize={{ base: "10px", md: "10px", lg: "12px" }}
//                         color={"grey"}
//                         justifyContent="space-between"
//                       >
                       
//                         <Box>
//                           <Button
                             
//                             colorScheme="orange"
//                           >
//                             Remove
//                           </Button>
//                         </Box>
//                       </Flex>
//                     </Stack>
//                   </Box>
//                 );
//               }
//             })}
//         </SimpleGrid>
//       </Box>
//     </div>
    
//   );
// }

// export default Cart;
