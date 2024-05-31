import React from "react"

import {
    Pager,
    Diver,
    Linker1,
    Linker2,
    Socialer,
    Tlicon,
    Waicon
} from "./main-footer.style";
import { landing } from "../../../assets/images";

export const Footer = () =>(    
    <Pager>
        <Diver>
            <h3>Контакты:</h3>
            <Linker1><a href="tel:+79273216387">
                +7 (927) 321 - 63 - 87
            </a></Linker1>
            <Linker2><a href="mailto:schoolstage@gmail.com">
                schoolstage@gmail.com
            </a></Linker2>
        </Diver>
        <Socialer>
            <h3>Мы в социальных сетях:</h3>
            <a href="https://api.whatsapp.com/send?phone=79270301300">
                <Tlicon src={landing["whtsp_icon"]} alt="whatsapp"/>
            </a>
            <a href="https://t.me/rsitdi">
                <Waicon src={landing["tlgrm_icon"]} alt="telegram" />
            </a>
        </Socialer>
    </Pager>
)


