import React from "react";

import user3 from "../../assets/img/user-3.jpg";
import user4 from "../../assets/img/user-4.jpg";
import user5 from "../../assets/img/user-5.jpg";
import user6 from "../../assets/img/user-6.jpg";

import {
    RecommendationContainer, RecommendationCount, RecommendationFriends,
    RecommendationFriendPhoto
} from "./recommendation.style";

const Recommendation = () => (
    <RecommendationContainer>
        <RecommendationCount>
            Lucy and 3 other friends recommend this hotel
        </RecommendationCount>
        <RecommendationFriends>
            <RecommendationFriendPhoto src={user3} alt="Friend1"/>
            <RecommendationFriendPhoto src={user4} alt="Friend2"/>
            <RecommendationFriendPhoto src={user5} alt="Friend3"/>
            <RecommendationFriendPhoto src={user6} alt="Friend4"/>
        </RecommendationFriends>
    </RecommendationContainer>
);

export default Recommendation;