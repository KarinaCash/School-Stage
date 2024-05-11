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

export const Block1 = () =>(
    <Block_1>
        <Block1_1>
          <Block1_1_1>Информация об ученике</Block1_1_1>
          <Form1>
            <Block1_1_2><Avatar src={landing['boy']}/></Block1_1_2>
            <InputAll/>
          </Form1>
        </Block1_1>
    </Block_1>
)
