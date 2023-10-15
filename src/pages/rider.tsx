"use client"


import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Text from '@/components/text/text'
import { Input } from '@/components/input/input'
import { Box } from '@chakra-ui/react'




function Rider() {

    const router = useRouter()

    function handleSubmit(e:any){
        e.preventDefault()
        router.push('/login')
    }

  return (
    <>
        <div style={fluid}>
            <div style={container}>
                <Text 
                    text='Become a Rider' 
                    color='#080E11'
                    fwt={400}
                    ftz='32px'
                />


                <form style={formStyle} onSubmit={handleSubmit} action="">

                    <Input placeHolder='Name' type='text'/>
                    <Input placeHolder='Tricycle ID NO.' type='text' />
                    <Input placeHolder='Tricycle Plate NO.' type='text' />
                    <Input placeHolder='Driver’s license' type='text' />
                    <Input placeHolder='Date of birth' type='date' />
                    <Input placeHolder='Address' type='text' />
                    <Input placeHolder='Add a picture' type='file' />
                    <div style={buttonParent}>
                        <button style={buttonStyle}>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}


const formStyle = {
    display: "block",
    margin: "auto",
}

const buttonStyle ={
    maxWidth: "342px",
    width:"100%",
    height:"44px",
    paddingInline: "13px",
    margin:"auto",
    background: "#E76F51",
    fontSize:"16px",
    color: "white",
    border: "0",
    outline: 0,
    borderRadius: "8px",
    marginTop:"2em"
}

const buttonParent = {
    width: "100%",
}

const container = {
    marginTop:"30px",
    width:"90%",
    maxWidth:"350px",
}

const small = {
    color: "#264653",
    fontSize :"8px",
    fontFamily: 'Poppins',
}

const smallCont={
    maxWidth: "342px",
    width:"100%",
    display :"flex",
    justifyContent :"flex-end",
    marginTop:"8px",
    marginRight: "16px"
}


const termsCont ={
    width :"230px",
    marginTop:"1em",
    marginInline:"auto"
}

const color ={
    color:"#E76F51"
}

const fluid ={
    display: "flex",
    justifyContent :"center",
    alignItems: "center",
}

const link ={
    color: "#264653",
    textDecoration:"none",
    fontWeight:"600"
}



export default Rider