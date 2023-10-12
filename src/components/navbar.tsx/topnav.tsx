import React from 'react'

import { Box, Button, HStack,Image } from '@chakra-ui/react'

function Topnav() {
  return (
    <HStack 
        px={"1em"}
        py={".7em"}  
        width={"full"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Image src='/assets/images/Group 1.svg' />
        </Box>
        <Box>
          <Image src='/assets/images/Ellipse 1.png'/>
        </Box>
      </HStack>
  )
}

export default Topnav