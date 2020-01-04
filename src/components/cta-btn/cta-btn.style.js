import styled from "styled-components";

import { COLORS } from "../../global.style";

export const BtnTextHiddenSpan = styled.span`
    position: absolute;
    top: -100%;
    left: 0;
    padding: 2rem 0rem;
`;

export const BtnTextVisibleSpan = styled.span`
    padding: 2rem 7.5rem;
`;

export const CTAButtonContainer = styled.button`
    font-size: 1.5rem;
    border: none;
    font-weight: 300;
    text-transform: uppercase;
    border-radius: 100px;
    background-image: linear-gradient(to right, ${COLORS.primaryLight}, ${COLORS.primaryDark});
    color: #fff;
    position: relative;
    overflow: hidden;

    & > * {
        display: inline-block;
        height: 100%;
        width: 100%;
        transition: all 0.2s;
    }

    &:hover {
        background-image: linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight});
    }

    &:hover ${BtnTextVisibleSpan} {
        transform: translateY(100%);
    }

    &:hover ${BtnTextHiddenSpan} {
        top: 0;
    }
`;