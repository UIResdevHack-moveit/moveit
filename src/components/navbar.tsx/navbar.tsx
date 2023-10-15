import React from 'react'

import { useRouter } from 'next/router';
import Link from 'next/link';


import { Icon } from '@iconify/react';
import {HStack,Box,Text,VStack} from '@chakra-ui/react'

const paths = [
  {
      name: "Home",
      link: "/dashboard",
      icon: <Icon icon="tabler:home" width="30" />
  },
  {
      name: "Ride",
      link: "/ride",
      icon: <Icon icon="gis:car" width="30" />
  },
  {
      name: "Wallet",
      link: "/wallet",
      icon: <Icon icon="uil:wallet" width="30" />
  },
  {
      name: "Account",
      link: "/account",
      icon: <Icon icon="codicon:account" width="30" />
  },
]

const linkStyle = {
  color: "#E76F51"
}

function Navbar() {

  const router = useRouter()

  return (
      <>
        <HStack 
          width={"100%"} 
          pt={".5em"}
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
              <Link key={index} href={item.link}>
                <VStack py={".3em"} 
                  style={
                      {color : router.pathname == item.link ?
                       "#E76F51" : 
                       "rgba(38, 70, 83, 0.5019607843137255)"
                       }}>
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
              </Link>
            )
           })}
        </HStack>
      </>
  )
}

export default Navbar