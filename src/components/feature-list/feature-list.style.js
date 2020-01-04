import styled from "styled-components";

import chevron from "../../assets/img/chevron-thin-right.svg";

import { COLORS } from "../../global.style";

export const FeatureListContainer = styled.ul`
    margin: 3rem 0;
    list-style: none;
    padding: 3rem;
    border-top: 1px solid ${ COLORS.lightGrey2 };
    border-bottom: 1px solid ${ COLORS.lightGrey2 };

    display: flex;
    flex-wrap: wrap;
`;

export const FeatureListItem = styled.li`
    flex: 0 0 50%;
    margin-bottom: 0.7rem;

    &::before {
        content: "";
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin-right: 0.7rem;

        // older browsers
        // background-image: url(${chevron});
        // background-size: cover;

        // newer browsers - masks
        background-color: ${ COLORS.primary};
        -webkit-mask-image: url(${chevron});
        -webkit-mask-size: cover;
    }
`;