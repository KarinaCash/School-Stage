import React from "react"

import {
    Input1,
    Block2,
    Block3,
    Block4
} from "./account-block1-input.style";
import { Input } from "../account-block1-input-student";

export const InputAll = () =>(
    <Block2>
              <Block3>
                <Input text = "Фамилия:" label = "фамилия" value = "Иванов"/>
                <Input text = "Имя:" label = "имя" value = "Иван"/>
                <Input text = "Класс:" label = "класс" value = "2"/>
                <Input text = "Группа:" label = "группа" value = "1"/>           
              </Block3>
              <Block4><label htmlFor="родтел">Номер телефона родителя:</label><Input1 type="text" name="###" value="+7 927 030 13 00"/></Block4>
              <Block4><label htmlFor="педагог">Педагог:</label><Input1 type="text" name="###" value="Иванова Валерия Константиновна"/></Block4>
    </Block2>
)
