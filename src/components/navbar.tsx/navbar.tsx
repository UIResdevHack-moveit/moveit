import React from 'react'

import { useRouter } from 'next/router';

import { Icon } from '@iconify/react';
import {HStack,Box,Text,VStack} from '@chakra-ui/react'

const paths = [
  {
      name: "Home",
      link: "/dashboard",
      icon: <Icon icon="tabler:home" color="rgba(38, 70, 83, 0.5019607843137255)" width="34" />
  },
  {
      name: "Ride",
      link: "/ride",
      icon: <Icon icon="gis:car" color="rgba(38, 70, 83, 0.5019607843137255)" width="34" />
  },
  {
      name: "Wallet",
      link: "/wallet",
      icon: <Icon icon="uil:wallet" color="rgba(38, 70, 83, 0.5019607843137255)" width="34" />
  },
  {
      name: "Account",
      link: "/account",
      icon: <Icon icon="codicon:account" color="rgba(38, 70, 83, 0.5019607843137255)" width="34" />
  },
]

function Navbar() {

  const router = useRouter()

  return (
      <>
        <HStack 
          width={"100%"} 
          justifyContent={"space-between"}
          bg={"#fff"}
          zIndex={"333"}
          paddingInline={"2em"}
          position={"fixed"}
          bottom={0}
          borderTop={"1px solid #26465380"}
        >
           {paths.map((item,index)=>{
            return (
              <VStack py={".6em"} >
                  <HStack>
                    {item.icon}
                  </HStack>
                  <Text
                    fontSize={"12px"}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                  >
                    {item.name}
                  </Text>
              </VStack>
            )
           })}
        </HStack>
      </>
  )
}

export default Navbar