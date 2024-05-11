import React from "react";


import { Container } from "../main-block-text";
import { Block_vert } from "../main-block-text-vertical";
import { Photo } from "../main-block-photo-grid";
import { 
    Block,
    Divtxt
 } from "./main-block1.style";


export const Block1 = () =>(
    <Block>
        <Block_vert/>
        <Photo/>
        <Container/>
        <Divtxt>Что дает актерское мастерство?</Divtxt>
    </Block>
)