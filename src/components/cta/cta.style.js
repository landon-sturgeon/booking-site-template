import styled from "styled-components";

import { DEVICE } from "../../global.style";

export const CallToActionContainer = styled.div`
    padding: 3.5rem 0;
    text-align: center;

    @media only screen and ${ DEVICE.medium } {
        padding: 2rem;
    }
`;

export const CTABookNow = styled.h2`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2.5rem;
`;