import styled from "styled-components"
import { COLORS, DEVICE } from "../../global.style";

export const HeaderContainer = styled.header`
    font-size: 1.4rem;
    height: 7rem;
    background-color: #fff;
    border-bottom: 1px solid ${COLORS.lightGrey2};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and ${ DEVICE.smaller } {
        flex-wrap: wrap;
        height: 11rem;
        align-content: space-around;
    }
`;

export const LogoImage = styled.img`
    height: 3.25rem;
    margin-left: 2rem;
`;