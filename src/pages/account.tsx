import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';
import { HStack , Image, VStack,Box, Button,Divider } from '@chakra-ui/react';

import Text from '@/components/text/text'
import Navbar from '@/components/navbar.tsx/navbar';
import { Url } from 'next/dist/shared/lib/router/router';

function Account() {

    const router = useRouter()

  return (
    <Box p={"1em"} pt={"2em"} h={"90vh"}>

        <Text 
            text='Account' 
            color='#080E11'
            fwt={400}
            ftz='32px'
        />

        {items.map((item,index)=>{
            return(
                <HStack 
                    onClick={()=>{
                        item.link ? router.push(item.link) : null
                    }}
                    key={index} 
                    gap={"1em"}
                    alignItems={"center"}
                    mt={"25px"}
                >

                    <Image src={item.src} />

                    <Text 
                        text={item.name} 
                        color='#080E11'
                        fwt={400}
                        ftz='16px'
                    />

                </HStack>
            )
        })}

        <Navbar/>

    </Box>
  )
}

export default Account

interface type{
    name:string,
    src:string,
    link? : Url
}

 const items : type[] = [
        {
            name: "Addresses",
            src:"/assets/images/Addressesa.svg"
        },
        {
            name: "Gift cards",
            src:"/assets/images/giftcard.svg"
        },
        {
            name: "Support",
            src:"/assets/images/Support.svg"
        },
        {
            name: "Invite your friends",
            src:"/assets/images/billing.svg"
        },
        {
            name: "Manage account",
            src:"/assets/images/setting.svg"
        },
        {
            name: "Become a Rider",
            src:"/assets/images/rider.svg",
            link: '/rider'
        },
        {
            name: "Help",
            src:"/assets/images/help.svg"
        },
        {
            name: "Privacy policy",
            src:"/assets/images/privacy.svg"
        },
        {
            name: "Log out",
            src:"/assets/images/logout.svg"
        },
    ]