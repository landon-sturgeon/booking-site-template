import styled from "styled-components";
import { COLORS } from "../../global.style";

export const UserNavContainer = styled.nav`
    display: flex;
    align-self: stretch;
    align-items: center;

    & > * {
        padding: 0 2rem;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
    }

    & > *:hover {
        background-color: ${COLORS.lightGrey2};
    }
`;