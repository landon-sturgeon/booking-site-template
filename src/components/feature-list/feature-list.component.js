import React from "react";

import {
    FeatureListContainer, FeatureListItem
} from "./feature-list.style";

const FeatureList = () => (
    <FeatureListContainer>
        <FeatureListItem>Close to the beach</FeatureListItem>
        <FeatureListItem>Breakfast included</FeatureListItem>
        <FeatureListItem>Free airport shuttle</FeatureListItem>
        <FeatureListItem>Free wifi in all rooms</FeatureListItem>
        <FeatureListItem>Air conditioning and heating</FeatureListItem>
        <FeatureListItem>Pets allowed</FeatureListItem>
        <FeatureListItem>We speak all languages</FeatureListItem>
        <FeatureListItem>Perfect for families</FeatureListItem>
    </FeatureListContainer>
);

export default FeatureList;