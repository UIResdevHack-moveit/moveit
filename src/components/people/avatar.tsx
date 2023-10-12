import React from 'react'

import { Avatar, Badge, WrapItem, VStack,Text} from '@chakra-ui/react'



interface props {
    src?:string,
    location: string
    name?: string
}

function Myavatar({src,location,name} : props) {
  return (
    <WrapItem>
    <VStack 
        position={"relative"} 
    >   
        <Mybadge location={location} />
        <Avatar size='md' name='Ryan Florence' src={src}  />
        <Text
            fontSize={"12px"}
            fontFamily={"Poppins"}
            fontWeight={400}
        >
            {name}
        </Text>
    </VStack>
    
  </WrapItem>
  )
}


export default Myavatar

interface props {
    location: string
}

function Mybadge ({location} :  props) {
    return(
        <Badge 
            position={"absolute"}  
            colorScheme='red'
            top={0}
            right={0}
            zIndex={"200"}
        >
            {location}
        </Badge>
    )
}



