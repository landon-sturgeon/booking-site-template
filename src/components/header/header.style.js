import styled from "styled-components"
import { COLORS } from "../../global.style";

export const HeaderContainer = styled.header`
    font-size: 1.4rem;
    height: 7rem;
    background-color: #fff;
    border-bottom: 1px solid ${COLORS.lightGrey2};

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoImage = styled.img`
    height: 3.25rem;
    margin-left: 2rem;
`;