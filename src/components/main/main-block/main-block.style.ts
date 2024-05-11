import styled from "@emotion/styled";
import { back2 } from "../../../assets/images/landing";

export const Block1 = styled.div `
    background-image: url(${back2});
    background-position: center;
    overflow: hidden;
    background-size: cover;
    height: 1000px;
    width: 100%;
    float: top;
  `;
  
export const Block11 = styled.div`
    height: 270px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 400px;
  `;
  
export const Text = styled.h1 `
    font-family: "Montserrat", sans-serif;
    color: rgb(245,229,45);
    font-weight: 1000;
    font-size: 64px;
    cursor: default;
  `;
  
export const Sign = styled.p `
    font-family: "Montserrat", sans-serif;
    color: white;
    font-weight: 100;
    font-size: 34px;
    margin-top: -20px;
    cursor: default;
  `;
  
export const Abutton = styled.a `
    height: 130px;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    font-weight: 1000;
    font-size: 34px;
    cursor: default;
  `;
  
export const Butlink = styled.div `
    width: 400px;
    height: 130px;
    background: rgb(245,229,45);
    color: rgb(24, 24, 24);
    border-radius: 7dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background: rgba(245, 228, 45, 0.5);
        color: rgba(24, 24, 24, 0.705);
    }
  `;