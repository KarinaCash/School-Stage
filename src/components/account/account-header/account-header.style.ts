import styled from "@emotion/styled";

export const Hat = styled.header `
    background:black;
    height: 100px;
    width: 100%;
    display: flex;
`;

export const Hat_1 =styled.div `
    height: 100px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center; 
`;

export const Hat_2=styled.div `
    height: 100px;
    width: 500px;
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
`;

export const Hat_3=styled.div `
    height: 100px;
    width: 1400px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 30px;
`;

export const Logo = styled.img`
    height: 66px;
    width: 66px;
`;

export const Logo_exit = styled.img`
    height: 60px;
    width: 80px;
    border-radius: 4dvh;
    &:hover {
        opacity: 0.5;
    }
`;
