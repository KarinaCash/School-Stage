import React from "react"

import {
    Block_2,
    Block2_1,
    Block2_1_1,
    Form2,
    Block2_1_2,
    Input2,
    Block2_1_3,
    Block2_1_4,
    Input4
} from "./account-block2.style";
import { Input } from "../account-block2-input";

export const Block2 = () =>(
  <Block_2>
  <Block2_1>
    <Block2_1_1>Посещение занятий</Block2_1_1>
    <Form2>
      <Block2_1_2>
          <label htmlFor="абонемент">Абонемент от: </label>
          <Input2 type="text" name="###" value="05.2024"/>
      </Block2_1_2>
      <Block2_1_3>
          <Input value="02.05"/>
          <Input value="07.09"/>
          <Input value="14.05"/>
          <Input value="17.05"/>
          <Input value="21.05"/>
          <Input value="24.05"/>
          <Input value="28.05"/>
          <Input value=""/>
          <Input value=""/>    
      </Block2_1_3>
      <Block2_1_4>
          <label htmlFor="остаток">Остаток оплаченных занятий: </label>
          <Input4 type="text" name="###" value="6"/>
      </Block2_1_4>
    </Form2>
  </Block2_1>
</Block_2>
)
