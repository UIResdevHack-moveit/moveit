"use client" 

import { type } from 'os'
import React, {useState} from 'react'

interface props {
    placeHolder: string
    type: string
    rest? :React.HTMLProps<HTMLParagraphElement>;
}


function Input({placeHolder,type, ...rest} : props) {


    const style  = {
        maxWidth: "342px",
        width:"100%",
        height:"41px",
        paddingInline :"13px",
        paddingBlock: "10px",
        color: "#6E848C",
        fontSize: "12px",
        borderRadius: "8px",
        border:"1px solid #26465380",
        display:"block",
        marginTop: "1em",
        ...rest
    }
    

    const [value , setValue] = useState("")

    function handleInput (e:any){
        const inputItem = e.target.value
        setValue(inputItem)
        console.log(value);
        
    }


  return (
    <input 
        style={style}
        placeholder= {placeHolder} 
        value={value}
        onChange={handleInput}
        type={type}
        required
    />
  )
}

export  {Input}

