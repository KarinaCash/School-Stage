import styled from "@emotion/styled";

export const Block = styled.div `
    height: 1000px;
    width: 100%;
    margin-top: 40px;
`;
  
export const Form_block = styled.div  `
    background: rgb(245,229,45);
    height: 800px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6dvh;
  `;
  
export const Appoinment_block = styled.div `
    height: 380px;
    width: 100%;
    padding-top: 10px;
  `;
  
export const Title1 = styled.h2 `
    height: 150px;
    width: 60%;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 50px;
    color: rgb(24, 24, 24);
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  `;
  
export const Title2 = styled.h4 `
    height: 140px;
    width: 82%;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: rgb(24, 24, 24);
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
  `;
  
export const Form_input = styled.div `
    height: 350px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  `;
  
export const Blocks = styled.div `
    background: rgb(245,229,45);
    height: 80px;
    width: 65%;
    border: black;
    border-style: solid;
    border-width: 3px;
    border-radius: 3dvh 3dvh 3dvh 3dvh;
    padding-left: 15px;
    margin-bottom: 25px;
    margin-left: 50px;
    margin-right: auto;
  `;
  
export const Field = styled.input `
    background: none;
    height: 50px;
    width: 81%;
    padding: 15px 0px 0px 0px;
    font-family: "Montserrat", sans-serif;
    resize: none;
    overflow: hidden;
    outline: none;
    font-size: 25px;
    font-weight: 400;
    border: none;
    color: black;
  `;
  
export const Button = styled.button `
    background: black;
    height: 100px;
    width: 90%;
    border-radius: 5.5dvh;
    margin-bottom: 25px;
    margin-left: 50px;
    margin-right: auto;
    color: white;
    border-style: none;
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    font-weight: 800;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        background: rgba(0, 0, 0, 0.5);
        color: rgba(255, 255, 255, 0.5);
    }
  `;
  