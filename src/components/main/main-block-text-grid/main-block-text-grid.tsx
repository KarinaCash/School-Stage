import React from "react";

import {
    Divtxt
  } from "./main-block-text-grid.style";

export const Text = ({
  area,
  txt,
}) =>(
    <Divtxt area = {area}>{txt}</Divtxt>
)