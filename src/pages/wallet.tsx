import React from 'react'

import { Icon } from '@iconify/react';
import { HStack , Image, VStack,Box, Button,Divider } from '@chakra-ui/react';

import Text from '@/components/text/text'
import Navbar from '@/components/navbar.tsx/navbar';

function Wallet() {

    const accNumber : string = "8057798265"

  return (
    <Box p={"1em"} pt={"2em"} overflow={"scroll"} h={"90vh"}>

        <Text 
            text='Wallet' 
            color='#080E11'
            fwt={400}
            ftz='32px'
        />

        <VStack 
            mt={"1em"}
            alignItems={"flex-start"}
            gap={"20px"}
            bgColor={"#FAE2DC"}
            px={"1em"}
            py={"13px"}
            boxShadow={"0px 4px 10px 0px rgba(0, 0, 0, 0.25)"}
            rounded={"8px"}
        >
            <Text 
                text='Balance' 
                color='#080E11'
                fwt={400}
                ftz='16px'
            />

            <Text 
                text='N 400' 
                color='#080E11'
                fwt={600}
                ftz='24px'
            />

            <Button
                 w={"105px"} 
                 h={"26px"} 
                 bg={"#264653"}
                 rounded={"8px"}
                 p={"10px"}
                 fontFamily={"Poppins"}
                 fontSize={"15px"}
                 color={"#FFFFFF"}
                 fontWeight={400}
            >
                Fund wallet
            </Button>

        </VStack>

        <VStack 
            mt={"1em"}
            w={"182px"} 
            ring={1}
            ringColor={"#080E11"}
            rounded={"8px"}
            alignItems={"flex-start"}
            p={"1em"}
        >

             <Text 
                text='Referral points' 
                color='#080E11'
                fwt={400}
                ftz='8px'
            />

             <Text 
                text='10 points' 
                color='#080E11'
                fwt={400}
                ftz='12px'
            />   
        </VStack>

        <VStack alignItems={"flex-start"} mt={"24px"}>

            <Text 
                text='Transfer to a/c' 
                color='#264653'
                fwt={400}
                ftz='16px'
            />  

            <VStack 
                alignItems={"flex-start"}
                w={"full"}
                gap={"20px"}
                bgColor={"#fff"}
                px={"1em"}
                py={"13px"}
                boxShadow={"0px 4px 10px 0px rgba(0, 0, 0, 0.25)"}
                rounded={"8px"}
            >
                <Text 
                    text='OPAY' 
                    color='#264653'
                    fwt={400}
                    ftz='16px'
                />

                <VStack w={"full"} >

                    <HStack 
                        rounded={"8px"} 
                        bg={"#F7CFC5"}
                        p={"8px 16px"}
                        w={"full"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >

                        <Text 
                            text= {accNumber}
                            color='#264653'
                            fwt={400}
                            ftz='16px'
                        />

                        <HStack 
                            bg={"#FAE2DC"}
                            padding={"4px 8px"}
                            rounded={"4px"}
                            gap={"4px"}
                        >
                            {/* icon should be here */}
                            <Text 
                                text= "Copy"
                                color='#264653'
                                fwt={400}
                                ftz='16px'
                            />
                            
                        </HStack>
                        
                    </HStack>  

                </VStack>

            </VStack>

            <HStack 
                justifyContent={"center"} 
                alignItems={"center"} 
                mt={"1em"}
                w={"full"}
                textAlign={"center"}
            >

                <Text 
                    text= "I have made the transfer "
                    color='#E76F51'
                    fwt={400}
                    ftz='16px'
                />

            </HStack>

            <Divider />

            <HStack 
                gap={"12px"} 
                alignItems={"center"} 
                pb={"1em"}
            >
                <Image src='/assets/images/wallet.svg' />
                <VStack>

                    <Text 
                        text= "Add a debit card"
                        color='#080E11'
                        fwt={400}
                        ftz='12px'
                    />

                    <HStack  gap={"4px"}>
                        <Icon icon="material-symbols:star" color="#E76F51" width="18" />
                        <Text 
                            text='Recommended' 
                            color='#E76F51'
                            fwt={400}
                            ftz='12px'
                        />
                    </HStack>

                </VStack>
            </HStack>

        </VStack>

    <Navbar/>
    </Box>
  )
}

export default Wallet