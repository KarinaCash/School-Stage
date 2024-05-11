import React from "react";

import { Block1 } from "../main-block1";
import { Block2 } from "../main-block2";
import { Block3 } from "../main-block3";
import {
    All
} from './block123.style'

export const Block123 = () => {
  return (
    <All>
      <Block1/>
      <Block2/>
      <Block3/>
    </All>
  );
};
