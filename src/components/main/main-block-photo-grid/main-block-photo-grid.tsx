import React from "react";

import {
    Divphoto,
    Block
  } from "./main-block-photo-grid.style";
import { landing } from "../../../assets/images";

export const Photo = () =>(
    <Block>
        <Divphoto src={landing["krug1"]}/>
        <Divphoto src={landing["krug2"]}/>
        <Divphoto src={landing["krug3"]}/>
        <Divphoto src={landing["krug4"]}/>
    </Block>
)