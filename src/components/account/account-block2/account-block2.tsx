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

export const Block2 = ({lessons}) =>  (
  <Block_2>
  <Block2_1>
    <Block2_1_1>Посещение занятий</Block2_1_1>
    <Form2>
      <Block2_1_2>
          <label htmlFor="абонемент">Абонемент от: </label>
          <Input2 type="text" name="###" value="05.2024"/>
      </Block2_1_2>
      <Block2_1_3>
                {
                    lessons && lessons.map((item) => (
                        <>
                            {
                                item && (
                                    <Input props={item} />
                                )
                            }
                        </>
                    ))
                }
      </Block2_1_3>
    </Form2>
  </Block2_1>
</Block_2>
)
