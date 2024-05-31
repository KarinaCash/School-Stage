import styled from "@emotion/styled";

export const Block = styled.div `
    height: 150px;
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    display: grid;
    grid-template-rows: 150px 150px 150px 150px;
    grid-template-columns: 300px;
    grid-template-areas: 
    "a b c d";
    grid-gap: 110px;
`;