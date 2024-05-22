import React, { useRef } from 'react';  
import {   
    Block1,  
    Block11,  
    Text,   
    Sign,  
    Abutton,  
    Butlink  
} from "./main-block.style";  
  
export const Block = () => {
    const endOfPageRef = useRef(null);

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
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
            <div ref={endOfPageRef} />
        </>
    );
};
