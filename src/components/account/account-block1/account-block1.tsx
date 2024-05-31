import React from "react"

import {
    Block_1,
    Block1_1,
    Block1_1_1,
    Block1_1_2,
    Form1,
    Avatar
} from "./account-block1.style";
import { landing } from "../../../assets/images";
import { InputAll } from "../account-block1-input/account-block1-input";

export const Block1 = ({props}) => (
    <Block_1>
        <Block1_1>
          <Block1_1_1>Информация об ученике</Block1_1_1>
          <Form1>
            <Block1_1_2><Avatar src={landing[props.photo]}/></Block1_1_2>
            <InputAll props ={props} />
          </Form1>
        </Block1_1>
    </Block_1>
)
