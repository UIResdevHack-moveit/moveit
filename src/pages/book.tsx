import React from 'react'

import { HStack, Image, VStack,Box,Button } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import Topnav from '@/components/navbar.tsx/topnav'
import Text from '@/components/text/text'

function Book() {

    const data = [
        {
            place: "Awo hall",
            time:"9:40 PM"
        },
        {
            place: "Idia hall",
            time:"9:45 PM"
        },
        {
            place: "St. Annes hall",
            time:"10:00 PM"
        },
        {
            place: "UI Gate",
            time:"10:!0 PM"
        },
    ]

  return (
    <Box p={"1em"}>
        <Topnav/>
        <Box mt={"24px"}>
            <Text 
                text='Your driver is coming in 2:30' 
                color='#080E11'
                fwt={400}
                ftz='12px'
            />
        </Box>
        
        <HStack mt={"24px"} gap={"1em"}>
            <Image src='/assets/images/driver.png' />
            <VStack alignItems={"flex-start"} >

                <Text 
                    text='John Doe' 
                    color='#080E11'
                    fwt={400}
                    ftz='12px'
                />

                <HStack gap={"4px"}>
                    <Icon icon="mdi:location" color="#e76f51" width="18" />
                    <Text 
                        text='3 mins' 
                        color='#080E11'
                        fwt={400}
                        ftz='12px'
                    />
                </HStack>

                <HStack gap={"4px"}>
                    <Icon icon="material-symbols:star" color="#f7cfc5" width="18" />
                    <Text 
                        text='4.2' 
                        color='#080E11'
                        fwt={400}
                        ftz='12px'
                    />
                </HStack>

            </VStack>
                
        </HStack>

        <VStack  mt={"32px"} alignItems={"flex-start"} >    
            <Text 
                text='PASSENGERS' 
                color='#080E11'
                fwt={400}
                ftz='12px'
            />
            <HStack justifyContent={"space-between"} w={"full"} >
                <Fellas/>
                <Text 
                    text='You and 2 other people' 
                    color='#080E11'
                    fwt={400}
                    ftz='12px'
                />
            </HStack>
        </VStack>

        <HStack gap={"8px"} mt={"32px"}>
            <Icon icon="carbon:warning-filled" color="rgba(51, 51, 51, 0.2)" width="18" />
            <Box maxW={"210px"}>
                <Text 
                    text='You’re sharing your ride with others going your way. Other passengers may be added' 
                    color='#080E11'
                    fwt={400}
                    ftz='8px'
                />
            </Box>
        </HStack>

        <VStack alignItems={"flex-start"} mt={"32px"}>
            <HStack justifyContent={"space-between"} w={"full"}>
                <Text 
                    text='Trip ' 
                    color='#080E11'
                    fwt={400}
                    ftz='12px'
                />
                <Text 
                    text='Edit Ride ' 
                    color='#080E11'
                    fwt={400}
                    ftz='12px'
                />
            </HStack>
            {
                data.map((item,index)=>{
                    return(
                        <HStack justifyContent={"space-between"} mt={"16px"} w={"full"}>
                            <HStack gap={"1em"}>
                                <Icon icon="icon-park-outline:right" color="#080e11" width="18" />
                                <Text 
                                    text={item.place} 
                                    color='#080E11'
                                    fwt={400}
                                    ftz='12px'
                                />
                            </HStack>
                            <Text 
                                text={item.time} 
                                color='#080E11'
                                fwt={400}
                                ftz='12px'
                            />
                        </HStack>
                    )
                })
            }
        </VStack>
        
        <HStack mt={"24px"} gap={"1em"} ml={"5px"} >

            <Box 
                p={"12px"} 
                rounded={"8px"}
                ring={1}
                ringColor={"#E76F51"}
            >
               <Icon icon="ri:message-2-line" color="#080e11" width="20" />
            </Box>

           <Button 
                w={"256px"} 
                h={"44px"} 
                bg={"#FAE2DC"}
                rounded={"8px"}
                p={"10px"}
                fontFamily={"Poppins"}
                fontSize={"15px"}
                color={"#080E11"}
                fontWeight={400}
            >
                Cancel
            </Button>
        </HStack>

    </Box>
  )
}

export default Book


function Fellas (){
 return(
    <AvatarGroup size='md' max={3}>
        <Avatar name='Ryan Florence' src='/assets/images/p1.png' />
        <Avatar name='Segun Adebayo' src='/assets/images/p2.png' />
        <Avatar name='Agiode Mary' src='/assets/images/p3.png' />
    </AvatarGroup>
 )
}