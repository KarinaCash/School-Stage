import styled from "@emotion/styled";

export const Pager = styled.footer `
    background: black;
    height: 150px;
    width: 100%;
    cursor: default;
    margin-top: 150px;
    `;
  
  
export const Diver = styled.div `
    height: 150px;
    width: 20%;
    margin-left: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 23px;
    font-weight: 700;
    float: left;
    color: white;
    `;
export const Linker1 = styled.div `
    text-decoration: none; 
    color: black;
    font-style: normal;
    height: 20px;
    color: white;
    margin-top: -20px;
    &:hover {
        color: rgba(255, 255, 255, 0.5);
    }
  `;
  
export const Linker2 = styled.div `
    text-decoration: none; 
    color: black;
    font-style: normal;
    height: 20px;
    color: white;
    margin-top: 10px;
    &:hover {
        color: rgba(255, 255, 255, 0.5);
    }
  `;
  
export const Socialer = styled.div `
    height: 150px;
    width: 20%;
    margin-right: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 23px;
    font-weight: 800;
    float: right;
    color: white;
  `;
  
export const Tlicon = styled.img `
    height: 50px;
    width: 50px;
    border-radius: 3dvh;
    float: right;
    margin-top: -20px;
    margin-right: 20px;
    &:hover {
        opacity: 0.5;
    }
  `;
  

export const Waicon = styled.img `
        height: 50px;
        width: 50px;
        border-radius: 1.2dvh;
        float: right;
        margin-top: -20px;
        margin-right: 30px;
        &:hover {
            opacity: 0.5;
        }
    `;