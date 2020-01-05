import styled from "styled-components";
import { COLORS, SHADOWS, DEVICE } from "../../global.style";

export const Container = styled.div`
    max-width: 120rem;
    margin: 8rem auto;
    background-color: ${COLORS.lightGrey1};
    box-shadow: ${SHADOWS.shadowDark};

    min-height: 50rem;

    @media only screen and ${ DEVICE.largest } {
        margin: 0;
        max-width; 100%;
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;

    @media only screen and ${ DEVICE.medium } {
        flex-direction: column;
    }
]`;

export const MainContent = styled.div`
    background-color: #fff;

    flex: 1;
`;

export const OverviewDetail = styled.div`
    font-size: 1.4rem;
    display: flex;
    padding: 4.5rem;
    background-color: ${ COLORS.lightGrey1};
    border-bottom: 1px solid ${ COLORS.lightGrey2}

    @media only screen and ${ DEVICE.medium } {
        padding 3rem;
    }

    @media only screen and ${ DEVICE.small } {
        flex-direction: column;
    }
`;

export const HotelDescriptionContainer = styled.div`
    flex: 0 0 60%;
    margin-right: 4.5rem;
    background-color: #fff;
    box-shadow: 0 2rem 5rem rgba(0,0,0, 0.1);
    padding: 3rem;

    @media only screen and ${ DEVICE.medium } {
        margin-right: 3rem;
        padding: 2rem;
    }

    @media only screen and ${ DEVICE.small } {
        margin-right: 0;
        margin-bottom: 3rem;
    }
`;

export const DescriptionParagraph = styled.p`
    &:not(:last-of-type) {
        margin-bottom: 2rem;
    }
`;