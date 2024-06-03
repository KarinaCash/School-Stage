import { css } from "@emotion/react";
import { back3 } from "./assets/images/landing";


export const globalStyles = css `
    body {
        margin: 0;
        padding: 0;
        background-image: url(${back3});;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;