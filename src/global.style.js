import { createGlobalStyle } from "styled-components";

export const COLORS = {
    primaryLight: "#00C7FF",
    primary: "#00A1F1",
    primaryDark: "#2274C1",
    lightGrey1: "#FAF9F9",
    lightGrey2: "#F4F2F2",
    lightGrey3: "#F0EEEE",
    lightGrey4: "#CCC",
    darkGrey1: "#333",
    darkGrey2: "#777",
    darkGrey3: "#999"
}

export const SHADOWS = {
    shadowDark: "0 2rem 6rem rgba(0, 0, 0, 0.7)"
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: ${COLORS.darkGrey2};
        background-image: linear-gradient(to right bottom, ${COLORS.primaryLight}, ${COLORS.primaryDark});
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
    }
`;
