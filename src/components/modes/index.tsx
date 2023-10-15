import { HStack,Image,Text,VStack } from '@chakra-ui/react'
import React from 'react'


interface props{
    src: string
    name:string
    price : number
}

function Mode({src, name, price } : props) {
  return (
    <VStack 
        w={"80px"} 
        h={"86px"}
        rounded={"8px"}
        bg={"#fff"}
        boxShadow={" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
    >
        <Image src={src} width={"59px"} h={"52px"} />
        <HStack 
            mt={"5px"} 
            fontSize={"8px"} 
            fontFamily={"Poppins"} 
            color={"#080E11"}
            fontWeight={400}
        >
            <Text>{name}</Text> - <Text>{price}</Text>
        </HStack>
    </VStack>
  )
}

export default Mode