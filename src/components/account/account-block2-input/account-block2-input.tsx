import React from "react"

import {
    B,
    Input3
} from "./account-block2-input.style";

export const Input = (
    {props}
) => (
    <B>
        <Input3 type="text" name="###" value={props}/>
    </B>
)
