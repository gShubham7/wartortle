import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
 
import style from "./Navbar.module.css"
 

//   <AddIcon />
 

export default function Bottom() {

 
  return (
    <div className={style.bottom}>
     
     <Box bg={useColorModeValue('	rgb(95, 68, 68,.6)', 'gray.900')} width="60%" borderRadius="10px" margin="auto" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
    
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
               >
             <AddIcon />
            </Button>
          
          </Flex>

        
      </Box>
 
        </div>
  );
}
