import styled from "styled-components";
import { COLORS, SHADOWS } from "../../global.style";

export const Container = styled.div`
    max-width: 120rem;
    margin: 8rem auto;
    background-color: ${COLORS.lightGrey1};
    box-shadow: ${SHADOWS.shadowDark};

    min-height: 60rem;
`;

export const Content = styled.div`
    display: flex;
`;

export const MainContent = styled.div`
    background-color: #fff;

    flex: 1;
`;