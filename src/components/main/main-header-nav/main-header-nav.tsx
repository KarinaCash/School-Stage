import React from "react";

import {
    Nav1,
    Navigation,
    Navigation1
}
from './main-header-nav.style'
import { Link } from '../../all/all-link';


export const Nav = () =>(
        <Nav1>
            <Link href="/school-stage/about">
                <Navigation>О нас</Navigation>
            </Link>
            <Link href = "/school-stage/teachers">
            <Navigation>Педагоги</Navigation>
            </Link>
            <Link href="/school-stage/account">
            <Navigation1>Кабинет</Navigation1>
            </Link>
        </Nav1>
)