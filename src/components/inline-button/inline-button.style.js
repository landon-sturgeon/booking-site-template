import styled, { keyframes } from "styled-components";

import { COLORS } from "../../global.style";

const keyFramePulsate = keyframes`
    0% {
        transform: scale(1);
        box-shadow: none;
    }

    50% {
        transform: scale(1.05);
        box-shadow: 0 1rem 4rem rgba(0,0,0,0.25);
    }

    100% {
        transform: scale(1);
        box-shadow: none;
    }
`;

export const InlinebuttonContainer = styled.button`
    border: none;
    color: ${ COLORS.primary };
    font-size: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: ${ COLORS.darkGrey1 };
    }

    &:focus {
        outline: none;
        animation: ${ keyFramePulsate } 1s infinite;
    }
`;