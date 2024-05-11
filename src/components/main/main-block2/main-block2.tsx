import React from "react";

import { 
    All,
    Ul,
    Li,
    Strelka,
    Ulli
 } from "./main-block2.style";
import { landing } from "../../../assets/images";

export const Block2 = () =>(
    <>
        <All>
            <Ulli>
                <Ul>
                    <Li>Раскрытие творческих способностей</Li>
                    <Li>Улучшение пямяти и концентрации</Li>
                    <Li>Преодоление страха выступлений</Li>
                    <Li>Повышение уверенности в себе</Li>
                    <Li>Развитие лидерских качеств</Li>
                    <Li>Веселье и выход энергии</Li>
                </Ul>
            </Ulli>
            <Strelka src={landing["strelka"]}/>
        </All>
    </>
)