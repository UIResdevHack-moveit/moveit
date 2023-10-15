import React from 'react'
import { useRouter } from 'next/router'

import dynamic from "next/dynamic"
import { Box, Button, HStack,Image } from '@chakra-ui/react'

import Text from '@/components/text/text'
import { useUser } from '@/context/usercontest';
import { Input } from '@/components/input/input'
import Topnav from '@/components/navbar.tsx/topnav'

const MyAwesomeMap = dynamic(() => import("@/components/map/map"), { ssr:false })

function Location() {

  const router = useRouter()
  const {user} = useUser()

  function handleSubmit(e:any){
      e.preventDefault()
      router.push("/destination")
  }

  return (
    <div>

      <Topnav/>

      <MyAwesomeMap/>

      <Box mt={"2em"} p={"1em"}>

        <Text 
          text =  { 'Welcome' + ' ' +  user?.displayName}
          color='#080E11'
          fwt={400}
          ftz='16px'
        />

        <form onSubmit={handleSubmit} action="">
          <Input 
            placeHolder='Enter your location' 
            type='text' 
          />
           <HStack w={"100%"} justifyContent={"flex-end"} mt={"2em"} >
            <Button
              width={"96px"}
              height={"34px"}
              p={"8px"}
              rounded={"8px"}
              bg={"#E76F51"}
              color={"#fff"}
              fontWeight={"400"}
              fontSize={"16px"}
              fontFamily={"Poppins"}
              type='submit'
            >
              Next
            </Button>
        </HStack>

        </form>

       
      </Box>

    </div>
  )
}

export default Location