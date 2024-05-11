import React from "react"

import {
    B,
    Input1
} from "./account-block1-input-student.style";

export const Input = ({ 
    text,
    label,
    value
}) =>(
    <B>
        <label htmlFor={label}>{text}</label><Input1 type="text" name="###" value={value}/>
    </B>
)
