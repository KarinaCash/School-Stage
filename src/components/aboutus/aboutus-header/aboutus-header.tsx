import React from "react"

import { HeadSlider } from "../aboutus-header-slider";
import { Information } from "../aboutus-header-information";
import {
    Logo,
    Header1,
} from "./aboutus-header.style";
import { landing } from "../../../assets/images";
import { Link } from "../../all/all-link";

export const Header = () =>(    
    <Header1>
        <Logo>
            <Link href="/school-stage">
                <img src={landing['logo1']} alt="Логотип School Stage" />
            </Link>
        </Logo>
        <Information/>
        <HeadSlider/>
    </Header1>
)


