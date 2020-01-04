import styled from "styled-components";

import { COLORS } from "../../global.style";

export const UserReviewsContainer = styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserReview = styled.div`
    background-color: #fff;
    box-shadow: 0 1rem 4rem rgba(0,0,0,0.15);
    padding: 3rem;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &::before {
        content: "\\201C";
        position: absolute;
        top: -2.5rem;
        left: -0.8rem;
        font-size: 20rem;
        color: ${ COLORS.lightGrey2};
        line-height: 1;
        font-family: sans-serif;
    }
`;

export const ReviewText = styled.p`
    margin-bottom: 2rem;
    z-index: 10;
    position: relative;
`;

export const ReviewUser = styled.figcaption`
    display: flex;
    align-items: center;
`;

export const ReviewUserImage = styled.img`
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
`;

export const ReviewUserBox = styled.blockquote`
    margin-right: auto;
`;

export const ReviewUserName = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
`;

export const ReviewUserDate = styled.p`
    font-size: 1rem;
    color: ${COLORS.darkGrey3 };
`;

export const ReviewRating = styled.div`
    font-size: 2.25rem;
    font-wight: 300;
    color: ${COLORS.primary };
    z-index: 1;
`;