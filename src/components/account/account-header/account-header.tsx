import React from "react"

import {
    Hat,
    Hat_1,
    Hat_2,
    Hat_3,
    Logo,
    Logo_exit
} from "./account-header.style";
import { landing } from "../../../assets/images";
import { Link } from "../../all/all-link";


export const Header = (props) =>(    
    <Hat>
        <Hat_1>
            <Logo src={landing['logo1']} alt="Логотип School Stage"/>
        </Hat_1>
        <Hat_2>Личный кабинет</Hat_2>
        <Hat_3><Link href="/school-stage"><Logo_exit src={landing['exit']}/></Link></Hat_3>
    </Hat>
)


