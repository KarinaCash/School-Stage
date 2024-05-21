import React, { useState } from "react";
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

export const Block3 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        setName('');
        setPhone('');
    };

    return (
        <>
            <Block>
                <a></a>
                <Form_block>
                    <Appoinment_block>
                        <div><Title1>Записаться на пробное бесплатное занятие</Title1></div>
                        <div><Title2>Ребенок может абсолютно бесплатно посетить наш урок, оставьте заявку и менеджер свяжется с Вами в ближайшее время</Title2></div>
                    </Appoinment_block>
                    <Form_input>
                        <form id="form" name="form" action="https://script.google.com/macros/s/AKfycbwMzudZ9-jUht5FnMCKeC0R3B7BEZPskDWRezOVF0r3zTQagl_8jIj4WR8_3-YSlH9V/exec" method="post" onSubmit={handleSubmit}>         
                            <Blocks>
                                <Field 
                                    type="text" 
                                    name="name" 
                                    value={name} 
                                    placeholder="ВАШЕ ИМЯ" 
                                    required 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </Blocks>
                            <Blocks>
                                <Field 
                                    type="tel"  
                                    name="phone" 
                                    value={phone} 
                                    placeholder="+7 (___) ___-__-__" 
                                    required 
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                            </Blocks>
                            <Button type="submit" name="submitForm">Оставить заявку на сайте</Button>
                        </form>
                    </Form_input>
                </Form_block>
            </Block>
        </>
    );
};
