import React, { useRef } from "react";

import {
    Block1,
    Block11,
    Text,
    Sign,
    Abutton,
    Butlink
} from "./main-block.style";

const Block = () => {
    // Создаем реф, который будем связывать с элементом внизу страницы
    const bottomRef = useRef(null);

    // Функция для обработки клика, которая прокручивает к рефу
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    };

    return (
        <>
            <Block1>
                <Block11>
                    <Text>Школа актерского мастерства School Stage</Text>
                    <Sign>для детей от 7 до 14 лет</Sign>
                    <Abutton onClick={scrollToBottom}>
                        <Butlink>Оставить заявку</Butlink>
                    </Abutton>
                </Block11>
            </Block1>
            {/* Добавляем элемент внизу страницы */}
            <div ref={bottomRef} style={{ height: "1px" }}></div>
        </>
    );
}

export default Block;
