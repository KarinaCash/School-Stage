import React from "react"

import {
    Block,
    Txt1, 
    Txt2
} from "./main-block-text-vertical.style";
import { landing } from "../../../assets/images";

export const Block_vert = (props) =>(    
    <Block>
        <Txt1>Наши занятия проходят в Вашей школе</Txt1>
        <Txt2>Не нужно тратить время на дорогу для получения качественных знаний</Txt2>
    </Block>
)