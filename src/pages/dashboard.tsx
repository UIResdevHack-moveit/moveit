import React from 'react'

import { Box,HStack,Image } from '@chakra-ui/react'
import { Icon } from '@iconify/react';

import Navbar from '@/components/navbar.tsx/navbar'
import Topnav from '@/components/navbar.tsx/topnav'
import Text from '@/components/text/text'
import { Input } from '@/components/input/input'
import Myavatar from '@/components/people/avatar'



const data =[
  {
    name: "Idris",
    location:"CHE",
    src:"/assets/images/male1.png"
  },
  {
    name: "Mary",
    location:"BOT",
    src:"/assets/images/female1.png"
  },
  {
    name: "David",
    location:"Phy",
    src:"/assets/images/male2.png"
  },
  {
    name: "Rodiat",
    location:"ZOO",
    src:"/assets/images/female2.png"
  },
]

function Dashboard() {
  return (
    <div>
      <Topnav/>

      <Box  p={"1em"} py={".3em"}>

        <Text 
            text='Hello Mary!' 
            color='#080E11'
            fwt={400}
            ftz='16px'
          />

           <Input 
            placeHolder='Find people in your location' 
            type='search' 
            border="1px solid #E76F51"
            width="100%"
          />

        <HStack 
          justifyContent={"space-between"} 
          w={"90%"} 
          mt={"13px"} 
          mx={"auto"}
        >
          {data.map((item,index)=>{
            return (
              <HStack key={index}>
                  <Myavatar 
                    name={item.name}
                    src={item.src}
                    location={item.location}
                  />
              </HStack>
            )
          })}
        </HStack>

          <Image 
            mt={"14px"}
            rounded={"4px"}
            maxW={"100%"} 
            mx={"auto"}
            src='/assets/images/uigate.png' 
          />

          <Box mt={"9px"} pos={"relative"}>

            <HStack
              w={"119px"}
              height={"28px"}
              padding={"10px"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              rounded={"8px"}
              bg={"#264653"}
              color={"#fff"}
              fontFamily={"Poppin"}
              fontSize={"12px"}
              pos={"absolute"}
              top={1}
              right={5}
            >
              <Text 
                text='Rent a Bicycle' 
                color=''
                fwt={400}
                ftz=''
              />

                <Icon icon="uiw:right" color="white" width="6" height="10" />

            </HStack>

            <Image 
              mt={"14px"}
              rounded={"4px"}
              maxW={"100%"} 
              mx={"auto"}
              src='/assets/images/rent-bicycle.png' 
            />
          </Box>
          
      </Box>
      
      <Navbar/>
    </div>
  )
}

export default Dashboard