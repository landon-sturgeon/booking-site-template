import styled from "styled-components";

import { COLORS, DEVICE } from "../../global.style";

export const OverviewContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${ COLORS.lightGrey2 }
`;

export const OverviewHeading = styled.h1`
    font-size: 2.25rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1.5rem 3rem;

    @media only screen and ${ DEVICE.small } {
        font-size: 1.8rem;
        padding: 1.25rem 2rem;
    }
`;

export const OverviewIconStar = styled.svg`
    width: 1.75rem;
    height: 1.75rem;
    fill: ${ COLORS.primary }
`;

export const OverviewIconLocation = styled.svg`
    width: 1.75rem;
    height: 1.75rem;
    fill: ${ COLORS.primary }
    margin-right: 0.5rem;
`;

export const OverviewStarRatingContainer = styled.div`
    margin-right: auto;
    display: flex;
`;

export const OverviewLocationContainer = styled.div`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
`;

export const OverviewAverageRatingContainer = styled.div`
    background-color: ${ COLORS.primary };
    color: #fff;
    margin-left: 3rem;
    align-self: stretch;
    padding: 0 2.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and ${ DEVICE.small } {
        font-size: 1.5rem;
    }
`;

export const OverviewAverageRating = styled.div`
    font-size: 2.25rem;
    font-weight: 300;
    margin-bottom: -3px;

    @media only screen and ${ DEVICE.small } {
        padding: 0 1.8rem;
        margin-bottom: 0;
    }
`;

export const OverviewRatingCount = styled.div`
    font-size: 0.8rem;
    text-transform: uppercase;

    @media only screen and ${ DEVICE.small } {
        font-size: 0.5rem;
    }
`;