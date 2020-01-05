import styled from "styled-components";

import { COLORS } from "../../global.style";

export const RecommendationContainer = styled.div`
    font-size: 1.3rem;
    color: ${ COLORS.darkGrey3 };

    display: flex;
    align-items: center;
`;

export const RecommendationCount = styled.p`
    margin-right: auto;
`;

export const RecommendationFriends = styled.div`
    display: flex;
`;

export const RecommendationFriendPhoto = styled.img`
    box-sizing: content-box;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 3px solid #fff;

    &:not(:last-child) {
        margin-right: -2rem;
    }
`;