import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Divtxt = styled.div <{area: any}>`
    height: 150px;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: rgb(24, 24, 24);
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => {
        return css`
        flex-direction: {props.area};
        `;
    }}
    cursor: default;
`;