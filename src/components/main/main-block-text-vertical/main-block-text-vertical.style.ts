import styled from "@emotion/styled";

export const Block = styled.div `
    height: 110px;
    width: 1600px;
    display: grid;
    grid-template-rows: 60px 50px;
    grid-template-columns: 1600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    `;

export const Txt1 = styled.div `
    height: 60px;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-weight: 1000;
    font-size: 50px;
    color: rgb(24, 24, 24);
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
    cursor: default;
    `;
    
export const Txt2 = styled.div `
    height: 50px;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 35px;
    color: rgb(24, 24, 24);
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
    cursor: default;
    `;
