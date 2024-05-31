import React from "react"

import {
    Input1,
    Block2,
    Block3,
    Block4
} from "./account-block1-input.style";
import { Input } from "../account-block1-input-student";

export const InputAll = ({props}) =>(
    <Block2>
              <Block3>
                <Input text = "Фамилия:" label = "фамилия" value = {props.surname}/>
                <Input text = "Имя:" label = "имя" value = {props.name}/>
                <Input text = "Класс:" label = "класс" value = {props.class}/>
                <Input text = "Группа:" label = "группа" value = {props.group}/>           
              </Block3>
              <Block4><label htmlFor="родтел">Номер телефона родителя:</label><Input1 type="text" name="###" value={props.number}/></Block4>
              <Block4><label htmlFor="педагог">Педагог:</label><Input1 type="text" name="###" value={props.teacher}/></Block4>
    </Block2>
)
