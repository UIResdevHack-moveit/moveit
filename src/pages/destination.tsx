import React from 'react'
import { useRouter } from 'next/router'

import dynamic from "next/dynamic"
import { Box, Button, HStack,Image } from '@chakra-ui/react'

import Text from '@/components/text/text'
import { Input } from '@/components/input/input'
import Topnav from '@/components/navbar.tsx/topnav'

const MyAwesomeMap = dynamic(() => import("@/components/map/map"), { ssr:false })

function Destination() {

  const router = useRouter()

  function handleSubmit(e:any){
      e.preventDefault()
      router.push("/dashboard")
  }

  return (
    <div>

      <Topnav/>
      <MyAwesomeMap/>

      <Box mt={"2em"} p={"1em"}>

        <Text 
          text='Where are you headed ?' 
          color='#080E11'
          fwt={400}
          ftz='16px'
        />

        <form onSubmit={handleSubmit} action="">
          <Input 
            placeHolder='Enter your destination' 
            type='text' 
            border="1px solid #E76F51"
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

export default Destination