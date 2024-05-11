import React from "react";

import { Nav } from "../main-header-nav";
import { 
    Hat,
    Logo
 } from "./main-header.style";
import { landing } from "../../../assets/images";

export const Header = () =>(
    <Hat>
       <Logo src={landing['logo1']} alt="Логотип School Stage"/>
        <Nav/>
    </Hat>
)