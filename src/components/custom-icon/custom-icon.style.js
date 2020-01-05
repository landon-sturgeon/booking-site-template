import styled from "styled-components";
import { COLORS, DEVICE } from "../../global.style";

export const IconContainer = styled.div`
    position: relative;
`;

export const CustomIconImage = styled.svg`
    height: 2.25rem;
    width: 2.25rem;
    fill: ${COLORS.darkGrey2};
    margin-right: 2rem;

    @media only screen and ${ DEVICE.small } {
        margin: 0;
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const UserNotificationSpan = styled.span`
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 100px;
    background-color: ${COLORS.primary};
    color: #fff;
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;