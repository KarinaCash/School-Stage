import styled from "@emotion/styled";

export const All = styled.div `
    height: 700px;
    width: 100%;
    margin-top: -10px;
`;
  
export const Ulli = styled.div `
    height: 500px;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    color: rgb(24, 24, 24);
    cursor: default;
    
`;
export const Ul = styled.ul`
    list-style-type: none;
    
  `;

export const Li = styled.li `
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    '&::before': {
        color: rgb(24, 24, 24);
        content:'';
        font-size: 30px;
        font-weight: 700;
        display: inline-block;
        width: 1em; 
        margin-left: -1em;
    }
  `;
  
export const Strelka = styled.img `
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    height: "153";
    width: "63";
`;