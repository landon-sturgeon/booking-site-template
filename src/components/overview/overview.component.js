import React from "react";

import InlineButton from "../inline-button/inline-button.component";

import Sprite from "../../assets/img/sprite.svg";

import { 
    OverviewContainer, OverviewHeading, OverviewStarRatingContainer,
    OverviewLocationContainer, OverviewAverageRatingContainer, OverviewAverageRating,
    OverviewRatingCount, OverviewIconStar, OverviewIconLocation
} from "./overview.style";

const Overview = ({name}) => (
    <OverviewContainer>
        <OverviewHeading>
            {name}
        </OverviewHeading>
        <OverviewStarRatingContainer>
            <OverviewIconStar>
                <use xlinkHref={`${Sprite}#icon-star`} />
            </OverviewIconStar>
            <OverviewIconStar>
                <use xlinkHref={`${Sprite}#icon-star`} />
            </OverviewIconStar>
            <OverviewIconStar>
                <use xlinkHref={`${Sprite}#icon-star`} />
            </OverviewIconStar>
            <OverviewIconStar>
                <use xlinkHref={`${Sprite}#icon-star`} />
            </OverviewIconStar>
            <OverviewIconStar>
                <use xlinkHref={`${Sprite}#icon-star`} />
            </OverviewIconStar>
        </OverviewStarRatingContainer>

        <OverviewLocationContainer>
            <OverviewIconLocation>
                <use xlinkHref={`${Sprite}#icon-location-pin`} />
            </OverviewIconLocation>
            <InlineButton buttonTitle={"Albufeira, Portugal"} />
        </OverviewLocationContainer>

        <OverviewAverageRatingContainer>
            <OverviewAverageRating>
                8.6
            </OverviewAverageRating>
            <OverviewRatingCount>
                429 votes
            </OverviewRatingCount>
        </OverviewAverageRatingContainer>
    </OverviewContainer>
);

export default Overview;