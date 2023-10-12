"use client"
import React from 'react'
import { useRouter } from 'next/router'

import Text from '@/components/text/text'
import { Input } from '@/components/input/input'



function Signup() {

    const router = useRouter()

    function handleSubmit(e:any){
        e.preventDefault()
        router.push("/location")
    }

  return (
    <>
        <div style={fluid}>
            <div style={container}>
                <Text 
                    text='Log in' 
                    color='#080E11'
                    fwt={400}
                    ftz='32px'
                />
                
                <Text 
                    text='Welcome back' 
                    color='#080E11'
                    fwt={400}
                    ftz='12px'
                    marginTop= "10px"
                />

                <form style={formStyle} onSubmit={handleSubmit} action="">

                    <Input placeHolder='Email' type='email'/>
                    <Input placeHolder='Password' type='password' />
                    <div style={buttonParent}>
                        <button style={buttonStyle}>Sign up</button>
                    </div>
                    <div style={smallCont}>
                        <small style={small}>Forgotten password?</small>
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
    width:"98%",
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
    width:"90%"
}

const small = {
    color: "#264653",
    fontSize :"8px",
    fontFamily: 'Poppins',
}

const smallCont={
    width: "312px",
    display :"flex",
    justifyContent :"flex-end",
    marginTop:"8px",
    marginRight: "16px",
}

const fluid ={
    display: "flex",
    justifyContent :"center",
    alignItems: "center"
}



export default Signup