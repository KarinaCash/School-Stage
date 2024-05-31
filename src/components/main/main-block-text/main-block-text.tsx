import React from "react";


import {Text} from "../main-block-text-grid";
import { Block } from "./main-block-text.style";


export const Container = () =>(
    <Block>
        <Text area='a' txt="Вы приводите своих детей в школу"></Text>
        <Text area='b' txt="Дети учатся на школьных уроках"></Text>
        <Text area='c' txt="Занятие School Stage"></Text>
        <Text area='d' txt="Довольные дети и родители"></Text>
    </Block>
)