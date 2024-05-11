import React from "react";

import { 
    Block,
    Form_block,
    Appoinment_block,
    Title1,
    Title2,
    Form_input,
    Blocks, 
    Field,
    Button
 } from "./main-block3.style";
import { landing } from "../../../assets/images";

export const Block3 = () =>(
    <>
        <Block>
            <a></a>
            <Form_block>
                <Appoinment_block>
                    <div><Title1>Записаться на пробное бесплатное занятие</Title1></div>
                    <div><Title2>Ребенок может абсолютно бесплатно посетить наш урок, оставьте заявку и менеджер свяжется с Вами в ближайшее время</Title2></div>
                </Appoinment_block>
                <Form_input>
                    <form id="form" name="form" action="https://script.google.com/macros/s/AKfycbwMzudZ9-jUht5FnMCKeC0R3B7BEZPskDWRezOVF0r3zTQagl_8jIj4WR8_3-YSlH9V/exec" method="post">         
                        <Blocks>
                        <Field type="text" name="name" value="" placeholder="ВАШЕ ИМЯ" required />
                        </Blocks>
                        <Blocks>
                        <Field type="tel"  name="phone" value="" placeholder="+7 (___) ___-__-__" required/>
                        </Blocks>
                        <Button type="submit" name ="submitForm">Оставить заявку на сайте</Button>
                    </form>
                </Form_input>
            </Form_block>
        </Block>
    </>
)