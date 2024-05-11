import React from "react";

import { 
    Block1,
    Block11,
    Text, 
    Sign,
    Abutton,
    Butlink
 } from "./main-block.style";


export const Block = () =>(
    <Block1>
        <Block11>
          <Text>Школа актерского мастерства School Stage</Text>
          <Sign>для детей от 7 до 14 лет</Sign>
          <Abutton><Butlink>Оставить заявку</Butlink></Abutton>
        </Block11>      
    </Block1>
)